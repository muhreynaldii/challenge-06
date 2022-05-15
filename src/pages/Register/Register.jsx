import React from "react";
import Hero from "../../assets/images/img-mobil.png";
import LogoBCR from "../../assets/images/logo-bcr.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container flex">
      <div className="w-3/5">
        <img src={Hero} alt="mobil=hero" className="h-screen w-full" />
      </div>
      <div className="flex w-2/5 items-center justify-center">
        <div className="container mx-16 ">
          <img className="my-8" src={LogoBCR} alt="" />
          <h2 className="my-8 text-3xl font-bold"> Create New Account</h2>
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Contoh : Johndoe@gmail.com"
            className="my-2 block w-full rounded-sm border-2 border-slate-200 px-2 py-2"
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
          />
          <button className="my-8 block w-full rounded bg-blue-900 py-2 text-center text-white">
            {" "}
            Sign Up
          </button>
          <span>
            <Link to="/login">Already Have an Account?</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
