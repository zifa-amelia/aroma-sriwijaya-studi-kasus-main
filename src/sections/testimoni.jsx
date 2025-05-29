import { Coffee } from "lucide-react";
import { Soup } from "lucide-react";
import { Leaf } from "lucide-react";
import { Globe } from "lucide-react";
import { ChefHat } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section
      id="Benefit Section"
      className="max-w-screen-xl mx-auto space-y-8 my-20"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg font-medium">
          TESTIMONIALS
        </div>
        <div className="flex items-center gap-2">
          <ChefHat className="text-orange-400" />
          <h2 className="text-3xl font-bold">"Testimonials from Lovers of Indonesian Cuisine"</h2>
        </div>
        <p className="text-base text-gray-600">
          Dengar langsung dari para pelanggan yang telah menikmati kelezatan dan layanan 
          terbaik dari Cita Nusa Resto.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Soup className="text-amber-800 h-8 w-8" />
            <p>
              "Cita Nusa Resto selalu menjadi pilihan utama kami untuk menyajikan hidangan tradisional Indonesia yang otentik.
              Rasa yang konsisten dan kualitas bahan yang mereka gunakan membuat setiap acara kami selalu berkesan."
            </p>
            <span className="text-end font-bold">- Rina Susanto</span>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Soup className="text-amber-800 h-8 w-8" />
            <p>
              "Menu tradisional dari Cita Nusa Resto benar-benar menghadirkan rasa asli nusantara yang sulit ditemukan di tempat lain.
              Pelayanan mereka yang profesional juga membuat kerja sama kami sangat lancar."
            </p>
            <span className="text-end font-bold">- Adi Pratama</span>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Soup className="text-amber-800 h-8 w-8" />
            <p>
              "Kami sangat puas dengan cita rasa autentik dan penyajian istimewa dari Cita Nusa Resto.
              Mereka selalu menjaga kualitas dan memberikan pengalaman kuliner yang tak terlupakan bagi pelanggan kami."
            </p>
            <span className="text-end font-bold">- Maya Dwi</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg font-medium">
          TESTIMONIALS
        </div>
        <div className="flex items-center gap-2">
          <ChefHat className="text-orange-400" />
          <h2 className="text-3xl font-bold">"Customer Voices, Flavors of Indonesia"</h2>
        </div>
        <p className="text-base text-gray-600">
          Sudah percaya dengan testi mereka? masih ada testi yang lain loh
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Soup className="text-amber-800 h-8 w-8" />
            <p>
              "Setiap kali memesan dari Cita Nusa Resto, kami seperti dibawa pulang ke kampung halaman.
              Hidangan mereka penuh rasa, autentik, dan selalu disukai tamu-tamu kami."
            </p>
            <span className="text-end font-bold">- Dedi Hartanto</span>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Soup className="text-amber-800 h-8 w-8" />
            <p>
              "Cita Nusa Resto berhasil mengangkat kuliner tradisional ke level premium. Rasa, penyajian, dan
              pelayanannya luar biasa. Mitra yang sangat kami percaya untuk acara spesial."
            </p>
            <span className="text-end font-bold">- Lestaria Anindya</span>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Soup className="text-amber-800 h-8 w-8" />
            <p>
              "Kami telah bekerja sama dengan Cita Nusa Resto untuk berbagai event, dan hasilnya selalu memuaskan.
              Hidangan tradisional mereka selalu menjadi pusat perhatian."
            </p>
            <span className="text-end font-bold">- Fajar Mahendra</span>
          </div>
        </div>
      </div>
    </section>
  );
}
