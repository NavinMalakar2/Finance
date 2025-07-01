// 

// File: src/pages/EmployeeDashboard.jsx

// import { useState, useEffect } from "react";

// export default function EmployeeDashboard() {
//   const [tab, setTab] = useState("profile");
//   const [employee, setEmployee] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     designation: ""
//   });
//   const [editing, setEditing] = useState(false);
//   const [services, setServices] = useState([]);
//   const [newService, setNewService] = useState({ title: "", description: "" });

//   useEffect(() => {
//     // Dummy data for testing frontend
//     setEmployee({
//       name: "John Doe",
//       email: "john@example.com",
//       phone: "9876543210",
//       city: "Indore",
//       designation: "Claim Assistant"
//     });

//     setServices([
//       { id: 1, title: "Car Insurance Claims", description: "Handling claims for 4-wheelers" },
//       { id: 2, title: "Life Policy Setup", description: "Onboard customer with Life policy" }
//     ]);
//   }, []);

//   const handleProfileChange = (e) => {
//     setEmployee({ ...employee, [e.target.name]: e.target.value });
//   };

//   const handleServiceChange = (e) => {
//     setNewService({ ...newService, [e.target.name]: e.target.value });
//   };

//   const handleServiceAdd = () => {
//     if (!newService.title || !newService.description) return;
//     setServices([...services, { id: Date.now(), ...newService }]);
//     setNewService({ title: "", description: "" });
//   };

//   const handleServiceDelete = (id) => {
//     setServices(services.filter((s) => s.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-blue-700">Employee Dashboard</h1>
//         <div className="space-x-4">
//           <button
//             className={`font-medium ${tab === "profile" ? "text-blue-600" : "text-gray-600"}`}
//             onClick={() => setTab("profile")}
//           >
//             Profile
//           </button>
//           <button
//             className={`font-medium ${tab === "work" ? "text-blue-600" : "text-gray-600"}`}
//             onClick={() => setTab("work")}
//           >
//             Work
//           </button>
//         </div>
//       </nav>

//       <main className="max-w-5xl mx-auto p-4">
//         {tab === "profile" && (
//           <div className="bg-white p-6 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block font-semibold">Name</label>
//               <input
//                 name="name"
//                 value={employee.name}
//                 onChange={handleProfileChange}
//                 className="w-full border px-3 py-2 rounded mt-1"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold">Email</label>
//               <input
//                 name="email"
//                 value={employee.email}
//                 onChange={handleProfileChange}
//                 className="w-full border px-3 py-2 rounded mt-1"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold">Phone</label>
//               <input
//                 name="phone"
//                 value={employee.phone}
//                 onChange={handleProfileChange}
//                 className="w-full border px-3 py-2 rounded mt-1"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold">City</label>
//               <input
//                 name="city"
//                 value={employee.city}
//                 onChange={handleProfileChange}
//                 className="w-full border px-3 py-2 rounded mt-1"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block font-semibold">Designation</label>
//               <input
//                 name="designation"
//                 value={employee.designation}
//                 onChange={handleProfileChange}
//                 className="w-full border px-3 py-2 rounded mt-1"
//               />
//             </div>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded col-span-full mt-2">
//               Save Profile
//             </button>
//           </div>
//         )}

//         {tab === "work" && (
//           <div className="bg-white p-6 rounded shadow-md space-y-6">
//             <h2 className="text-lg font-semibold">Assigned Services</h2>
//             {services.map((s) => (
//               <div key={s.id} className="border rounded p-3 flex justify-between items-start">
//                 <div>
//                   <p className="font-semibold">{s.title}</p>
//                   <p className="text-sm text-gray-600">{s.description}</p>
//                 </div>
//                 <button
//                   className="text-red-600 hover:underline text-sm"
//                   onClick={() => handleServiceDelete(s.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             <div className="border-t pt-4">
//               <h3 className="font-medium mb-2">Add New Service</h3>
//               <input
//                 name="title"
//                 value={newService.title}
//                 onChange={handleServiceChange}
//                 placeholder="Service Title"
//                 className="w-full border px-3 py-2 rounded mb-2"
//               />
//               <textarea
//                 name="description"
//                 value={newService.description}
//                 onChange={handleServiceChange}
//                 placeholder="Service Description"
//                 className="w-full border px-3 py-2 rounded mb-2"
//               ></textarea>
//               <button
//                 onClick={handleServiceAdd}
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//               >
//                 Add Service
//               </button>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }
// 📁 src/pages/EmployeeDashboard.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export default function EmployeeDashboard() {
  const [tab, setTab] = useState("profile");
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    department: "",
    experience: ""
  });
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: "", description: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // You can fetch profile/services from API here later
  }, []);

  const handleProfileChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = () => {
    setMessage("Profile saved successfully!");
  };

  const handleServiceAdd = () => {
    if (newService.title && newService.description) {
      setServices([...services, newService]);
      setNewService({ title: "", description: "" });
    }
  };

  const handleServiceDelete = (index) => {
    const updated = services.filter((_, i) => i !== index);
    setServices(updated);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-center border-b">
          <button
            onClick={() => setTab("profile")}
            className={`px-6 py-3 text-sm font-semibold ${tab === "profile" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
          >
            Profile
          </button>
          <button
            onClick={() => setTab("services")}
            className={`px-6 py-3 text-sm font-semibold ${tab === "services" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
          >
            Manage Tasks
          </button>
        </div>

        <div className="p-6">
          {message && <div className="text-green-600 text-center font-semibold mb-4">{message}</div>}

          {tab === "profile" && (
            <div className="grid md:grid-cols-2 gap-4">
              {Object.keys(employee).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">{key}</label>
                  <input
                    type="text"
                    name={key}
                    value={employee[key]}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              ))}

              <div className="md:col-span-2 text-center">
                <button
                  onClick={handleProfileSubmit}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Save Profile
                </button>
              </div>

              <div className="md:col-span-2 mt-4 border p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2 text-blue-800">Saved Profile</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {Object.entries(employee).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value || "-"}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tab === "services" && (
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Add New Task</h3>
                <input
                  type="text"
                  placeholder="Title"
                  value={newService.title}
                  onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                  className="mr-2 px-3 py-2 border rounded-lg w-full mb-2"
                />
                <textarea
                  placeholder="Description"
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  className="px-3 py-2 border rounded-lg w-full mb-2"
                />
                <button
                  onClick={handleServiceAdd}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Add Task
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {services.map((task, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h4 className="font-semibold text-blue-800 text-lg mb-1">{task.title}</h4>
                    <p className="text-gray-700 text-sm mb-2">{task.description}</p>
                    <button
                      onClick={() => handleServiceDelete(index)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {services.length === 0 && <p className="text-gray-500">No tasks added yet.</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
