import React, { useState } from "react";
import Hero from "../../assets/images/img-mobil.png";
import LogoBCR from "../../assets/images/logo-bcr.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = async () => {
    try {
      if (!loginData.email || !loginData.password) {
        alert("Please fill all the fields!");
      }
      const res = await axios({
        method: "POST",
        url: "https://rent-car-appx.herokuapp.com/admin/auth/login",
        data: loginData,
      });

      console.log(res.status);

      if (res.status === 201) {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("role", res.data.role);
        if (res.data.role === "admin") {
          navigate("/dashboard", { replace: true });
        }
        if (res.data.role === "user") {
          navigate("/", { replace: true });
        }
      }
    } catch (error) {
      if (error.response.status === 404) {
        alert("Login Failed!");
      }
      if (error.response.status === 400) {
        alert("Login Failed! Wrong Password!");
      }
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
          <h2 className="my-8 text-3xl font-bold">Welcome Admin BCR</h2>
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Contoh : Johndoe@gmail.com"
            className="my-2 block w-full rounded-sm border-2 border-slate-200 px-2 py-2"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({
                ...loginData,
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
            value={loginData.password}
            onChange={(e) =>
              setLoginData({
                ...loginData,
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
            Sign In
          </button>
          <span>
            Don't Have Account Yet?
            <Link to="/register" className="mx-2 text-blue-500">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
