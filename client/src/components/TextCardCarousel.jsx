// src/components/TextCardCarouselDots.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TextCardCarouselDots() {
  const cards = [
    {
      title: "Get Expert Guidance",
      desc: "Insurance advisors help you find the best fit easily.",
      bg: "bg-blue-100",
    },
    {
      title: "Compare 50+ Insurers",
      desc: "One place to compare premiums & benefits from all top insurers.",
      bg: "bg-orange-100",
    },
    {
      title: "Trusted by Millions",
      desc: "Over 1 crore happy customers across India trust us.",
      bg: "bg-green-100",
    },
    {
      title: "24x7 Claim Support",
      desc: "We assist you through the claim process anytime, anywhere.",
      bg: "bg-yellow-100",
    },
    {
      title: "Zero Hidden Charges",
      desc: "100% transparent pricing and process.",
      bg: "bg-pink-100",
    },
    {
      title: "100% Online Process",
      desc: "Buy, renew or claim insurance from the comfort of your home.",
      bg: "bg-purple-100",
    },
  ];

  return (
    <section className="py-14 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">
          Why Millions Trust Us
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`rounded-xl ${item.bg} h-64 p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-200 flex flex-col justify-center items-center`}
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm max-w-xs">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
