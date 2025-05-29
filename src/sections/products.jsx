import { Coffee } from "lucide-react";

export default function ProductsSection() {
  return (
    <section
      id="Benefit Section"
      className="max-w-screen-xl mx-auto space-y-8 my-32"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
          Our Products
        </div>
        <div className="flex items-center gap-2">
          <Coffee className="text-amber-800" />
          <h2 className="text-3xl font-bold">Menu Unggulan Kami</h2>
        </div>
        <p className="text-base text-gray-600 mb-2 text-center">
          Hidangan-hidangan istimewa yang menjadi favorit pelanggan kami.
        </p>
        <p className="text-base space-x-4 text-amber-900 text-center">
           Indonesia terkenal dengan kekayaan budaya dan kulinernya. Masakan Nusantara menghadirkan rempah 
           khas dan cita rasa dari berbagai daerah. Di Cita Nusa Resto, kami menyajikan hidangan otentik dari 
           Sumatra, Jawa, hingga Indonesia Timur, dengan resep asli dan bahan pilihan. Setiap suapan membawa 
           Anda menikmati kehangatan dan cerita dari nusantara.

             to the stories, cultures, and warmth of the Indonesian people.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/bakarsapi.jpe" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bakar Iga Sapi</h2>
            <h2 className="card-title text-amber-800 text-sm">
              Rp 70.000.
            </h2>
            <p>
             Iga sapi bakar empuk dengan bumbu khas yang meresap sempurna, menghadirkan
              cita rasa gurih dan sedikit manis yang menggoda selera.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/ikann.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kakap Bakar Jimbaran</h2>
            <h2 className="card-title text-amber-800 text-sm">
              Rp 95.000
            </h2>
            <p>
              Ikan Bakar Jimbaran adalah hidangan ikan segar yang dibumbui rempah
              khas Bali dan dibakar sempurna di atas arang, menghasilkan rasa gurih dan aroma asap yang menggoda selera
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/bebek.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bebek Betutu</h2>
            <h2 className="card-title text-amber-800 text-sm">Rp 90.000</h2>
            <p>
              Bebek Betutu adalah hidangan khas Bali berupa bebek yang dibumbui rempah lengkap 
              dan dibungkus daun pisang, kemudian dimasak perlahan hingga dagingnya empuk dan
              penuh cita rasa. Rasanya kaya rempah, pedas, dan aromatik, cocok untuk Anda yang ingin menikmati kelezatan kuliner tradisional Indonesia.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/pecellele.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pecel Lele</h2>
            <h2 className="card-title text-amber-800 text-sm">
              Rp 40.000.
            </h2>
            <p>
              Pecel Lele adalah hidangan favorit Indonesia berupa ikan lele
              goreng renyah yang disajikan dengan sambal pedas khas, nasi hangat,
              dan lalapan segar. Sensasi gurih dan pedasnya membuat makanan ini selalu
              jadi pilihan tepat untuk santapan sehari-hari.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/ayamcolek.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ayam sambal colek</h2>
            <h2 className="card-title text-amber-800 text-sm">
              Rp 35.000
            </h2>
            <p>
              Ayam Sambal Colek adalah hidangan ayam goreng renyah yang di sajikan dengan sambal colek segar dengan
              perpaduan cabai,tomat dan bumbu khas yang memberikan rasa pedas,segar,dan sedikit asam yang akan menaikan selera anda 
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/sate.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sate Bumbu Padang</h2>
            <h2 className="card-title text-amber-800 text-sm">Rp 45.000</h2>
            <p>
              Sate Bumbu Padang adalah sate daging pilihan yang dibakar sempurna dan disajikan dengan bumbu khas Padang yang kaya rempah, gurih, dan pedas.
              Perpaduan rasa autentik ini membuat setiap tusuk sate terasa nikmat dan menggugah selera.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
