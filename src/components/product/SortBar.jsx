import { FaTh, FaList } from "react-icons/fa";

export default function SortBar({view,setView}) {

  return (
    <div className="flex items-center justify-between mb-6">

      <div className="flex items-center gap-3">

        <span className="text-gray-600">Sort By :</span>

        <select className="border rounded-md px-3 py-2 text-sm">

          <option>Most Popular</option>
          <option>Popularity</option>
          <option>Low - High Price</option>
          <option>High - Low Price</option>
          <option>Average Rating</option>

        </select>

      </div>

      <div className="flex gap-2">

        <button
          onClick={()=>setView("grid")}
          className={`p-2 rounded ${
            view==="grid"
            ? "bg-primary text-white"
            : "bg-gray-100"
          }`}
        >
          <FaTh/>
        </button>

        <button
          onClick={()=>setView("list")}
          className={`p-2 rounded ${
            view==="list"
            ? "bg-primary text-white"
            : "bg-gray-100"
          }`}
        >
          <FaList/>
        </button>

      </div>

    </div>
  );
}