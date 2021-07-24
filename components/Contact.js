import { useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  email: '',
  name: '',
  subject: '',
  idea: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState);

  const { email, name, subject, idea } = form;

  function handleChange({ target: { name, value } }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function resetForm() {
    setForm(initialState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: idea,
          subject,
        },
        process.env.EMAILJS_USER_ID
      )
      .then((response) => {
        if (response.status === 200) {
          resetForm();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="text-4xl mb-6 font-bold md:text-5xl text-center md:m-10">
        <span className="text-blue-800">Let's </span>
        get in
        <span className="text-blue-800"> touch</span>
      </div>
      <form
        className="shadow-lg w-full md:w-1/2 rounded-md p-6 mx-auto"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2"
          value={subject}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Write your idea"
          name="idea"
          className="h-24 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2 resize-none"
          value={idea}
          onChange={handleChange}
          required
        ></textarea>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 w-full rounded-md">
          Submit
        </button>
      </form>
    </>
  );
}
