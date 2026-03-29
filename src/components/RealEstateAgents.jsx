import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const agents = [
  {
    id: 1,
    name: "Lily Bicharm",
    role: "Realtor",
    listings: 4,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    desc:
      "Lily Bicharm is a dedicated and professional real estate agent who specializes in providing outstanding service.",
  },
  {
    id: 2,
    name: "Samuel Diesel",
    role: "Commercial Broker",
    listings: 4,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    desc:
      "With a genuine passion for helping clients find their dream homes, Samuel Diesel brings a results-driven mindset.",
  },
  {
    id: 3,
    name: "Dennis Albo",
    role: "Senior Agent",
    listings: 6,
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    desc:
      "With a sharp understanding of market trends and a strategic approach to negotiation, Dennis delivers value.",
  },
];

const RealEstateAgents = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800">
            Real Estate Agents
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
            With the “list agents shortcode” you can show your agents in any
            page, alongside with their contact details and link to their agent
            profile.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={agent.img}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-sm font-bold">
                  {agent.listings} listings
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{agent.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {agent.desc}
                </p>

                {/* Social + Contact */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 text-gray-400 text-sm">
                    <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                    <FaTwitter className="hover:text-blue-600 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
                    <FaPinterestP className="hover:text-blue-600 cursor-pointer" />
                    <FaInstagram className="hover:text-blue-600 cursor-pointer" />
                  </div>
                  <div className="flex gap-4 text-gray-500">
                    <FaPhoneAlt className="cursor-pointer hover:text-blue-600" />
                    <FaEnvelope className="cursor-pointer hover:text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateAgents;
