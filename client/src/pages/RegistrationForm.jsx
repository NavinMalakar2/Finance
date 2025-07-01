import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function RegistrationForm() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    employeeID: "",
    companyName: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("https://finance-j3r3.onrender.com", formData, { withCredentials: true });
      setMessage(res.data.message);
      navigate("/login")
      
    } catch (err) {
      setMessage(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4"
    style={{
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg p-8 rounded-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center">Register</h2>

        {message && <p className="text-center text-sm text-red-600">{message}</p>}

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Role</option>
            <option value="customer">Customer</option>
            <option value="customer">Bussines</option>
          </select>
        </div>

        {/* {formData.role === "employee" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              name="employeeID"
              value={formData.employeeID}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        )} */}

        {formData.role === "businessman" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
        <div className="text-sm text-center">
  Already have an account?{" "}
  <Link to="/login" className="text-blue-600 hover:underline font-semibold">
    Login
  </Link>
</div>

        
      </form>
      
    </div>
  );
}
