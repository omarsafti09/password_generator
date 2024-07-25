import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../utils/supabase";

const PasswordView = () => {
  const [passwordsList, setPasswordsList] = useState([]);

  useEffect(() => {
    const getPasswords = async () => {
      const { data: passwords } = await supabase.from("Passwords").select();
      setPasswordsList(passwords);
    };
    getPasswords();
  }, []);

  const deletePassword = async (id, e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("Passwords")
      .delete()
      .eq("Website", id);
    alert("Password Deleted Successfully...");
    setTimeout(window.location.reload(), 3000);
  };

  return (
    <div className="w-full bg-gray-800 p-4 flex flex-col justify-center items-center gap-4 rounded">
      <Link
        to="/Add"
        className="w-full flex justify-center items-center p-2 text-black rounded h-8 bg-lime-500 outline-none font-semibold"
      >
        Add Password
      </Link>
      <div className="flex justify-between w-full text-white font-semibold">
        <h2>Website</h2>
        <h2>Email</h2>
        <h2>Password</h2>
        <h2>Delete</h2>
      </div>
      {passwordsList.map((item) => {
        return (
          <div className="flex justify-between w-full text-white font-semibold">
            <h2>{item.Website}</h2>
            <h2>{item.Email}</h2>
            <h2>{item.Password}</h2>
            <button
              className="text-red-400"
              onClick={(e) => deletePassword(item.Website, e)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PasswordView;
