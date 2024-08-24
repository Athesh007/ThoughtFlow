import { useState } from "react";

const Register = () => {
  const [data, setData] = useState();

  const handlesubmit = async (event) => {
    event.preventDefault();
    const register = await fetch("http://localhost:3000/user/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    localStorage.setItem("user", register.newUser._id);
  };
  const handlechange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="w-full h-full overflow-hidden flex justify-center">
      <form
        onSubmit={handlesubmit}
        className="border border-neutral-500 flex flex-col gap-2 w-[280px] p-4 rounded-lg py-6"
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
        <button className="p-2 bg-black text-white rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default Register;
