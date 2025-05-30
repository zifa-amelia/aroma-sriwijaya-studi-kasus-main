export default function HeroSection() {
  return (
    <section
      id="Hero Section"
      className="h-[80dvh] flex justify-center items-center bg-[url('/kafe.jpg')]"
    >
      <div className="space-y-2 w-[600px] text-center text-white">
        <h1 className="text-6xl font-extrabold">Cita Nusa <span className="text-white-500"></span>Resto</h1>
        <p>Sajian autentik Indonesia dengan cita rasa nusantara yang menggugah selera</p>
        <div className="space-x-4">
          <button className="btn bg-amber-800 border-none text-white py-2 px-4 rounded-lg hover:bg-neutral-600">
            Daftar Sekarang
          </button>
          <a
            href="https://www.instagram.com/aromasriwijaya/"
            target="_blank"
            className="btn bg-white text-amber-800 border border-cyan-100 py-2 px-4 rounded-lg hover:text-black hover:bg-amber-800"
            >
              Instagram
            </a>
          <button className="btn bg-white text-amber-800 border border-cyan-100 py-2 px-4 rounded-lg hover:text-black hover:bg-amber-800">Reservasi </button>
        </div>
      </div>
    </section>
  )
}