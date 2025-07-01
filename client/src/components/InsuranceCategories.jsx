// src/components/InsuranceCategories.jsx
export default function InsuranceCategories() {
  const mainCategories = [
    { title: "Term Life Insurance", img: "https://img.icons8.com/color/96/security-checked.png", badge: "Lowest Price Guarantee" },
    { title: "Health Insurance", img: "https://img.icons8.com/color/96/heart-with-pulse.png", badge: "FREE Home Visit" },
    { title: "Investment Plans", img: "https://img.icons8.com/color/96/coins.png", badge: "In-Built Life Cover" },
    { title: "Car Insurance", img: "https://img.icons8.com/color/96/car--v1.png", badge: "Upto 91% Discount" },
    { title: "2 Wheeler Insurance", img: "https://img.icons8.com/color/96/motorcycle.png", badge: "Upto 85% Discount" },
    { title: "Family Health Insurance", img: "https://img.icons8.com/color/96/family.png", badge: "Upto 25% Discount" },
    { title: "Travel Insurance", img: "https://img.icons8.com/color/96/airplane-take-off.png" },
    { title: "Term Insurance (Women)", img: "https://img.icons8.com/color/96/woman.png", badge: "Upto 20% Cheaper" },
    { title: "Return of Premium", img: "https://img.icons8.com/color/96/receive-cash.png" },
    { title: "Guaranteed Return Plans", img: "https://img.icons8.com/color/96/money-bag.png" },
    { title: "Child Savings Plans", img: "https://img.icons8.com/color/96/child-safe.png", badge: "Premium Waiver" },
    { title: "Retirement Plans", img: "https://img.icons8.com/color/96/elderly-person.png" },
    { title: "Employee Group Health Insurance", img: "https://img.icons8.com/color/96/group-foreground-selected.png", badge: "Upto 65% Discount" },
    { title: "Home Insurance", img: "https://img.icons8.com/color/96/home.png", badge: "Upto 25% Discount" },
  ];

  const alsoBuyTags = [
    "LIC Plans", "Return of Premium", "Life Insurance for Housewives", "Day 1 Coverage",
    "1 Cr Health Insurance", "Personal Accident", "Commercial Vehicles",
    "Marine Insurance", "Professional Indemnity for Doctors", "Directors & Officers Liability",
    "Workmen Compensation", "Pet Insurance", "Personal Cyber Insurance"
  ];

  return (
    <section className="px-4 py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mainCategories.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-blue-50 rounded-lg p-3 shadow hover:shadow-md transition">
              {item.badge && (
                <div className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full mb-1 font-medium">
                  {item.badge}
                </div>
              )}
              <img src={item.img} alt={item.title} className="w-14 h-14 object-contain mb-2" />
              <p className="text-sm font-medium text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>

        {/* View all products button */}
        <div className="text-center mt-6">
          <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            View all products
          </button>
        </div>

        {/* Also Buy Tags */}
        <div className="mt-10">
          <h3 className="text-blue-600 font-semibold mb-3">ALSO BUY</h3>
          <div className="flex flex-wrap gap-3">
            {alsoBuyTags.map((tag, i) => (
              <span key={i} className="px-4 py-1 text-sm rounded-full border border-gray-300 bg-white hover:bg-blue-50 transition cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
