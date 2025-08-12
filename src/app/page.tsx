import HeroSlider from '../components/HeroSlider'
import ReservationForm from '../components/ReservationForm'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSlider />
      <section id="reserver" className="max-w-screen-xl mx-auto px-4 py-16 bg-primaryBg">
        <h2 className="text-4xl font-bold mb-4 text-center">Bienvenue à Casa Azul Ibiza</h2>
        <p className="mb-12 text-center text-lg">Découvrez notre maison d'hôtes de charme.</p>
        <ReservationForm />
      </section>
    </main>
  )
}
