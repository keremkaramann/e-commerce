import React, { useState } from "react";

const ProductCard = ({ url, content, department, price }) => {
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
      <img src={url} alt="product-img" />
      <div className="text-center mt-5 mb-20">
        <p className="text-dark-navy font-bold">{content} </p>
        <p className="text-secondary-text font-bold text-sm mt-5 mb-5">
          {department}
        </p>
        <div className="flex gap-2 justify-center mb-5">
          <p className="text-[#BDBDBD] text-bold">$16.48</p>
          <p className="text-bold text-[#23856D]">$6.48</p>
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
