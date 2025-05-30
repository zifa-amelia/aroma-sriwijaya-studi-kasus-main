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
          <h2 className="text-3xl font-bold">🍴MENU UNGGULAN KAMI🍴</h2>
        </div>
        <p className="text-base text-gray-600 mb-2 text-center">
          Hidangan-hidangan istimewa yang menjadi favorit pelanggan kami.
        </p>
        <p className="text-base space-x-4 text-amber-900 text-center">
           Indonesia terkenal dengan kekayaan budaya dan kulinernya. Masakan Nusantara menghadirkan rempah 
           khas dan cita rasa dari berbagai daerah. Di Cita Nusa Resto, kami menyajikan hidangan otentik dari 
           Sumatra, Jawa, hingga Indonesia Timur, dengan resep asli dan bahan pilihan. Setiap suapan membawa 
           Anda menikmati kehangatan dan cerita dari nusantara.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/bakarsapi.jpe" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">🐄 Bakar Iga Sapi</h2>
            <h2 className="card-title text-amber-800 text-sm">
              📍 Bandung Rp 70.000.
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
            <h2 className="card-title">🐠 Kakap Bakar Jimbaran</h2>
            <h2 className="card-title text-amber-800 text-sm">
              📍Bali,Jimbaran  Rp 95.000
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
            <h2 className="card-title">🪿Bebek Betutu</h2>
            <h2 className="card-title text-amber-800 text-sm">📍Bali  Rp 90.000</h2>
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
            <img src="/nasi1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> 🍛 Nasi Goreng Mandheling</h2>
            <h2 className="card-title text-amber-800 text-sm">
             📍Aceh, Sumatera Utara       Rp 40.000
            </h2>
            <p>
               Nasi goreng khas Aceh yang kaya rempah dengan potongan daging sapi, disajikan dengan telur mata sapi.
               Rasa gurih pedas, aroma kuat, dan tekstur daging yang empuk.

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
            <img src="/udang.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">🦐 Udang Saus Rempah Kalosi</h2>
            <h2 className="card-title text-amber-800 text-sm">
              📍Sulawesi Selatan    Rp 35.000
            </h2>
            <p>
               Udang segar dimasak dengan bumbu khas Toraja: pedas, manis, dan sedikit gurih, menghasilkan rasa kompleks yang kaya.
               🔸Cocok untuk pencinta seafood berbumbu kuat.

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
            <img src="/satedaging.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">🥩 Sate Daging Robusta Jawa</h2>
            <h2 className="card-title text-amber-800 text-sm">📍 Jawa Timur   Rp 45.000</h2>
            <p>
              Potongan daging sapi empuk dengan paprika panggang disajikan di atas nasi kuning gurih rempah.
             🔸Perpaduan rasa daging beraroma asap dan nasi berbumbu yang menggoda

            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
          
        </div>
      <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold">👨🏻‍🍳👩🏻‍🍳CHEF TRADISIONAL👨🏻‍🍳👩🏻‍🍳</h2>
        </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/chef1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">👨🏻‍🍳👩🏻‍🍳 Chef Raka Flame & Meria</h2>
            <h2 className="card-title text-amber-800 text-sm">
             🔥 Berani, penuh semangat, dan kreatif      
            </h2>
            <p>
               Chef Raka dikenal karena gaya memasaknya yang eksplosif dan penuh kejutan. Ia suka bereksperimen dengan teknik memasak api tinggi dan selalu membawa energi ke dapur.
               🔸Keahliannya dalam mengolah bahan-bahan segar menjadi hidangan yang menggugah selera membuatnya menjadi bintang di dapur Cita Nusa Resto.

            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Chef Budi Nusantara
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/chef2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">👨🏻‍🍳👩🏻‍🍳Chef Dimas Al Dente & Qaruia</h2>
            <h2 className="card-title text-amber-800 text-sm">
              🍴Presisi dan elegan
            </h2>
            <p>
               Seorang perfectionist yang sangat memperhatikan detail, terutama dalam masakan Italia. Chef Dimas punya prinsip: masakan sempurna adalah seni rasa dan tekstur.
                🔸Ia selalu memastikan setiap hidangan disajikan dengan sempurna, dari pasta al dente hingga saus yang kaya rasa.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Chef Ayu Rasa
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/chef3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">👨🏻‍🍳👩🏻‍🍳Chef Nara Spice & Al Mecrwe</h2>
            <h2 className="card-title text-amber-800 text-sm">🌶 Penuh warna dan petualang.</h2>
            <p>
              Selalu menjelajah rempah-rempah dari seluruh penjuru dunia. Chef Nara punya kepekaan tinggi terhadap rasa dan aroma.
              Hidupnya seperti perpaduan antara peta dan dapur.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-800 text-white mt-2 border-orange-950 border-cyan-400 py-2 px-4 rounded-lg hover:text-black">
                Chef Tegar Rempah
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
