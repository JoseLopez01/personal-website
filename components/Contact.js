export default function Contact() {
  return (
    <>
      <div className="text-4xl mb-6 font-bold md:text-5xl text-center md:m-10">
        <span className="text-blue-800">Let's </span>
        get in
        <span className="text-blue-800"> touch</span>
      </div>
      <form className="shadow-lg w-full md:w-1/2 rounded-md p-6 mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2"
          required
        />
        <input
          type="text"
          placeholder="Email"
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2"
          required
        />
        <textarea
          placeholder="Write your idea"
          className="h-24 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 my-2 resize-none"
          required
        ></textarea>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 w-full rounded-md">
          Submit
        </button>
      </form>
    </>
  );
}
