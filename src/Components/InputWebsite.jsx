const InputWebsite = ({ website, handleChange }) => {
  return (
    <input
      type="text"
      name="Website"
      id="website"
      className="w-full p-2 h-8 bg-gray-700 focus:bg-lime-500 focus:placeholder:text-black rounded placeholder:text-white outline-none font-semibold"
      placeholder="Enter Website URL..."
      value={website}
      onChange={handleChange}
      autoComplete="true"
    />
  );
};

export default InputWebsite;
