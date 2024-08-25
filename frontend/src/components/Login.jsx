import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handlesubmit = async (event) => {
    event.preventDefault();
    const login = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    if (login.message === "Login successful") {
      localStorage.setItem("user", login.user._id);
      navigate("/"); // Redirect to the homepage after successful login
    } else {
      alert("Please enter the correct email and password");
    }
  };

  const handlechange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="w-full h-full overflow-hidden flex justify-center">
      <form
        onSubmit={handlesubmit}
        className="border border-neutral-500 flex flex-col gap-2 w-[500px] p-4 rounded-lg py-6"
      >
        <div className="w-full  flex justify-center text-3xl font-semibold pb-6">
          Login
        </div>
        <div className="text-xl font-semibold pb-2">Email</div>
        <input
          onChange={handlechange}
          className="border border-neutral-300 p-2 rounded-lg"
          required="true"
          type="email"
          name="email"
        />
        <div className="pt-6 pb-2 text-xl font-semibold ">Password</div>
        <input
          onChange={handlechange}
          className="border border-neutral-300 p-2 rounded-lg mb-4"
          required="true"
          type="password"
          name="password"
        />
        <button className="p-2 bg-black text-white rounded-xl">Log In</button>
        <Link to="/register">
          <button className="border-2 p-2 text-blue-900 font-bold w-full rounded-xl">
            <span className="text-black font-normal">Create new account </span>
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
