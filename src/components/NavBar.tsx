
export default function NavBar() {
  return (
    <div className='bg-glass fixed z-10 w-full min-h-24'>
        <div className='container mx-auto px-2 md:px-3 lg:px-4 min-h-inherit'>
            <div className='flex items-center justify-between gap-2 text-white min-h-inherit'>
                <p className="text-3xl text-cafe-50 font-satisfy">Brunch & Co</p>
                <nav className="space-x-6 text-xl">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Menu</a>
                    <a href="">Home</a>
                </nav>
            </div>
        </div>
    </div>
  )
}
