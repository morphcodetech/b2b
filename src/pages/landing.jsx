import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "Go to Home", path: "/home", color: "bg-blue-600" },
    { label: "Go to Contact", path: "/contact", color: "bg-purple-600" },
    { label: "Go to Cart", path: "/cart", color: "bg-green-600" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Project Launchpad</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {buttons.map((btn) => (
          <button
            key={btn.path}
            onClick={() => navigate(btn.path)}
            className={`${btn.color} hover:scale-105 transition-transform px-8 py-4 rounded-xl font-semibold shadow-lg`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <p className="mt-8 text-slate-400">Select a page to view the implementation.</p>
    </div>
  );
};

export default Landing;