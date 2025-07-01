

export default function CustomerFeedback() {
  const feedbacks = [
    {
      name: "Anjali Sharma",
      avatar: "https://img.icons8.com/color/96/female-user.png",
      message: "Policy purchase was super smooth. Got the best price in just a few minutes!",
    },
    {
      name: "Rohit Mehta",
      avatar: "https://img.icons8.com/color/96/user-male-circle.png",
      message: "Impressed by their claim assistance. Really helpful customer support!",
    },
    {
      name: "Sneha Patil",
      avatar: "https://img.icons8.com/color/96/user-female-circle.png",
      message: "Loved the interface and ease of comparing plans. Totally recommended!",
    },
    {
      name: "Amit Yadav",
      avatar: "https://img.icons8.com/color/96/administrator-male.png",
      message: "Was able to buy family health insurance quickly without any confusion.",
    },
    {
      name: "Pooja Singh",
      avatar: "https://img.icons8.com/color/96/user.png",
      message: "Renewed my car insurance in 2 minutes! So easy and fast.",
    },
    {
      name: "Rajeev Kapoor",
      avatar: "https://img.icons8.com/color/96/circled-user-male-skin-type-5.png",
      message: "Great service and best insurance rates compared to anywhere else.",
    },
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-50 border border-blue-100 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 text-sm mb-3 italic">"{item.message}"</p>
              <h4 className="text-blue-700 font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
