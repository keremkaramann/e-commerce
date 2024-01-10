import React, { useState } from "react";

const ProductCard = ({ images, name, desc, price }) => {
  const colorOptions = [
    {
      name: "Primary",
      className: "bg-primary-blue color-picker",
    },
    {
      name: "Success",
      className: "bg-success-color color-picker",
    },
    {
      name: "Alert",
      className: "bg-alert-color color-picker",
    },
    {
      name: "Navy",
      className: "bg-dark-navy color-picker",
    },
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (color === selectedColor) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };

  return (
    <div className="xs:mx-5 middle:mx-0 shadow-md xs:scale-1 middle:hover:scale-[1.04] duration-300 border-t-2">
      <img
        src={images[0].url}
        alt="product-img"
        className="xs:w-full middle:w-full xs:max-h-[600px] middle:h-[500px]"
      />
      <div className="text-center mt-5 mb-20">
        <p className="text-secondary-text font-bold text-sm mt-5 mb-5">
          {name}
        </p>
        <div className="flex gap-2 justify-center mb-5">
          <p className="text-bold text-[#23856D]">${price}</p>
        </div>
        <div>
          <ul className="flex justify-center gap-2 pb-5">
            {colorOptions.map((colorOption, index) => (
              <li
                key={index}
                className={`color-option ${colorOption.className} ${
                  selectedColor === colorOption.name
                    ? "border-solid border-2 border-black"
                    : ""
                }`}
                onClick={() => handleColorClick(colorOption.name)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
