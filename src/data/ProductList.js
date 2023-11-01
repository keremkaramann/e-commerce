const productListDataWithIds = [
  {
    url: "/src/assets/productListPage/1.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/2.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/3.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/4.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/5.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/6.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/7.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/8.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/1.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/2.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/3.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/4.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/5.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/6.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/7.png",
    content: "Graphic design",
    department: "English Department",
  },
  {
    url: "/src/assets/productListPage/8.png",
    content: "Graphic design",
    department: "English Department",
  },
];
const productListData = productListDataWithIds.map((item, index) => ({
  id: index + 1,
  ...item,
}));
export default productListData;
