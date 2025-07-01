// // src/pages/AdminDashboard.jsx
// import { useState } from "react";
// import { FaTrash, FaUserPlus, FaTasks } from "react-icons/fa";

// const dummyEmployees = [
//   { id: 1, name: "Rahul Sharma", email: "rahul@example.com" },
//   { id: 2, name: "Anita Verma", email: "anita@example.com" },
// ];

// const dummyAdmins = [
//   { id: 1, name: "Main Admin", email: "admin@neofinance.com" },
// ];

// export default function AdminDashboard() {
//   const [employees, setEmployees] = useState(dummyEmployees);
//   const [admins, setAdmins] = useState(dummyAdmins);
//   const [newEmp, setNewEmp] = useState({ name: "", email: "", empId: "" });
//   const [message, setMessage] = useState("");

//   const handleAddEmp = () => {
//     if (!newEmp.name || !newEmp.email || !newEmp.empId) return;
//     setEmployees([...employees, { ...newEmp, id: Date.now() }]);
//     setNewEmp({ name: "", email: "", empId: "" });
//     setMessage("✅ Employee added successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   const handleDeleteEmp = (id) => {
//     setEmployees(employees.filter((emp) => emp.id !== id));
//   };

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
//         Admin Dashboard
//       </h1>

//       {message && <p className="text-green-600 text-center mb-4">{message}</p>}

//       {/* Add Employee */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <FaUserPlus /> Add New Employee
//         </h2>
//         <div className="grid md:grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="border rounded px-3 py-2"
//             value={newEmp.name}
//             onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="border rounded px-3 py-2"
//             value={newEmp.email}
//             onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Employee ID"
//             className="border rounded px-3 py-2"
//             value={newEmp.empId}
//             onChange={(e) => setNewEmp({ ...newEmp, empId: e.target.value })}
//           />
//         </div>
//         <button
//           onClick={handleAddEmp}
//           className="bg-blue-600 text-white px-6 py-2 mt-4 rounded hover:bg-blue-700"
//         >
//           Add Employee
//         </button>
//       </div>

//       {/* Employee List */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">Employee List</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {employees.map((emp) => (
//             <div key={emp.id} className="border p-4 rounded shadow-sm flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold text-blue-800">{emp.name}</h3>
//                 <p className="text-sm text-gray-600">{emp.email}</p>
//               </div>
//               <button
//                 onClick={() => handleDeleteEmp(emp.id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Task Section (Placeholder) */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <FaTasks /> Assign Tasks (Coming Next)
//         </h2>
//         <p className="text-sm text-gray-600">Here you can assign tasks to employees.</p>
//       </div>

//       {/* Admin List Section (for future) */}
//       <div className="bg-white shadow rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Current Admins</h2>
//         <ul className="list-disc ml-6 text-sm text-gray-700">
//           {admins.map((admin) => (
//             <li key={admin.id}>{admin.name} - {admin.email}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// src/pages/AdminDashboard.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaTrash, FaUserPlus, FaTasks, FaUserShield } from "react-icons/fa";

// export default function AdminDashboard() {
//   const [employees, setEmployees] = useState([]);
//   const [admins, setAdmins] = useState([]);
//   const [newEmp, setNewEmp] = useState({ name: "", email: "", empId: "" });
//   const [newAdmin, setNewAdmin] = useState({ name: "", email: "", adminId: "" });
//   const [message, setMessage] = useState("");

//   // 🟡 Load all employees and admins
//   const fetchAll = async () => {
//     try {
//       const [empRes, adminRes] = await Promise.all([
//         axios.get("http://localhost:8001/api/auth/employees"),
//         axios.get("http://localhost:8001/api/auth/admins"),
//       ]);
//       setEmployees(empRes.data.employees);
//       setAdmins(adminRes.data.admins);
//     } catch (err) {
//       setMessage("❌ Failed to load data");
//     }
//   };

//   useEffect(() => {
//     fetchAll();
//   }, []);

//   // ✅ Add new employee
//   const handleAddEmp = async () => {
//     if (!newEmp.name || !newEmp.email || !newEmp.empId) return;
//     try {
//       await axios.post("http://localhost:8001/api/auth/create-employee", newEmp);
//       setNewEmp({ name: "", email: "", empId: "" });
//       setMessage("✅ Employee added");
//       fetchAll();
//     } catch (err) {
//       setMessage("❌ " + (err.response?.data?.message || "Add employee failed"));
//     }
//   };

//   // ✅ Add new admin
//   const handleAddAdmin = async () => {
//     if (!newAdmin.name || !newAdmin.email || !newAdmin.adminId) return;
//     try {
//       await axios.post("http://localhost:8001/api/auth/addadmin", {
//         ...newAdmin,
//         role: "admin",
//       });
//       setNewAdmin({ name: "", email: "", adminId: "" });
//       setMessage("✅ Admin added");
//       fetchAll();
//     } catch (err) {
//       setMessage("❌ " + (err.response?.data?.message || "Add admin failed"));
//     }
//   };

//   // 🗑 Delete employee
//   const handleDeleteEmp = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8001/api/auth/employee/${id}`);
//       setMessage("✅ Employee removed");
//       fetchAll();
//     } catch {
//       setMessage("❌ Failed to delete employee");
//     }
//   };

//   // 🗑 Delete admin
//   const handleDeleteAdmin = async (id) => {
//     try {
//       await axios.delete(`/api/admin/admins/deleteadmin${id}`);
//       setMessage("✅ Admin removed");
//       fetchAll();
//     } catch {
//       setMessage("❌ Failed to delete admin");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Admin Dashboard</h1>

//       {message && <p className="text-green-600 text-center mb-4">{message}</p>}

//       {/* 🔷 Add New Employee */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaUserPlus /> Add Employee</h2>
//         <div className="grid md:grid-cols-3 gap-4">
//           <input type="text" placeholder="Name" className="border rounded px-3 py-2"
//             value={newEmp.name} onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })} />
//           <input type="email" placeholder="Email" className="border rounded px-3 py-2"
//             value={newEmp.email} onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })} />
//           <input type="text" placeholder="Employee ID" className="border rounded px-3 py-2"
//             value={newEmp.empId} onChange={(e) => setNewEmp({ ...newEmp, empId: e.target.value })} />
//         </div>
//         <button onClick={handleAddEmp}
//           className="bg-blue-600 text-white px-6 py-2 mt-4 rounded hover:bg-blue-700">Add Employee</button>
//       </div>

//       {/* 🔷 Employee List */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">Employee List</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {employees.map((emp) => (
//             <div key={emp._id} className="border p-4 rounded shadow-sm flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold text-blue-800">{emp.name}</h3>
//                 <p className="text-sm text-gray-600">{emp.email}</p>
//               </div>
//               <button onClick={() => handleDeleteEmp(emp._id)}
//                 className="text-red-500 hover:text-red-700"><FaTrash /></button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🔷 Assign Tasks (Placeholder) */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaTasks /> Assign Tasks</h2>
//         <p className="text-gray-600 text-sm">You can assign tasks to employees here. (Coming soon...)</p>
//       </div>

//       {/* 🔷 Add Another Admin */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaUserShield /> Add Admin</h2>
//         <div className="grid md:grid-cols-3 gap-4">
//           <input type="text" placeholder="Name" className="border rounded px-3 py-2"
//             value={newAdmin.name} onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} />
//           <input type="email" placeholder="Email" className="border rounded px-3 py-2"
//             value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} />
//           <input type="text" placeholder="Admin ID" className="border rounded px-3 py-2"
//             value={newAdmin.adminId} onChange={(e) => setNewAdmin({ ...newAdmin, adminId: e.target.value })} />
//         </div>
//         <button onClick={handleAddAdmin}
//           className="bg-green-600 text-white px-6 py-2 mt-4 rounded hover:bg-green-700">Add Admin</button>
//       </div>

//       {/* 🔷 Admin List */}
//       <div className="bg-white shadow rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Current Admins</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {admins.map((admin) => (
//             <div key={admin._id} className="border p-4 rounded shadow-sm flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold text-purple-800">{admin.name}</h3>
//                 <p className="text-sm text-gray-600">{admin.email}</p>
//               </div>
//               <button onClick={() => handleDeleteAdmin(admin._id)}
//                 className="text-red-500 hover:text-red-700"><FaTrash /></button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaTrash, FaUserPlus, FaTasks, FaUserShield } from "react-icons/fa";

// export default function AdminDashboard() {
//   const [employees, setEmployees] = useState([]);
//   const [admins, setAdmins] = useState([]);
//   const [newEmp, setNewEmp] = useState({ name: "", email: "", empId: "", phone: "" });
//   const [newAdmin, setNewAdmin] = useState({ name: "", email: "", adminId: "" });
//   const [message, setMessage] = useState("");

//   const fetchAll = async () => {
//     try {
//       const [empRes, adminRes] = await Promise.all([
//         axios.get("http://localhost:8001/api/auth/employees"),
//         axios.get("http://localhost:8001/api/auth/admins"),
//       ]);
//       setEmployees(empRes.data.employees);
//       setAdmins(adminRes.data.admins);
//     } catch (err) {
//       setMessage("❌ Failed to load data");
//     }
//   };

//   useEffect(() => {
//     fetchAll();
//   }, []);

//   const handleAddEmp = async () => {
//     if (!newEmp.name || !newEmp.email || !newEmp.empId || !newEmp.phone) return;
//     try {
//       await axios.post("http://localhost:8001/api/auth/create-employee", {
//         name: newEmp.name,
//         email: newEmp.email,
//         phone: newEmp.phone,
//         empId: newEmp.empId,
//         role: "employee",
//         password: "emp123"
//       });
//       setNewEmp({ name: "", email: "", empId: "", phone: "" });
//       setMessage("✅ Employee added");
//       fetchAll();
//     } catch (err) {
//       setMessage("❌ " + (err.response?.data?.msg || "Add employee failed"));
//     }
//   };

//   const handleAddAdmin = async () => {
//     if (!newAdmin.name || !newAdmin.email || !newAdmin.adminId) return;
//     try {
//       await axios.post("http://localhost:8001/api/auth/addadmin", {
//         name: newAdmin.name,
//         email: newAdmin.email,
//         role: "admin",
//         password: "admin123"
//       });
//       setNewAdmin({ name: "", email: "", adminId: "" });
//       setMessage("✅ Admin added");
//       fetchAll();
//     } catch (err) {
//       setMessage("❌ " + (err.response?.data?.msg || "Add admin failed"));
//     }
//   };

//   const handleDeleteEmp = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8001/api/auth/employee/${id}`);
//       setMessage("✅ Employee removed");
//       fetchAll();
//     } catch {
//       setMessage("❌ Failed to delete employee");
//     }
//   };

//   const handleDeleteAdmin = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8001/api/auth/admin/${id}`);
//       setMessage("✅ Admin removed");
//       fetchAll();
//     } catch {
//       setMessage("❌ Failed to delete admin");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Admin Dashboard</h1>
//       {message && <p className="text-green-600 text-center mb-4">{message}</p>}

//       {/* Add Employee */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaUserPlus /> Add Employee</h2>
//         <div className="grid md:grid-cols-4 gap-4">
//           <input type="text" placeholder="Name" className="border rounded px-3 py-2"
//             value={newEmp.name} onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })} />
//           <input type="email" placeholder="Email" className="border rounded px-3 py-2"
//             value={newEmp.email} onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })} />
//           <input type="text" placeholder="Phone" className="border rounded px-3 py-2"
//             value={newEmp.phone} onChange={(e) => setNewEmp({ ...newEmp, phone: e.target.value })} />
//           <input type="text" placeholder="Employee ID" className="border rounded px-3 py-2"
//             value={newEmp.empId} onChange={(e) => setNewEmp({ ...newEmp, empId: e.target.value })} />
//         </div>
//         <button onClick={handleAddEmp} className="bg-blue-600 text-white px-6 py-2 mt-4 rounded hover:bg-blue-700">
//           Add Employee
//         </button>
//       </div>

//       {/* Employee List */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">Employee List</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {employees.map((emp) => (
//             <div key={emp._id} className="border p-4 rounded shadow-sm flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold text-blue-800">{emp.name}</h3>
//                 <p className="text-sm text-gray-600">{emp.email}</p>
//               </div>
//               <button onClick={() => handleDeleteEmp(emp._id)} className="text-red-500 hover:text-red-700">
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Add Admin */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaUserShield /> Add Admin</h2>
//         <div className="grid md:grid-cols-3 gap-4">
//           <input type="text" placeholder="Name" className="border rounded px-3 py-2"
//             value={newAdmin.name} onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} />
//           <input type="email" placeholder="Email" className="border rounded px-3 py-2"
//             value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} />
//           <input type="text" placeholder="Admin ID" className="border rounded px-3 py-2"
//             value={newAdmin.adminId} onChange={(e) => setNewAdmin({ ...newAdmin, adminId: e.target.value })} />
//         </div>
//         <button onClick={handleAddAdmin} className="bg-green-600 text-white px-6 py-2 mt-4 rounded hover:bg-green-700">
//           Add Admin
//         </button>
//       </div>

//       {/* Admin List */}
//       <div className="bg-white shadow rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Current Admins</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {admins.map((admin) => (
//             <div key={admin._id} className="border p-4 rounded shadow-sm flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold text-purple-800">{admin.name}</h3>
//                 <p className="text-sm text-gray-600">{admin.email}</p>
//               </div>
//               <button onClick={() => handleDeleteAdmin(admin._id)} className="text-red-500 hover:text-red-700">
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// ✅ AdminDashboard.jsx (Frontend React Component)
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaUserPlus, FaTasks, FaUserShield } from "react-icons/fa";

export default function AdminDashboard() {
  const [employees, setEmployees] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [newEmp, setNewEmp] = useState({ name: "", email: "", empId: "", phone: "" });
  const [newAdmin, setNewAdmin] = useState({ name: "", email: "", adminId: "" });
  const [message, setMessage] = useState("");

  const fetchAll = async () => {
    try {
      const [empRes, adminRes] = await Promise.all([
        axios.get("http://localhost:8001/api/auth/employees"),
        axios.get("http://localhost:8001/api/auth/admins"),
      ]);
      setEmployees(empRes.data.employees);
      setAdmins(adminRes.data.admins);
    } catch (err) {
      setMessage("❌ Failed to load data");
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleAddEmp = async () => {
    if (!newEmp.name || !newEmp.email || !newEmp.empId || !newEmp.phone) return;
    try {
      await axios.post("http://localhost:8001/api/auth/create-employee", {
        ...newEmp,
        role: "employee",
        password: "emp123"
      });
      setNewEmp({ name: "", email: "", empId: "", phone: "" });
      setMessage("✅ Employee added");
      fetchAll();
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.msg || "Add employee failed"));
    }
  };

  const handleAddAdmin = async () => {
    if (!newAdmin.name || !newAdmin.email || !newAdmin.adminId) return;
    try {
      await axios.post("http://localhost:8001/api/auth/addadmin", {
        ...newAdmin,
        role: "admin",
        password: "admin123"
      });
      setNewAdmin({ name: "", email: "", adminId: "" });
      setMessage("✅ Admin added");
      fetchAll();
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.msg || "Add admin failed"));
    }
  };

  const handleDeleteEmp = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/api/auth/employee/${id}`);
      setMessage("✅ Employee removed");
      fetchAll();
    } catch {
      setMessage("❌ Failed to delete employee");
    }
  };

  const handleDeleteAdmin = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/api/auth/admin/${id}`);
      setMessage("✅ Admin removed");
      fetchAll();
    } catch {
      setMessage("❌ Failed to delete admin");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Admin Dashboard</h1>
      {message && <p className="text-green-600 text-center mb-4">{message}</p>}

      {/* Add Employee */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaUserPlus /> Add Employee</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <input type="text" placeholder="Name" className="border rounded px-3 py-2"
            value={newEmp.name} onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })} />
          <input type="email" placeholder="Email" className="border rounded px-3 py-2"
            value={newEmp.email} onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })} />
          <input type="text" placeholder="Phone" className="border rounded px-3 py-2"
            value={newEmp.phone} onChange={(e) => setNewEmp({ ...newEmp, phone: e.target.value })} />
          <input type="text" placeholder="Employee ID" className="border rounded px-3 py-2"
            value={newEmp.empId} onChange={(e) => setNewEmp({ ...newEmp, empId: e.target.value })} />
        </div>
        <button onClick={handleAddEmp} className="bg-blue-600 text-white px-6 py-2 mt-4 rounded hover:bg-blue-700">
          Add Employee
        </button>
      </div>

      {/* Employee List */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Employee List</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {employees.map((emp) => (
            <div key={emp._id} className="border p-4 rounded shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-blue-800">{emp.name}</h3>
                <p className="text-sm text-gray-600">{emp.email}</p>
                <p className="text-sm text-gray-600">Emp ID: {emp.empId}</p>
                <p className="text-sm text-gray-600">Phone: {emp.phone}</p>
              </div>
              <button onClick={() => handleDeleteEmp(emp._id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Admin */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaUserShield /> Add Admin</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input type="text" placeholder="Name" className="border rounded px-3 py-2"
            value={newAdmin.name} onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} />
          <input type="email" placeholder="Email" className="border rounded px-3 py-2"
            value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} />
          <input type="text" placeholder="Admin ID" className="border rounded px-3 py-2"
            value={newAdmin.adminId} onChange={(e) => setNewAdmin({ ...newAdmin, adminId: e.target.value })} />
        </div>
        <button onClick={handleAddAdmin} className="bg-green-600 text-white px-6 py-2 mt-4 rounded hover:bg-green-700">
          Add Admin
        </button>
      </div>

      {/* Admin List */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Current Admins</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {admins.map((admin) => (
            <div key={admin._id} className="border p-4 rounded shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-purple-800">{admin.name}</h3>
                <p className="text-sm text-gray-600">{admin.email}</p>
                <p className="text-sm text-gray-600">Admin ID: {admin.adminId}</p>
              </div>
              <button onClick={() => handleDeleteAdmin(admin._id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
