<img src="https://i.imgur.com/HGrpJD6.png" alt="Bistro Bliss Logo">

<h1>Welcome to Bistro Bliss!</h1>
<p>
  Where every reservation marks the beginning of a culinary journey. From the first bite to the last sip, we craft unforgettable dining experiences that bring people together.
</p>

<h1>Table of Contents</h1>
<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#tech-stack">Tech Stack</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#folder-structure">Folder Structure</a></li>
</ul>

<h1 id="features">Features</h1>
<p>- Responsive design for seamless user experience on any device.</p>
<p>- Reservation system with automatic text notifications using Twilio.</p>
<p>- User-friendly interface for managing bookings and checking availability.</p>
<p>- User-friendly Menu option</p>


<h1 id="tech-stack">Tech Stack</h1>
<ul>
  <li>Vite + React</li>
  <li>TypeScript</li>
  <li>Node.js</li>
  <li>Twilio</li>
  <li>MongoDB</li>
  <li>TailwindCSS</li>
  <li>Heroku</li>
</ul>

<h1 id="installation">Installation</h1>
<p>To set up and run the Bistro Bliss application, follow these steps:</p>

<h2>Clone the Repository</h2>
<pre>
<code>git clone https://github.com/sekema954/Bistrobliss.git</code>
</pre>

<h2>Navigate to the Project Directory</h2>
<pre>
<code>cd bistro-bliss</code>
</pre>

<h2>Install Dependencies</h2>
<pre>
<code>npm install</code>
</pre>

<h2>Start the Development Server</h2>
<pre>
<code>npm run dev</code>
</pre>

<h1 id="usage">Usage</h1>
<p>After starting the development server, navigate to <a href="http://localhost:3000" target="_blank">http://localhost:[dev port]</a> in your web browser to access the Bistro Bliss application. You can browse, book reservations, and receive confirmation messages.</p>

<h1 id="folder-structure">Folder Structure</h1>
<p>Here’s the folder structure for the Bistro Bliss project:</p>
<pre>
<code>
BISTROBLISS/
 backend/
  # Backend dependencies
│   ├── .env/                # .env variables
│   ├── controllers/         # Logic for handling requests
│   ├── models/              # MongoDB schemas
│   ├── node_modules/        
│   └── package.json 
├── public/
│   ├── index.html           # Main HTML file for the frontend
│   └── favicon.ico          # Application favicon
├── src/
│   ├── assets/              # Images and static files
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components (e.g., Home, Reservation)
│   ├── services/            # API handling and data fetching
│   ├── styles/              # TailwindCSS and global styles
│   ├── App.js               # Main application file
│   └── index.js             # React entry point
├── .gitignore
├── package.json  
├── .env                     # Frontend .env variables
└── README.md                # Project overview and setup instructions
</code>
</pre>
