// src/components/Navbar.jsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi"; // icons


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // replace with actual auth logic
//   console.log("hii",isLoggedIn)
//   const cost= localStorage.getItem("userRole")
//   console.log(cost)
//   useEffect(()=>{if(cost!=undefined){
//     setIsLoggedIn(true)
//   }},[])
  

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-blue-700">
//           Policy<span className="text-orange-500">Secure</span>
//         </h1>

//         {/* Hamburger Icon (mobile only) */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 items-center">
//          <Link to="/" className="hover:text-orange-600 font-medium">
//     Home
//   </Link>
//           {/* Dropdown: Insurance Products */}
//           <div className="group relative">
//             <span className="cursor-pointer hover:text-orange-600 font-medium">
//               Insurance Products
//             </span>
//             <div className="absolute top-full left-0 w-[500px] bg-white shadow-lg rounded-md p-4 hidden group-hover:grid grid-cols-2 gap-4 z-10 max-h-[400px] overflow-y-auto text-sm">
//               <div>
//                 <h4 className="font-semibold mb-1">Term Insurance</h4>
//                 <ul className="space-y-1">
//                   <li>Life Insurance</li>
//                   <li>List of Term Insurance Plan</li>
//                   <li>Term Insurance for NRI</li>
//                   <li>What is Term Insurance</li>
//                   <li>1 Crore Term Insurance</li>
//                   <li>Term Insurance Calculator</li>
//                   <li>Dedicated Claim Assistance</li>
//                   <li>Term Insurance for Women</li>
//                   <li>Term Insurance for HNI</li>
//                   <li>Return of Premium</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-1">Other Insurance</h4>
//                 <ul className="space-y-1">
//                   <li>Travel Insurance</li>
//                   <li>Marine Insurance</li>
//                   <li>Cyber Insurance</li>
//                   <li>Home Insurance</li>
//                   <li>Pet Insurance</li>
//                   <li>Defence Personnel Insurance</li>
//                   <li>General Insurance</li>
//                   <li>Shopkeepers Insurance</li>
//                   <li>Fire Insurance</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Dropdown: Renew Your Policy */}
//           <div className="group relative">
//             <span className="cursor-pointer hover:text-orange-600 font-medium">
//               Renew Your Policy
//             </span>
//             <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 text-sm">
//               <ul className="space-y-1">
//                 <li>Health Insurance Renewal</li>
//                 <li>Life Insurance Renewal</li>
//                 <li>Car Insurance Renewal</li>
//                 <li>Bike Insurance Renewal</li>
//                 <li>Travel Policy Renewal</li>
//                 <li>General Policy Renewal</li>
//               </ul>
//             </div>
//           </div>

//           {/* Dropdown: Support */}
//           <div className="group relative">
//             <span className="cursor-pointer hover:text-orange-600 font-medium">
//               Support
//             </span>
//             <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 text-sm">
//               <ul className="space-y-1">
//                 <li>Get Help</li>
//                 <li>Raise a Ticket</li>
//                 <li>Claim Assistance</li>
//                 <li>FAQs</li>
//               </ul>
//             </div>
//           </div>

//           <Link to="/ragistration" className="hover:text-orange-600 font-medium" >Registration</Link>

//           {!isLoggedIn ? (
//             <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Login</Link>
//           ) : (
//             <button
//               onClick={() => setIsLoggedIn(false)}
//               className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           )}
//         </nav>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
        
//         <div className="md:hidden bg-white px-4 py-3 space-y-2 shadow-md border-t">
//         <Link to="/" className="block font-medium">
//   Home
// </Link>
//           <div className="font-medium">Insurance Products</div>
//           <ul className="pl-3 text-sm space-y-1">
//             <li>Life Insurance</li>
//             <li>Term Insurance</li>
//             <li>Pet Insurance</li>
//             <li>Travel Insurance</li>
//           </ul>

//           <div className="font-medium pt-2">Renew Your Policy</div>
//           <ul className="pl-3 text-sm space-y-1">
//             <li>Health Insurance Renewal</li>
//             <li>Car Insurance Renewal</li>
//           </ul>

//           <div className="font-medium pt-2">Support</div>
//           <ul className="pl-3 text-sm space-y-1">
//             <li>Get Help</li>
//             <li>FAQs</li>
//           </ul>

//           <Link to="/registration" className="block pt-2 font-medium">Registration</Link>

//           {!isLoggedIn ? (
//             <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded inline-block mt-2">
//               Login
//             </Link>
            
//           ) : (
//             <button
//               onClick={() => setIsLoggedIn(false)}
//               className="bg-red-500 text-white px-4 py-1 rounded mt-2"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       )}
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  const navigate = useNavigate();

  // 🔄 Listen for role updates
  useEffect(() => {
    const handleStorageChange = () => {
      setUserRole(localStorage.getItem("userRole"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setUserRole(null);
    window.dispatchEvent(new Event("storage")); // Update UI
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          Policy<span className="text-orange-500">Secure</span>
        </h1>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-orange-600 font-medium">
            Home
          </Link>

          {/* Dropdown: Insurance Products */}
          <div className="group relative">
            <span className="cursor-pointer hover:text-orange-600 font-medium">
              Insurance Products
            </span>
            <div className="absolute top-full left-0 w-[500px] bg-white shadow-lg rounded-md p-4 hidden group-hover:grid grid-cols-2 gap-4 z-10 max-h-[400px] overflow-y-auto text-sm">
              <div>
                <h4 className="font-semibold mb-1">Term Insurance</h4>
                <ul className="space-y-1">
                  <li>Life Insurance</li>
                  <li>Term Insurance Plan</li>
                  <li>Insurance for NRI</li>
                  <li>Return of Premium</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Other Insurance</h4>
                <ul className="space-y-1">
                  <li>Travel Insurance</li>
                  <li>Cyber Insurance</li>
                  <li>Pet Insurance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dropdown: Renew Policy */}
          <div className="group relative">
            <span className="cursor-pointer hover:text-orange-600 font-medium">
              Renew Your Policy
            </span>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 text-sm">
              <ul className="space-y-1">
                <li>Health Insurance</li>
                <li>Car Insurance</li>
                <li>Life Insurance</li>
              </ul>
            </div>
          </div>

          {/* Dropdown: Support */}
          <div className="group relative">
            <span className="cursor-pointer hover:text-orange-600 font-medium">
              Support
            </span>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 text-sm">
              <ul className="space-y-1">
                <li>Get Help</li>
                <li>Raise a Ticket</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

          {/* Conditional Rendering */}
          {!userRole && (
            <Link to="/ragistration" className="hover:text-orange-600 font-medium">
              Registration
            </Link>
          )}

          {userRole === "customer" && (
            <Link to="/customerprofile" className="hover:text-orange-600 font-medium">
              Profile
            </Link>
          )}

          {!userRole ? (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 shadow-md border-t">
          <Link to="/" className="block font-medium">Home</Link>

          <div className="font-medium">Insurance Products</div>
          <ul className="pl-3 text-sm space-y-1">
            <li>Life Insurance</li>
            <li>Term Insurance</li>
            <li>Pet Insurance</li>
          </ul>

          <div className="font-medium pt-2">Renew Your Policy</div>
          <ul className="pl-3 text-sm space-y-1">
            <li>Health Insurance Renewal</li>
            <li>Car Insurance Renewal</li>
          </ul>

          <div className="font-medium pt-2">Support</div>
          <ul className="pl-3 text-sm space-y-1">
            <li>Get Help</li>
            <li>FAQs</li>
          </ul>

          {!userRole && (
            <Link to="/ragistration" className="block pt-2 font-medium">Registration</Link>
          )}

          {userRole === "customer" && (
            <Link to="/customerprofile" className="block pt-2 font-medium">Profile</Link>
          )}

          {!userRole ? (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded inline-block mt-2">
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1 rounded mt-2"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
