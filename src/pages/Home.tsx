import Hero from "../components/Hero"

export default function Home({ id }: { id: string }) {
  return (
    <div id={id} className="bg-light font-montserrat">
      <Hero />
    </div>
  )
}
