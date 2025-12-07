import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import AboutCard from "./components/AboutCard"
function App() {


  return (
    <>
      <NavBar />
      <Home />
      {/* About section */}
      <section className="bg-gray-50">
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
      <section className="bg-cafe-100">
        <div className="py-20 container max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <h2 className="text-5xl text-cafe-900 font-bold text-center mb-4">Our Signature Menu</h2>
          <p className="text-2xl text-center text-cafe-700 max-w-2xl mx-auto">Discover our carefully curated selection of brunch favorites, artisanal coffee, and seasonal specialties.</p>
        </div>
      </section>
    </>
  )
}

export default App
