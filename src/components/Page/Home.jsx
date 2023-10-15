import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import PageContent from "../Layout/PageContent";
const Home = () => {
  return (
    <div>
      <Header bgColor={"bg-dark-navy"} justify={"justify-between"} />
      <PageContent />
      <Footer />
    </div>
  );
};
export default Home;
