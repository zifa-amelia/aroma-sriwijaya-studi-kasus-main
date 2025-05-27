export default function HeroSection() {
  return (
    <section
      id="Hero Section"
      className="h-[80dvh] flex justify-center items-center bg-[url('/biji-kopi.jpg')]"
    >
      <div className="space-y-2 w-[400px] text-center text-white">
        <h1 className="text-6xl font-extrabold">Aroma <span className="text-white-500"></span>Sriwijaya</h1>
        <p>Premium Indonesian Coffee Sumatera Selatan Bumi Sriwijaya</p>
        <div className="space-x-4">
          <button className="btn bg-amber-800 border-none text-white py-2 px-4 rounded-lg hover:bg-red-400">
            Daftar Sekarang
          </button>
          <a
            href="https://www.instagram.com/aromasriwijaya/"
            target="_blank"
            className="btn bg-white text-amber-800 border border-cyan-100 py-2 px-4 rounded-lg hover:text-black"
            >
              Instagram
            </a>
          <button className="btn bg-white text-amber-800 border border-cyan-100 py-2 px-4 rounded-lg hover:text-black">Learn More</button>
        </div>
      </div>
    </section>
  )
}