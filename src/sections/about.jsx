import { Info } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="About Section"
      className="max-w-screen-xl mx-auto space-y-8 my-32"
    >
      <div className="grid grid-cols-2 gap-8">
        <div className="h-full flex flex-col gap-4 items-start">
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
            Direct from Indonesia
          </div>
          <h1 className="text-3xl font-bold">
            Exceptional Coffee Beans from the Heart of Indonesia
          </h1>
          <p className="text-xl">
            Aroma Sriwijaya works directly with local farmers across Indonesia
            to source the finest Arabica and Robusta coffee beans. Our
            commitment to quality and sustainability ensures that every bean we
            export meets the highest standards.We believe that the finest quality can only
             be achieved through trusted sources that are managed responsibly. That’s why we actively build long-term relationships with local farmers, providing training and support to ensure that the coffee cultivation process is sustainable and environmentally friendly.
          </p>
          <button className="bg-amber-800 text-cyan-50 border border-cyan-200 py-2 px-4 rounded-lg hover:text-black">
            See Our Products
          </button>
        </div>
        <div>
          <img src="/about-beans.jpg" className="shadow-lg rounded-lg" />
        </div>
      </div>
    </section>
  );
}
