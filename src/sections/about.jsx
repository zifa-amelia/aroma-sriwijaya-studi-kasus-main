import { Info } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="About Section"
      className="max-w-screen-xl mx-auto space-y-8 my-32"
    >
      <div className="grid grid-cols-2 gap-8">
        <div className="h-full flex flex-col gap-4 items-start">
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg font-bold">
            DIRECT FROM INDONESIA
          </div>
          <h1 className="text-3xl font-bold">
            Cita Nusa Resto Harmoni Rasa,Cita Rasa Nusantara
          </h1>
          <p className="text-xl">
            Selamat Datang di CITA NUSA RESTO, tempat di mana cita rasa dan kenyamanan berpadu
             dalam pengalaman kuliner yang tak terlupakan. Kami menyajikan berbagai hidangan lezat
              yang dibuat dari bahan-bahan segar dan berkualitas tinggi, diperkaya dengan sentuhan 
              rasa khas yang memanjakan lidah. Dengan suasana yang hangat dan pelayanan yang ramah, 
              kami berkomitmen menjadi pilihan utama Anda untuk makan siang bersama keluarga, makan
              malam romantis, atau momen-momen istimewa lainnya. Setiap hidangan yang kami sajikan
              dibuat dengan penuh perhatian, semangat, dan ketelitian. Datang dan nikmati momen spesial
              Anda bersama kami di Cita Nusa Resto, dan rasakan kenikmatan dalam setiap gigitan.
          </p>
          <button className="bg-orange-800 text-slate-950 border border-cyan-400 py-2 px-4 font-medium rounded-lg hover:text-black hover:bg-neutral-600">
            SEE OUR PRODUCTS
          </button>
        </div>
        <div>
          <img src="/jawa.jpg" className="shadow-lg rounded-lg" />
        </div>
      </div>
    </section>
  );
}
