import {  useState } from 'react';

function BookForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    date: '',
    time: '', 
    guests: '',
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input changes
  const handleChange = (e:any) => {
    const { name, value, } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(!formData.name || !formData.phoneNumber || !formData.date || !formData.time || !formData.guests) {
      setErrorMsg('All Fields Required');
    }
    setTimeout(()=>{
      setErrorMsg('');
    }, 4000);
    setFormData({
      name: '',
      phoneNumber: '',
      date: '',
      time: '',
      guests: '',
    });
    postBookings();
  }; 
  const postBookings  = async () =>{
    const url = "http://localhost:5004/api/bookings";
    const options = {
      method: "post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    }
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error(`Error Posting Data ${response.status}`);
    } else {
      setSuccessMsg("Your Table Has Been Bookeds Successfully!");
      setTimeout(()=>{
        setSuccessMsg("");
      }, 3000);
      setTimeout(()=>{
          setFormData({name:"", phoneNumber:"", date:"", time:"", guests:""})
      }, 2000);
    }
    const result = await response.json();
    console.log(result);
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-4 w-full max-w-[500px] bg-white p-6 shadow-md rounded-lg"
    >
      <div>
        <p className='text-center text-green-400 font-bold text-sm'>{successMsg}</p>
        <p className='text-center text-red-400 font-bold text-sm'>{errorMsg}</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700">Phone</label>
        <input
          type="phone"
          id="phone"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+14535460345"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="date" className="text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="time" className="text-gray-700">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="guests" className="text-gray-700">Number of Guests</label>
        <select
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="select">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="bg-red-800 text-white p-3 rounded-md hover:bg-white hover:border hover:border-gray-500 hover:text-black transition duration-200"
      >
        Book Now
      </button>
    </form>
  );
}

export default BookForm;
