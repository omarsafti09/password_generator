import { useState } from "react";
import GenerateButton from "../Components/GenerateButton";
import InputEmail from "../Components/InputEmail";
import InputWebsite from "../Components/InputWebsite";
import Password from "../Components/Password";
import { Link } from "react-router-dom";
import SaveButton from "../Components/SaveButton";
import { supabase } from "../utils/supabase";

const PasswordAdd = () => {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const savePassword = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("Passwords").insert([
      {
        Website: website,
        Email: email,
        Password: password,
      },
    ]);
    alert("Password Saved Successfully...");
    setTimeout(window.location.reload(), 3000);
  };

  const generatePassword = (e) => {
    e.preventDefault();
    const charachters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()-_=+[]{}<>?";
    let generatedPassword = "";
    for (let i = 0; i < 12; i++) {
      const r = Math.floor(Math.random() * charachters.length);
      generatedPassword += charachters.charAt(r);
    }
    setPassword(generatedPassword);
  };

  const handleWebsite = (e) => {
    e.preventDefault();
    setWebsite(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div className="w-10/12 bg-gray-800 p-4 flex flex-col justify-center items-center gap-2 rounded">
      <Link
        to="/"
        className="w-full flex justify-center items-center p-2 text-black rounded h-8 bg-lime-500 outline-none font-semibold"
      >
        Home
      </Link>
      <InputWebsite website={website} handleChange={handleWebsite} />
      <InputEmail email={email} handleChange={handleEmail} />
      <Password Password={password} />
      <GenerateButton handleClick={generatePassword} />
      <SaveButton handleClick={savePassword} />
    </div>
  );
};

export default PasswordAdd;
