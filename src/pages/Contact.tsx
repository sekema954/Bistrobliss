import { useState } from "react";
function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const [result, setResult] = useState("");
  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "ead77d98-db96-4573-8d49-cb3095684216");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col relative">
      <div className="h-[50%] bg-[#F9F9F7]">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-[30px] md:text-[55px]">Contact Us</p>
        </div>
      </div>
      <div className="h-[50%] bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto">
        <div className="bg-white border rounded-[20px] shadow-lg p-5">
          <form className="flex flex-col gap-5" onSubmit={handleSubmitForm}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-3 flex-1">
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange}
                  className="border border-gray-200 px-3 py-2 rounded-full"
                  type="text"
                  id="name"
                  value={formValue.name}
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  className="border border-gray-200 px-3 py-2 rounded-full"
                  type="email"
                  id="email"
                  value={formValue.email}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="subject">Subject</label>
              <input
                onChange={handleChange}
                className="border border-gray-200 px-3 py-2 rounded-full"
                type="text"
                id="subject"
                value={formValue.subject}
                placeholder="Write a Subject"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={handleChange}
                className="border border-gray-200 px-3 py-2 rounded-xl resize-none h-[100px]"
                id="message"
                value={formValue.message}
                placeholder="Write your message here..."
                required
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-red-800 text-white rounded-full hover:bg-white hover:border hover:border-gray-300 hover:text-black transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center gap-6 p-5">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out to us for any inquiries, feedback, or just to say hello. We are here to assist you!
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-lg">Email:</h3>
              <p>support@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone:</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address:</h3>
              <p>123 Main Street, Suite 500<br />City, State, ZIP Code</p>
            </div>
          </div>
        </div>
      </div>
      <span>{result}</span>
    </div>
  );
}

export default Contact;
