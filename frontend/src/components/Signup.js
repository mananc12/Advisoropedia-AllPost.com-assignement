import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
// import "./Registration.css"; // Import your CSS file

//using react-toastify
import { toast } from "react-toastify";

export const Signup = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(false);

  const { storeTokenInLS } = useAuth();

  const navigate = useNavigate();

  const sendWelcomeEmail = (email, userName) => {
    console.log(`Welcome email sent to ${email} for user ${userName}`);
    toast.success("Registeration Successful!");
    toast.success(`Welcome email sent to ${email} for user ${userName}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        userName,
        email,
        password,
        confirmPassword,
        name,
        profilePicture,
        check,
      });

      storeTokenInLS(res.data.token);
      setUserName("");
      setName("");
      setEmail("");
      setProfilePicture("");
      setPassword("");
      setConfirmPassword("");
      setCheck(true);

      // Simulate sending a welcome email
      sendWelcomeEmail(email, userName);
      // toast.success("Signup Successful!");
      navigate("/posts");
    } catch (error) {
      console.log(
        error.response.data.extraDetails
          ? error.response.data.extraDetails.map((i) => i)
          : error.response.data.message
      );
      error.response.data.extraDetails
        ? error.response.data.extraDetails.map((i) => toast.error(i))
        : toast.error(error.response.data.message);
    }
  };

  return (
    <div className="registration-container flex flex-col justify-center items-center w-[300px] md:w-[600px] m-auto mt-10 p-5 bg-[#6600FF] text-[#fff] rounded-xl shadow-[0 0 10px rgba(0, 0, 0, 0.1)] ">
      <h1 className="font-bold mb-5 text-xl">Register for an Account</h1>
      <form
        onSubmit={handleSubmit}
        className="registration-form flex justify-center w-[100%] flex-col items-center gap-[10px]"
      >
        <div className="w-[80%]">
          <label htmlFor="userName" className="block mb-[5px]">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>

        <div className="w-[80%]">
          <label htmlFor="email" className="block mb-[5px]">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="password" className="block mb-[5px]">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="confirmPassword" className="block mb-[5px]">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="name" className="block mb-[5px]">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="w-[80%]">
          <label htmlFor="profilePicture" className="block mb-[5px]">
            Profile Picture:
          </label>
          <input
            type="file"
            accept="image/*"
            id="profilePicture"
            name="profilePicture"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            className="w-[100%] p-2 border-solid border-[1px] border-[#ccc] rounded-md box-border mb-3 text-black"
          />
        </div>
        <div className="flex flex-initial mb-5 gap-5">
          <input type="checkbox" onChange={() => setCheck(!check)} />
          <label>Accept Terms & Conditions</label>
        </div>
        <button
          type="submit"
          className="w-32 font-bold bg-white text-[#6600FF] p-2 rounded cursor-pointer transition-[0.3s] border-solid border-[2px] hover:bg-[#6600FF] hover:border-[#ddd] hover:text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};
