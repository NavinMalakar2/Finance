import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [message, setMessage] = useState("");
 const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setMessage("");

  //   try {
  //     const res = await axios.post("http://localhost:8001/api/auth/login", formData, {
  //       withCredentials: true,
  //     });

  //     setMessage(res.data.message || "Login successful");

  //     // Optional: redirect based on role
  //     // if (res.data.user.role === "admin") navigate("/admin");
  //     const role = res.data.user.role;
  //      if (role === "customer") {
  //       navigate("/");
  //     } else if (role === "employee") {
  //       navigate("/employeedashboard");
  //     } else if (role === "businessman") {
  //       navigate("/business-dashboard");
  //     }
      
  //   } catch (err) {
  //     setMessage(err.response?.data?.msg || "Login failed");
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    const res = await axios.post("https://finance-c45v.onrender.com/api/auth/login", formData, {
      withCredentials: true,
    });

    setMessage(res.data.message || "Login successful");

    const role = res.data.user.role;

    // ✅ Save role to localStorage
    localStorage.setItem("userRole", role);

    // ✅ 🔄 Notify Navbar (important line)
    window.dispatchEvent(new Event("storage"));

    // ✅ Redirect based on role
    if (role === "customer") {
      navigate("/");
      
    } else if (role === "employee") {
      navigate("/employeedashboard");
    } else if (role === "admin") {
      navigate("/admindashboard");
    }
  } catch (err) {
    setMessage(err.response?.data?.msg || "Login failed");
  }
};


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Login</h2>

        {message && (
          <p className="text-center text-sm text-red-600 mb-3">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
  name="role"
  value={formData.role}
  required
  onChange={handleChange}
  className="w-full px-3 py-2 border rounded-lg mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Select Role</option>
  <option value="customer">Customer</option>
  <option value="employee">Employee</option>
  <option value="admin">Admin</option>
</select>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
          <div className="text-sm text-center mt-4">
  Not registered yet?{" "}
  <Link to="/ragistration" className="text-blue-600 hover:underline font-semibold">
    Register
  </Link>
</div>

        </form>
      </div>
    </div>
  );
}
