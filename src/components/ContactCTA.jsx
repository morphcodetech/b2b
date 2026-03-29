// FontAwesome v6 (safe icons only)
import {
  FaPhone,
  FaFax,
  FaWhatsapp,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaVimeoV,
  FaLocationDot,
} from "react-icons/fa6";

// FontAwesome v5
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section className="relative bg-[#0c3b66] text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Contact us today if you’d like to know more <br />
            about how we help buy, sell or rent your home
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white text-gray-800 rounded-md shadow-xl p-10">
          <h3 className="text-2xl font-bold mb-2 text-center">
            Schedule a meeting with our team
          </h3>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Our experts and developers would love to contribute their expertise
            and insights to your real estate plans.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Mobile" />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="City" />

            <textarea
              className="md:col-span-2 input h-32 resize-none"
              placeholder="Message"
            />

            <button className="md:col-span-2 bg-[#0073e1] hover:bg-blue-700 text-white py-4 font-bold rounded-md transition-all">
              Send Email
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#061f36] text-gray-300 pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact us</h4>

            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <FaLocationDot />
                3755 Commercial St SE Salem, OR 97302
              </li>
              <li className="flex gap-3 items-start">
                <FaPhone />
                (305) 555-4446
              </li>
              <li className="flex gap-3 items-start">
                <FaFax />
                (305) 555-4555
              </li>
              <li className="flex gap-3 items-start">
                <FaEnvelope />
                youremail@gmail.com
              </li>
              <li className="font-bold text-white">WP RESIDENCE</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6 flex-wrap">
              {[
                FaFacebookF,
                FaWhatsapp,
                FaTiktok,
                FaXTwitter,
                FaYoutube,
                FaVimeoV,
                FaInstagram,
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 bg-[#0c3b66] flex items-center justify-center rounded hover:bg-blue-600 cursor-pointer"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6">Lists by Category</h4>
            <ul className="space-y-3">
              <li>Apartments (17)</li>
              <li>Condos (8)</li>
              <li>Houses (5)</li>
              <li>Industrial (1)</li>
              <li>Land (1)</li>
              <li>Offices (2)</li>
              <li>Retail (4)</li>
              <li>Villas (4)</li>
            </ul>
          </div>

          {/* Latest Properties */}
          <div>
            <h4 className="text-white font-bold mb-6">Latest Properties</h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6191da95b4?w=200"
                  className="w-16 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-white">Luxury House in Greenville</p>
                  <span className="text-blue-400">$860,000</span>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1600607687940-4e2a09695d51?w=200"
                  className="w-16 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-white">Modern Condo for Sale</p>
                  <span className="text-blue-400">$150,000</span>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=200"
                  className="w-16 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-white">Apartment with Subunits</p>
                  <span className="text-blue-400">$999 / month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-xs text-gray-400">
          © WP Estate. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default ContactCTA;
