import { Info } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="About Section"
      className="max-w-screen-xl mx-auto space-y-8 my-32"
    >
      <div className="grid grid-cols-2 gap-8">
        <div className="h-full flex flex-col gap-4 items-start">
          <div className="bg-amber-900 text-amber-100 px-2 py-1 rounded-lg">
            ☎Contact Us
          </div>
          <h1 className="text-3xl font-bold">
            Ready to Source Premium Indonesian Nusantara Cuisine ?
          </h1>
          <p className="text-xl">
            Contact us today to discuss your coffee needs, request samples, or
            get a personalized quotation.
          </p>
          <div className="flex items-center gap-2">
            <button className="btn bg-amber-800 text-white border-none">
              ☎Contact Us
            </button>
            <button className="btn btn-outline ">📞Call Us</button>
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
              <span className="font-semibold">info@citanusaresto.com</span>
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
              <span className="font-semibold">+62 812 56565656</span>
            </div>
            <input
              type="radio"
              name="contact"
              className="tab"
              aria-label="Instagram"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6 space-y-2">
              <h3 className="font-bold text-lg">DM us on Instagram</h3>
              <p>For updates and inquiries:</p>
              <span className="font-semibold">@citanusaresto</span>
            </div>
            <input
              type="radio"
              name="contact"
              className="tab"
              aria-label="TikTok"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6 space-y-2">
              <h3 className="font-bold text-lg">Follow us on TikTok</h3>
              <p>For fun content and updates:</p>
              <span className="font-semibold">@citanusaresto</span>
           </div>
          </div>
        </div>
        <div className="w-full h-[250px] mt-4 rounded-lg overflow-hidden shadow-lg">
  <iframe
    title="Cita Nusa Resto Map"
    src="https://www.google.com/maps/embed?pb=!1m"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      </div>
    </section>
  );
}
