const InputEmail = ({ email, handleChange }) => {
  return (
    <input
      type="email"
      name="Email"
      id="email"
      className="w-full p-2 h-8 bg-gray-700 focus:bg-lime-500 focus:placeholder:text-black rounded placeholder:text-white outline-none font-semibold"
      placeholder="Enter Email..."
      value={email}
      onChange={handleChange}
      autoComplete="true"
    />
  );
};

export default InputEmail;
