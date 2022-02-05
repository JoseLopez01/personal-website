import { useState } from 'react';

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import LoadingDots from './LoadingDots';

const initialState = {
  email: '',
  name: '',
  idea: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { email, name, idea } = form;

  function handleChange({ target: { name, value } }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function resetForm() {
    setForm(initialState);
  }

  function sendEmail(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID) {
    return emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        message: idea,
        subject: 'PERSONAL WEBSITE',
      },
      EMAILJS_USER_ID
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        NEXT_PUBLIC_SERVICE_ID,
        NEXT_PUBLIC_TEMPLATE_ID,
        NEXT_PUBLIC_USER_ID,
      } = process.env;
      const response = await sendEmail(
        NEXT_PUBLIC_SERVICE_ID,
        NEXT_PUBLIC_TEMPLATE_ID,
        NEXT_PUBLIC_USER_ID
      );
      if (response.status === 200) {
        resetForm();
        Swal.fire({
          title: 'The email was sent',
          position: 'top-right',
          icon: 'success',
          toast: true,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log({ error });
      Swal.fire({
        title: 'Something went wrong!',
        position: 'top-right',
        icon: 'error',
        toast: true,
        timer: 1500,
      });
    }
    setLoading(false);
  }

  return (
    <>
      <div
        className="text-4xl pt-10 font-bold md:text-5xl text-center md:m-10"
        id="contact"
      >
        <span className="text-blue-800">Let's </span>
        get in
        <span className="text-blue-800"> touch</span>
      </div>
      <form
        className="shadow-lg w-full md:w-1/2 rounded-md p-6 mx-auto"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <fieldset disabled={loading}>
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
          <textarea
            placeholder="Write your idea"
            name="idea"
            className="h-24 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2 resize-none"
            value={idea}
            onChange={handleChange}
            required
          ></textarea>
        </fieldset>
        <button
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 w-full rounded-md"
          disabled={loading}
        >
          {loading ? <LoadingDots /> : 'Submit'}
        </button>
      </form>
    </>
  );
}
