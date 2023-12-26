import { Redirect } from "react-router-dom";

const ProtectedPage = ({ PageComponent, fromUrl }) => {
  return localStorage.getItem("token") ? (
    <PageComponent />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { referrer: fromUrl },
      }}
    />
  );
};
export default ProtectedPage;
