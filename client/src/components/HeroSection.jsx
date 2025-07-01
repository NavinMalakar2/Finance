import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 leading-snug">
            Let's find you <br />
            the <span className="text-orange-500">Best Insurance</span>
          </h2>
          <p className="text-gray-600 text-lg">
            51 insurers offering lowest prices
          </p>
          <p className="text-gray-600">
            Quick, easy & hassle free
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Compare Now
          </button>
        </div>

        {/* Right Carousel */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 2500 }}
            loop={true}
            pagination={{ clickable: true }}
            className="rounded-lg shadow-lg "
          >
            <SwiperSlide>
              <img
                src="../../public/family-floater-health-insurance.png"
                alt="Health Insurance"
                className="w-full h-74 object-cover rounded "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../public/shutterstock_496169290-1-2.jpg"
                alt="Car Insurance"
                className="w-full h-74 object-cover rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../public/disabled-life-insurance-banner-vector.jpg"
                alt="Life Insurance"
                className="w-full h-74 object-cover rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../public/family-health-insurance-best-plan-1.webp"
                alt="Family Insurance"
                className="w-full h-74 object-cover rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../public/26-Apr-2023-Best-two-wheeler-insurance-in-India.png"
                alt="Bike Insurance"
                className="w-full h-74 object-cover rounded"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
