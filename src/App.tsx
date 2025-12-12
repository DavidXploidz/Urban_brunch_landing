import Home from "./pages/Home"
import { ContactForm } from "./components/ContactForm";
import NavBar from "./components/NavBar"
import AboutCard from "./components/AboutCard"
import ProductCard from "./components/ProductCard"
import data from '../db.json'
import TestimonialCard from './components/TestimonialCard'
import SwiperSliderComponent from './components/SwiperSliderComponent'
import { MdLocationOn, MdLocalPhone, MdAccessTimeFilled } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import BentoGallery from "./components/BentoGallery";
import FadeIn from "./components/FadeIn";

function App() {

  const { desayunos_brunch } = data.menu;

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial: "Very delicious brunch, the best I've ever had!, soon I'll be back.",
      image: "./images/avatar-1.webp",
      ocupation: "Customer"
    },
    {
      id: 2,
      name: "John Doe",
      testimonial: "The brunch was amazing! The food was fresh and the service was great.",
      image: "./images/avatar-2.webp",
      ocupation: "Food blogger"
    },
    {
      id: 3,
      name: "John Doe",
      testimonial: "The brunch was delicious and the service was great.",
      image: "./images/avatar-3.webp",
      ocupation: "Customer"
    },
    {
      id: 4,
      name: "George Orwell",
      testimonial: "The place is very clean and the service is great.",
      image: "./images/avatar-4.webp",
      ocupation: "Customer"
    }
  ]

  const handleGotoSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar handleGotoSection={handleGotoSection}  />
      <Home id="home" />
      {/* About section */}
      <section id="about" className="bg-gray-50 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <FadeIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.2}>
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
          </FadeIn>
        </div>
      </section>
      {/* Menu section */}
      <section id="menu" className="bg-cafe-100 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <FadeIn>
            <h2 className="text-6xl text-cafe-900 font-bold text-center mb-4 font-satisfy">Our Signature Menu</h2>
            <p className="text-2xl text-center text-cafe-700 max-w-2xl mx-auto">Discover our carefully curated selection of brunch favorites, artisanal coffee, and seasonal specialties.</p>
            <SwiperSliderComponent
              data={desayunos_brunch}
              renderItem={(item) => <ProductCard product={item} />}
              swiperConfig={{
                autoplay: { delay: 2500 },
                breakpoints: {
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }
              }}
            />
            <div className="flex justify-center mt-10">
              <button className="bg-primary rounded-full text-cafe-50 px-5 py-3 font-semibold text-xl hover:bg-primary/90 transition-colors hover:cursor-not-allowed">View Full Menu</button>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Our hiatory */}
      <section id="history" className="bg-gray-50 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <FadeIn className="grid lg:grid-cols-2 gap-8 items-center">
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
              <img className="rounded-2xl max-h-96 w-full object-cover" loading="lazy" width={392} height={248} src="./images/brunch_1.webp" alt="image brunch" />
            </figure>
          </FadeIn>
        </div>
      </section>
      {/* Gallery */}
      <section className="bg-cafe-100 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <FadeIn>
            <h2 className="text-6xl text-cafe-900 font-bold text-center mb-4 font-satisfy">Gallery</h2>
            <p className="text-2xl text-center text-cafe-700 max-w-2xl mx-auto">
              A glimpse into our beautiful space and delicious creations
            </p>
            <BentoGallery />
          </FadeIn>
        </div>
      </section>
      {/* Testimonials */}
      <section className="bg-gray-50 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <FadeIn>
            <h2 className="text-6xl text-cafe-900 font-bold text-center mb-4 font-satisfy">What Our Guests Say</h2>
            <p className="text-2xl text-center text-cafe-700 max-w-2xl mx-auto">
              Hear from our wonderful community of food lovers
            </p>
            <SwiperSliderComponent
              data={testimonials}
              renderItem={(testimonial) => (
                <TestimonialCard testimonial={testimonial} />
              )}
              swiperConfig={{
                autoplay: { delay: 5000 },
                slidesPerView: 1,
                breakpoints: {
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }
              }}
            />
          </FadeIn>
        </div>
      </section>
      {/* Contact us */}
      <section id="contact" className="bg-cafe-900 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6 overflow-hidden">
          <FadeIn className="grid lg:grid-cols-2 gap-y-8 gap-x-4">
            <div className="text-cafe-50 space-y-6">
              <h2 className="text-6xl font-satisfy">Visit Us Today</h2>
              <p className="text-2xl text-cafe-200">Experience the warmth of our cafe and taste the difference quality makes.</p>
              <div className="flex items-center gap-x-2">
                <MdLocationOn className="flex-none size-8 text-cafe-200" />
                <p className="text-xl font-semibold">Address <span className="block font-light text-cafe-200">123 Cafe Street, Downtown District</span></p>
              </div>
              <div className="flex items-center gap-x-2">
                <MdLocalPhone className="flex-none size-8 text-cafe-200" />
                <p className="text-xl font-semibold">Phone <span className="block font-light text-cafe-200">(555) 123-4567</span></p>
              </div>
              <div className="flex items-center gap-x-2">
                <MdAccessTimeFilled className="flex-none size-8 text-cafe-200" />
                <p className="text-xl font-semibold">Hours <span className="block font-light text-cafe-200">Mon-Sun: 7:00 AM - 4:00 PM</span></p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-cafe-400 hover:bg-cafe-500 rounded-full w-10 h-10 grid place-items-center hover:-translate-y-1 transition-transform cursor-pointer">
                  <IoLogoInstagram className="flex-none size-6" />
                </div>
                <div className="bg-cafe-400 hover:bg-cafe-500 rounded-full w-10 h-10 grid place-items-center hover:-translate-y-1 transition-transform cursor-pointer">
                  <MdFacebook className="flex-none size-6" />
                </div>
                <div className="bg-cafe-400 hover:bg-cafe-500 rounded-full w-10 h-10 grid place-items-center hover:-translate-y-1 transition-transform cursor-pointer">
                  <FaXTwitter className="flex-none size-5" />
                </div>
              </div>
            </div>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
      <footer className="bg-cafe-900 font-karla">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6 text-center text-cafe-200">
          <p className="text-3xl text-cafe-50 font-satisfy mb-4">Brunch & Co</p>
          <p className="text-xl">Where every meal feels like home</p>
          <hr className="border-cafe-500 my-5" />
          <p className="text-lg font-montserrat">© 2025 Brunch & Co. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
