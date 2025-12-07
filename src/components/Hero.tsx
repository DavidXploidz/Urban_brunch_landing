import VideoComponent from "./VideoComponent"
import CafeteriaVideo from "../assets/videos/coffee_shop.mp4"

export default function Hero() {
  return (
    <div className="h-full md:h-screen bg-dark overflow-hidden">
        <div className="overlay relative">
            <div className="absolute left-1/2 top-1/2 -translate-1/2 z-10 text-gray-50 space-y-6 text-center">
                <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold ">Discover the <span className="block">charm Cafe</span></h1>
                <p className="text-2xl lg:text-3xl text-gray-300 max-w-2xl">
                    Welcome to charm cafe, a modern al elegant restaurant that offers a delightful urban brunch
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button className="bg-primary text-cafe-50 px-3 py-2 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors hover:cursor-pointer">Reserve a Table</button>
                  <button className="bg-cafe-50 text-cafe-950 px-3 py-2 rounded-lg font-semibold text-lg hover:bg-cafe-100 transition-colors hover:cursor-pointer">View menu</button>
                </div>
            </div>
            <VideoComponent src={CafeteriaVideo} />
        </div>
    </div>
  )
}
