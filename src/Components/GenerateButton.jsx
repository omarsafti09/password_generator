const GenerateButton = ({ handleClick }) => {
  return (
    <button
      className="w-full flex flex-col justify-center items-center bg-gray-700 text-white h-8 rounded font-semibold outline-none hover:bg-lime-500 hover:text-black"
      onClick={handleClick}
    >
      Generate
    </button>
  );
};

export default GenerateButton;
