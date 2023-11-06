import { useState } from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
const Pagination = () => {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    className:
      active === index
        ? "bg-primary-blue text-white px-6 py-9 border-[#BDBDBD]"
        : "px-6 py-9 border-[#BDBDBD] text-primary-blue",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 3) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex justify-center text-center mb-12">
      <ButtonGroup variant="outlined" className="shadow-lg rounded ">
        <IconButton
          onClick={prev}
          className="px-10 py-9 border-[#BDBDBD] text-muted-color bg-[#F3F3F3] "
        >
          <p>First</p>
        </IconButton>
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton
          onClick={next}
          className="px-10 py-9 text-center border-[#BDBDBD] text-primary-blue"
        >
          <p> Next</p>
        </IconButton>
      </ButtonGroup>
    </div>
  );
};
export default Pagination;
