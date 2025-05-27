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
          <h2 className="text-3xl font-bold">Featured Coffee Selections</h2>
        </div>
        <p className="text-base text-gray-600 mb-2 text-center">
          Explore our premium coffee varieties from different regions of
          Indonesia.
        </p>
        <p className="text-base space-x-4 text-amber-900 text-center">
           Enjoy the authentic taste and finest quality of every coffee
           bean we select.Experience the rich aromas and unique flavors
            that reflect the diverse coffee-growing regions of Indonesia.
            Each cup promises a perfect blend of tradition and excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src="/product-beans.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sumatra Mandheling</h2>
            <h2 className="card-title text-amber-800 text-sm">
              Aceh, North Sumatra
            </h2>
            <p>
              Bold, earthy, and full-bodied with notes of dark chocolate, cedar,
              and a subtle spice finish.
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
            <img src="/product-beans.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toraja Kalosi</h2>
            <h2 className="card-title text-amber-800 text-sm">
              South Sulawesi
            </h2>
            <p>
              Complex and well-balanced with notes of dark chocolate, spices,
              and a clean, syrupy body.
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
            <img src="/product-beans.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Java Robusta</h2>
            <h2 className="card-title text-amber-800 text-sm">East Java</h2>
            <p>
              Strong and bold with woody notes, a hint of dark chocolate, and a
              smooth, lingering finish.
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
