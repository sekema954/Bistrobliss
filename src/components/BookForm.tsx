import { useState } from 'react';

function BookForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '', 
    guests: '',
  });

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
    console.log('Form Data:', formData);

    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '1',
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-4 w-full max-w-[500px] bg-white p-6 shadow-md rounded-lg"
    >
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
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="xxx-xxx-xxxx"
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
