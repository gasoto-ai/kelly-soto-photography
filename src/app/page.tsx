import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Gallery from "@/components/Gallery"
import About from "@/components/About"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
