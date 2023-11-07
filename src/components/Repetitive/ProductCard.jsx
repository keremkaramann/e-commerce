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
    <div>
      <img
        src={images[0].url}
        alt="product-img"
        className="xs:px-3 middle:px-0 xs:w-[340px] middle:w-full xs:max-h-[500px] middle:h-auto"
      />
      <div className="text-center mt-5 mb-20">
        <p className="text-secondary-text font-bold text-sm mt-5 mb-5">
          {name}
        </p>
        <div className="flex gap-2 justify-center mb-5">
          <p className="text-bold text-[#23856D]">${price}</p>
        </div>
        <div>
          <ul className="flex justify-center gap-2">
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
