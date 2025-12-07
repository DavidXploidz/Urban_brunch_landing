import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import AboutCard from "./components/AboutCard"
import ProductCard from "./components/ProductCard"
import data from '../db.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

function App() {

  const { desayunos_brunch } = data.menu;

  return (
    <>
      <NavBar />
      <Home />
      {/* About section */}
      <section className="bg-gray-50 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AboutCard 
            icon="FaLeaf" 
            title="Fresh Ingredients"
            description="Locally sourced, organic ingredients prepared daily to ensure the highest quality and freshest flavors in every dish."
          />
          <AboutCard 
            icon="FaHeart" 
            title="Make with Love"
            description="Every recipe is crafted with passion and care, bringing you the comfort of home-cooked meals in a beautiful setting."
          />
          <AboutCard 
            icon="FaClock" 
            title="All Day Dining"
            description="From early morning coffee to late brunch and beyond, we're here to serve you delicious meals throughout the day."
          />
        </div>
      </section>
      {/* Menu section */}
      <section className="bg-cafe-100 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <h2 className="text-6xl text-cafe-900 font-bold text-center mb-4 font-satisfy">Our Signature Menu</h2>
          <p className="text-2xl text-center text-cafe-700 max-w-2xl mx-auto">Discover our carefully curated selection of brunch favorites, artisanal coffee, and seasonal specialties.</p>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-10">
            {desayunos_brunch.map((desayuno, index) => (
              <ProductCard key={index} product={desayuno} />
            ))}
          </div> */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            autoHeight={true}
            className="my-14"
          >
            {desayunos_brunch.map((desayuno, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <ProductCard product={desayuno} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-10">
            <button className="bg-primary rounded-full text-cafe-50 px-5 py-3 font-semibold text-xl hover:bg-primary/90 transition-colors hover:cursor-pointer">View Full Menu</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
