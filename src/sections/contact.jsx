import { Info } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="About Section"
      className="max-w-screen-xl mx-auto space-y-8 my-32"
    >
      <div className="grid grid-cols-2 gap-8">
        <div className="h-full flex flex-col gap-4 items-start">
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
            Contact Us
          </div>
          <h1 className="text-3xl font-bold">
            Ready to Source Premium Indonesian Coffee?
          </h1>
          <p className="text-xl">
            Contact us today to discuss your coffee needs, request samples, or
            get a personalized quotation.
          </p>
          <div className="flex items-center gap-2">
            <button className="btn bg-amber-800 text-white border-none">
              Contact Us
            </button>
            <button className="btn btn-outline ">Call Us</button>
          </div>
        </div>
        <div>
          <div className="tabs tabs-lift">
            <input
              type="radio"
              name="contact"
              className="tab"
              aria-label="Email Us"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6 space-y-2">
              <h3 className="font-bold text-lg">Send us an email</h3>
              <p>For inquiries and quotations:</p>
              <span className="font-semibold">info@aromasriwijaya.com</span>
            </div>

            <input
              type="radio"
              name="contact"
              className="tab"
              aria-label="Whatsapp"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6 space-y-2">
              <h3 className="font-bold text-lg">Message us on Whatsapp</h3>
              <p>For quick responses:</p>
              <span className="font-semibold">+62 812 3456 7890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
