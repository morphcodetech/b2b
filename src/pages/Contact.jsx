import React, { useState, useEffect, useRef } from 'react';
import p2 from "../assets/p2.jpg";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen selection:bg-orange-100">
      
      {/* --- 1. NAVBAR SECTION (Image_d5b6a7.png) --- */}
      <header className="w-full border-b border-gray-100">
        <div className="hidden md:flex justify-between items-center px-10 py-3 text-[13px] border-b border-gray-50 text-gray-600">
          <div className="flex gap-6">
            <span>Call us toll free: <b className="text-gray-900">+1-541-754-3010</b></span>
            <span>Send us an email: <b className="text-gray-900">contact@example.com</b></span>
          </div>
          <div className="flex gap-6">
            <button className="flex items-center gap-2 hover:text-[#ff7a50]">🚚 Order Tracking</button>
            <button className="flex items-center gap-2 hover:text-[#ff7a50]">🤍 Wishlist</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 py-5 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ff7a50] rounded-full flex items-center justify-center text-white text-xl font-bold italic">A</div>
            <span className="text-3xl font-black text-gray-900 italic">Angro</span>
          </div>
          <div className="flex-1 w-full max-w-2xl flex border-2 border-gray-100 rounded-md overflow-hidden">
            <div className="px-4 flex items-center text-gray-400">🔍</div>
            <input type="text" placeholder="Search products..." className="flex-1 py-3 text-sm outline-none" />
            <div className="bg-gray-50 border-l border-gray-100 px-4 py-3 text-sm font-bold text-gray-700 cursor-pointer">All Categories ▼</div>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative p-3 border border-gray-100 rounded-md">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-[#ff7a50] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">0</span>
            </div>
            <div className="text-sm">
              <p className="text-gray-400 text-xs">Hello,</p>
              <p className="font-extrabold text-gray-900">Account & Lists</p>
            </div>
          </div>
        </div>
      </header>

      {/* --- 2. CONTACT & MOVABLE FORM (Image_cbd4fc.png) --- */}
      <section className="relative bg-gray-50">
        <div className="px-10 py-12 bg-white"><h1 className="text-4xl font-extrabold text-gray-800">Contact</h1></div>
        <div className="h-[500px] bg-cover bg-center grayscale-[10%]" style={{ backgroundImage: `url(${p2})` }}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div ref={formRef} className={`max-w-6xl mx-auto bg-white shadow-2xl flex flex-col md:flex-row transition-all duration-1000 transform ${isVisible ? "-mt-40 opacity-100 translate-y-0" : "mt-0 opacity-0 translate-y-20"}`}>
            <div className="flex-[2] p-8 md:p-14">
              <h2 className="text-3xl font-bold mb-10 text-gray-800 tracking-tight">Send us a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8" onSubmit={(e)=>e.preventDefault()}>
                {['Full Name', 'Email Address', 'Phone Number', 'Subject'].map((label) => (
                  <div key={label} className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-gray-700">{label}</label>
                    <input type="text" placeholder={`${label}...`} className="bg-gray-50 border border-gray-100 p-3 rounded-sm focus:border-[#ff7a50] outline-none transition-all placeholder:text-gray-300" />
                  </div>
                ))}
                <div className="md:col-span-2 mt-4">
                   <label className="text-[13px] font-bold text-gray-700 block mb-2">Message</label>
                   <textarea rows="6" placeholder="Type here..." className="w-full border border-gray-100 p-4 bg-gray-50 focus:bg-white outline-none resize-none"></textarea>
                </div>
                <button className="bg-[#ff7a50] text-white px-10 py-4 font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-[#e86940] transition-colors">Send Message</button>
              </form>
            </div>
            <div className="flex-1 bg-[#ff7a50] text-white p-10 md:p-14 flex flex-col gap-12">
              <SidebarItem icon="📧" title="Email Address" text={["office@angro.modeltheme.com", "sales@angro.modeltheme.com"]} />
              <SidebarItem icon="📍" title="Headquarters" text={["211 Ullamcorper St Roseville,", "New York, United States, 26483"]} />
              <SidebarItem icon="📞" title="Phone Number" text={["Headquarters: +20 000 000 000", "Sales: +20 000 000 000"]} />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. PARTNERS SECTION (Image_d5bb1a.png) --- */}
      <section className="py-24 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16 tracking-tight">Our Trustworthy Partners</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale hover:opacity-100 transition-opacity">
            <PartnerText main="VEGETARIAN" sub="NATURAL RESTAURANT" />
            <PartnerText main="FRESH FOOD" sub="THE BEST" />
            <PartnerText main="ORGANIC" sub="PRIME QUALITY" />
            <PartnerText main="ORGANIC" sub="CERTIFIED" />
            <PartnerText main="ORGANIC" sub="VEGAN FOOD" />
            <PartnerText main="NATURAL" sub="VEGAN RESTAURANT" />
        </div>
      </section>

      {/* --- 4. TESTIMONIALS SECTION (Image_d5c283.png) --- */}
      <section className="py-20 px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16 tracking-tight">Listen to other customer's opinions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <TestimonialCard name="Martin Culich" role="Digital Marketer" />
            <TestimonialCard name="Naren Doe" role="Digital Marketer" />
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER SECTION (Image_d5c983.png) --- */}
      <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          
          {/* Brand & Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xl">🍃</div>
              <span className="text-3xl font-black italic">Angro</span>
            </div>
            <p className="text-gray-400 text-sm">Get the latest updates on new products and upcoming sales</p>
            <div className="flex bg-white rounded-sm overflow-hidden group">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 text-black text-sm outline-none" />
              <button className="bg-white px-4 text-gray-400 hover:text-[#ff7a50]">➤</button>
            </div>
            <div className="flex gap-4 text-lg opacity-80">
              {['facebook', 'twitter', 'linkedin', 'instagram', 'deviantart'].map(s => (
                <span key={s} className="cursor-pointer hover:text-[#ff7a50] transition-colors capitalize">●</span>
              ))}
            </div>
          </div>

          {/* Links: Information */}
          <FooterColumn title="Information" links={["About us", "Delivery Information", "Privacy Policy", "Store Locations", "Order History"]} />
          
          {/* Links: My Account */}
          <FooterColumn title="My Account" links={["Your Account", "Brands", "Gift Cards", "Affiliates", "Wishlist"]} />

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact info.</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                <span className="text-[#ff7a50]">📍</span>
                <p>4 Grand Central Terminal New York, NY 10 City name, CA 90896 United State USA.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#ff7a50]">✉️</span>
                <p>contact@example.com</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#ff7a50]">📞</span>
                <p>+1-541-754-3010</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#ff7a50]">📅</span>
                <p>Mon-Sat 9:00 - 5:00 Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">Copyright by ModelTheme. All Rights Reserved.</p>
          <div className="flex gap-2 opacity-80">
            {['Maestro', 'PayPal', 'Discover', 'Amex', 'Visa', 'Mastercard'].map(p => (
              <div key={p} className="bg-white px-2 py-1 rounded text-[8px] text-black font-bold uppercase">{p}</div>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

// --- Sub-Components ---

const SidebarItem = ({ icon, title, text }) => (
  <div>
    <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-lg text-2xl mb-5">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    {text.map((t, i) => <p key={i} className="text-sm opacity-80 leading-relaxed">{t}</p>)}
  </div>
);

const PartnerText = ({ main, sub }) => (
  <div className="text-center font-bold border-2 border-transparent hover:border-gray-100 p-4 rounded-lg transition-all">
    <div className="text-xs tracking-[0.2em] text-gray-800 mb-1">{main}</div>
    <div className="text-[9px] text-gray-400 tracking-wider font-medium">{sub}</div>
  </div>
);

const TestimonialCard = ({ name, role }) => (
  <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 relative">
    <div className="flex items-start gap-6 mb-8">
      <div className="text-7xl text-[#ff7a50] leading-none opacity-50 font-serif">“</div>
      <div>
        <h4 className="font-bold text-gray-900 text-xl">{name}</h4>
        <p className="text-sm text-gray-400 mb-2">{role}</p>
        <div className="text-orange-400 text-xs tracking-tighter">★★★★★</div>
      </div>
    </div>
    <p className="text-gray-500 leading-relaxed text-sm italic">
      Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
    </p>
  </div>
);

const FooterColumn = ({ title, links }) => (
  <div className="space-y-6">
    <h4 className="text-xl font-bold">{title}</h4>
    <ul className="space-y-3 text-sm text-gray-400">
      {links.map(link => (
        <li key={link} className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
          <span className="text-[#ff7a50] text-[10px]">»</span> {link}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactPage;