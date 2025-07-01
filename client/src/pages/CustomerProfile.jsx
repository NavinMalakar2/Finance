import { useEffect, useState } from "react";

export default function CustomerProfile() {
  const [tab, setTab] = useState("personal");
  const [customer, setCustomer] = useState(null);
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [insurances, setInsurances] = useState([]);

  useEffect(() => {
    // Demo Data
    setCustomer({
      name: "Navin Malakar",
      email: "navin@example.com",
      phone: "8109842266",
      city: "Indore",
    });

    setInsurances([
      {
        policyType: "Health Insurance",
        companyName: "Star Health",
        premiumAmount: 8500,
        purchaseDate: "2024-06-01",
        expiryDate: "2025-06-01",
      },
      {
        policyType: "Car Insurance",
        companyName: "HDFC Ergo",
        premiumAmount: 12000,
        purchaseDate: "2024-04-10",
        expiryDate: "2025-04-10",
      },
    ]);
  }, []);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    // Save logic
    setMessage("✅ Profile updated successfully!");
    setEditing(false);

    // Hide message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  if (!customer) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
        Customer Dashboard
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setTab("personal")}
          className={`px-4 py-2 m-1 rounded ${
            tab === "personal" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Personal Info
        </button>
        <button
          onClick={() => setTab("insurance")}
          className={`px-4 py-2 m-1 rounded ${
            tab === "insurance" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          My Insurances
        </button>
      </div>

      {/* Message */}
      {message && (
        <p className="text-center text-green-600 font-medium mb-4">{message}</p>
      )}

      {/* Personal Info Tab */}
      {tab === "personal" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Name</label>
            <input
              name="name"
              value={customer.name}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <input
              name="email"
              value={customer.email}
              disabled
              className="w-full border px-3 py-2 rounded mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Phone</label>
            <input
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="font-medium">City</label>
            <input
              name="city"
              value={customer.city}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </div>

          <div className="col-span-full flex gap-4 mt-4">
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 text-white px-5 py-2 rounded"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 text-white px-5 py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditing(false);
                    setMessage(""); // clear message if cancel
                  }}
                  className="bg-gray-400 text-white px-5 py-2 rounded"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Insurance Tab */}
      {tab === "insurance" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insurances.length > 0 ? (
            insurances.map((ins, idx) => (
              <div key={idx} className="border rounded p-4 shadow-sm bg-blue-50">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {ins.policyType}
                </h3>
                <p>
                  <span className="font-medium">Company:</span>{" "}
                  {ins.companyName}
                </p>
                <p>
                  <span className="font-medium">Purchase Date:</span>{" "}
                  {new Date(ins.purchaseDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Premium:</span> ₹
                  {ins.premiumAmount}
                </p>
                <p>
                  <span className="font-medium">Valid Till:</span>{" "}
                  {new Date(ins.expiryDate).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No insurance records found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
