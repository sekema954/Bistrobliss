const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5004;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const table_bookings = require('./models/Booking');
require('dotenv').config({ path: path.join(__dirname, '.env') });


//twilio setup
const twilio = require('twilio');
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(bodyParser.json());
app.use(cors());

//Connect to database
mongoose.connect(process.env.MONGODB_URI, {})
.then(()=>{
  console.log('Mongodb connected');
}).catch((err)=>{
  console.log("Error connection to mongodb");
});



//server frontend  build files to backend
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});


//Route to post bookings to database // mongodb
app.post('/api/bookings', async (req, res)=>{
  const { name, phoneNumber, date, time, guests} = req.body;
  if(!name || !phoneNumber || !date || !time || !guests) {
    return res.status(400).json({message: "All fields required!"});
  }

  try{
    const newBooking = new table_bookings({ name, phoneNumber, date, time, guests });
    const saveBooking = await newBooking.save();

    //send text to client
    twilioClient.messages.create({
      body: `Hi ${name}, thank you for booing with us. We'll let you know when your table is ready.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to:phoneNumber
    })
    .then(message => console.log('Text sent:', message.sid))
    .catch(error => console.error('Error sending text:', error));


    res.status(201).json({message: 'Booking successful', booking: saveBooking});
  } catch(error) {
      console.error('Error saving booking:', error);
      res.status(500).json({message: "Error saving booking" });
  }
})



//find free port 
app.listen(PORT, ()=>console.log(`server running on http://localhost:${PORT}`));
