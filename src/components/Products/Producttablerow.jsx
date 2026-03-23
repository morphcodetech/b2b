import React, { useState } from "react";

const ProductTableRow = ({
  id,
  image,
  name,
  price,
  stock,
  sales,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({
    name: "",
    price: "",
    stock: "",
    sales: "",
  });

  const handleStartEdit = () => {
    setIsEditing(true);
    setDraft({
      name: name ?? "",
      price: price ?? "",
      stock: stock ?? "",
      sales: sales ?? "",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDraft({
      name: name ?? "",
      price: price ?? "",
      stock: stock ?? "",
      sales: sales ?? "",
    });
  };

  const handleSave = () => {
    const stockNum = Number(draft.stock);
    const salesNum = Number(draft.sales);

    const updates = {
      name: String(draft.name ?? "").trim(),
      price: String(draft.price ?? ""),
      stock: Number.isFinite(stockNum) ? stockNum : 0,
      sales: Number.isFinite(salesNum) ? salesNum : 0,
    };

    onUpdate?.(id, updates);
    setIsEditing(false);
  };

  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      <td className="py-4 pr-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 object-cover rounded-lg"
        />
      </td>

      <td className="py-4 pr-4 text-sm text-gray-600">
        {isEditing ? (
          <input
            type="text"
            value={draft.name}
            onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
            className="w-full px-2 py-1 rounded border border-gray-200 text-sm"
          />
        ) : (
          name
        )}
      </td>

      <td className="py-4 pr-4 text-sm font-semibold text-[#FA6C48]">
        {isEditing ? (
          <input
            type="text"
            value={draft.price}
            onChange={(e) =>
              setDraft((d) => ({ ...d, price: e.target.value }))
            }
            className="w-full px-2 py-1 rounded border border-gray-200 text-sm"
          />
        ) : (
          price
        )}
      </td>

      <td className="py-4 pr-4 text-sm text-gray-600">
        {isEditing ? (
          <input
            type="number"
            value={draft.stock}
            onChange={(e) =>
              setDraft((d) => ({ ...d, stock: e.target.value }))
            }
            className="w-full px-2 py-1 rounded border border-gray-200 text-sm"
          />
        ) : (
          stock
        )}
      </td>

      <td className="py-4 pr-4 text-sm text-gray-600">
        {isEditing ? (
          <input
            type="number"
            value={draft.sales}
            onChange={(e) =>
              setDraft((d) => ({ ...d, sales: e.target.value }))
            }
            className="w-full px-2 py-1 rounded border border-gray-200 text-sm"
          />
        ) : (
          sales
        )}
      </td>

      <td className="py-4">
        <div className="flex items-center gap-3">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={handleSave}
                className="text-white bg-[#FA6C48] hover:bg-[#FA6C48]/90 transition-colors px-3 py-1 rounded text-sm"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 rounded text-sm"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {/* Edit */}
              <button
                type="button"
                onClick={handleStartEdit}
                className="text-[#FA6C48] hover:text-[#FA6C48]/90 transition-colors"
                aria-label={`Edit product ${name}`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>

              {/* Delete */}
              <button
                type="button"
                onClick={() => {
                  const ok = window.confirm(
                    `Delete "${name}" from products?`
                  );
                  if (!ok) return;
                  onDelete?.(id);
                }}
                className="text-red-400 hover:text-red-600 transition-colors"
                aria-label={`Delete product ${name}`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                  <path d="M10 11v6M14 11v6" />
                  <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                </svg>
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ProductTableRow;
