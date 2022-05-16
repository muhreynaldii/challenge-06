import React, { useState } from "react";
import Hero from "../../assets/images/img-mobil.png";
import LogoBCR from "../../assets/images/logo-bcr.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://rent-car-appx.herokuapp.com/admin/auth/register",
        data: registerData,
      });

      console.log(res.status);

      if (res.status === 201) {
        alert("Register Success!");
        navigate("login");
      }
    } catch (error) {
      alert("Register Failed! Email Already Exist!");
    }
  };
  return (
    <div className="container flex">
      <div className="w-3/5">
        <img src={Hero} alt="mobil=hero" className="h-screen w-full" />
      </div>
      <div className="flex w-2/5 items-center justify-center">
        <div className="container mx-16 ">
          <img className="my-8" src={LogoBCR} alt="" />
          <h2 className="my-8 text-3xl font-bold">Create New Account</h2>
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Contoh : Johndoe@gmail.com"
            className="my-2 block w-full rounded-sm border-2 border-slate-200 px-2 py-2"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                email: e.target.value,
              })
            }
          />
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="6+ karakter"
            className="my-2 block w-full rounded-sm border-2 border-slate-200 px-2 py-2"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                password: e.target.value,
              })
            }
          />
          <button
            className="my-8 block w-full rounded bg-blue-900 py-2 text-center text-white"
            onClick={() => {
              handleSubmit();
            }}
          >
            {" "}
            Sign Up
          </button>
          <span>
            Already Have an Account?
            <Link to="/login" className="mx-2 text-blue-500">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
