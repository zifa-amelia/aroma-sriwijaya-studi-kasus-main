import { Crown } from "lucide-react";
import { ChefHat } from "lucide-react";
import { Globe } from "lucide-react";
import { Award } from "lucide-react";

export default function CommitmentSection() {
  return (
    <section
      id="Benefit Section"
      className="max-w-screen-xl mx-auto space-y-8 my-20"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
          Why Choose Us?
        </div>
        <div className="flex items-center gap-2">
          <Award className="text-amber-800" />
          <h2 className="text-3xl font-bold">OUR C0MMITMENT TO EXCLLENCE</h2>
        </div>
        <p className="text-base text-gray-600">
          Temukan alasan mengapa pecinta kuliner di seluruh dunia mempercayai
          Cita Nusa Resto untuk menikmati cita rasa otentik kuliner Nusantara yang premium.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <Globe className="text-amber-500 h-8 w-8" />
            <h2 className="card-title font-bold">Rasa Nusantara,Menembus Dunia</h2>
            <p>
              Dari dapur kami ke meja Anda,kami menghadirkan cita rasa otentik Indonesia kepada
              pecinta kuliner di berbagai penjuru dunia, dengan pengiriman tepat waktu dan layanan 
              terpercaya.
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <Crown className="text-amber-500 h-8 w-8" />
            <h2 className="card-title font-bold">Cita Rasa Lokal,Jangkauan Internasional</h2>
            <p>
              Cafe Nusa Resto melayani pelanggan global yang mencari pengalaman kuliner khas Nusantara,
              melalui sistem logistik yang efisien dan pengiriman yang dapat diandalkan.
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <ChefHat className="text-amber-500 h-8 w-8" />
            <h2 className="card-title font-bold">Membawa Indonesia ke Dunia</h2>
            <p>
              Kami bangga mengekspor ke berbagai negara, menghadirkan kekayaan rasa dan budaya kuliner Indonesia dari Cafe Nusa Resto ke resto dan kafe mitra kami di seluruh dunia—dengan
              kualitas, kecepatan, dan ketepatan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
