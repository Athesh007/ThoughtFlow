import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState();
  const navigation = useNavigate();

  const handlesubmit = async (event) => {
    event.preventDefault();
    const register = await fetch(
      `${import.meta.env.VITE_CONNECTIVITY}/user/register`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    if (register.message === "User created successfully") {
      localStorage.setItem("user", register.newUser._id);
      navigation("/login");
    } else {
      alert(register.message);
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
          Register
        </div>
        <div className="text-xl font-semibold pb-2">Email</div>
        <input
          onChange={handlechange}
          className="border border-neutral-300 p-2 rounded-lg"
          required="true"
          type="email"
          name="email"
        />
        <div className="text-xl font-semibold pb-2">Username</div>
        <input
          onChange={handlechange}
          className="border border-neutral-300 p-2 rounded-lg"
          required="true"
          type="text"
          name="username"
        />
        <div className="pt-4 pb-2 text-xl font-semibold ">Password</div>
        <input
          onChange={handlechange}
          className="border border-neutral-300 p-2 rounded-lg mb-4"
          required="true"
          type="password"
          name="password"
        />
        <button className="p-2 bg-black text-white rounded-xl">Register</button>
        <Link to="/login">
          <button className="border-2 text-blue-900 font-bold p-2 w-full rounded-xl">
            <span className="text-black font-normal">
              Already have account{" "}
            </span>
            Log In
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
