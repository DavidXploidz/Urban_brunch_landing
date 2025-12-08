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
      {/* Our hiatory */}
      <section className="bg-gray-50 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-6xl text-cafe-900 font-bold text-center lg:text-left mb-4 font-satisfy">Our Story</h2>
              <p className="text-cafe-600 text-xl">
                Founded in 2018, Brunch & Co began as a dream to create a space where friends and families could gather over exceptional food and coffee. What started as a small neighborhood cafe has grown into a beloved destination for food enthusiasts.
              </p>
              <p className="text-cafe-600 text-xl">
                Our commitment to quality ingredients, innovative recipes, and warm hospitality has made us a cornerstone of the community. Every dish tells a story, and every visit creates a memory.
              </p>
              <div className="flex flex-wrap gap-4 lg:gap-8 text-cafe-600 text-center">
                <p className="font-semibold text-4xl">5+ <span className="block font-normal text-lg">Years Serving</span></p>
                <p className="font-semibold text-4xl">50k+ <span className="block font-normal text-lg">Happy Customers</span></p>
                <p className="font-semibold text-4xl">4.9 <span className="block font-normal text-lg">Star Rating</span></p>
              </div>
            </div>
            <figure>
              <img className="rounded-2xl max-h-96 w-full object-cover" src="./images/brunch_1.webp" alt="image brunch" />
            </figure>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="bg-cafe-100 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <h2 className="text-6xl text-cafe-900 font-bold text-center mb-4 font-satisfy">Gallery</h2>
          <p className="text-2xl text-center text-cafe-700 max-w-2xl mx-auto">
            A glimpse into our beautiful space and delicious creations
          </p>
          <div className="bento-grid mt-10">
            <img className="bento-grid__item-1" src="./images/brunch_1.webp" alt="image brunch" />
            <img className="bento-grid__item-2" src="./images/brunch_2.webp" alt="image brunch" />
            <img className="bento-grid__item-3" src="./images/brunch_3.webp" alt="image brunch" />
            <img className="bento-grid__item-4" src="./images/brunch_4.webp" alt="image brunch" />
            <img className="bento-grid__item-5" src="./images/brunch_5.webp" alt="image brunch" />
            <img className="bento-grid__item-6" src="./images/brunch_6.webp" alt="image brunch" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
