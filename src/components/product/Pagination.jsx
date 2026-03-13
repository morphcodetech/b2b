import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12">

      {/* Previous */}
      <button className="text-gray-500 text-lg hover:text-gray-700">
        <FaAngleLeft />
      </button>

      {/* Pages */}
      <button className="bg-primary text-white w-10 h-10 rounded-md flex items-center justify-center font-medium">
        1
      </button>

      <button className="text-gray-600 w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-100">
        2
      </button>

      <button className="text-gray-600 w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-100">
        3
      </button>

      {/* Next */}
      <button className="text-gray-500 text-lg hover:text-gray-700">
        <FaAngleRight />
      </button>

    </div>
  );
};

export default Pagination;