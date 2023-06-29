import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";

const Main = () => {
  return (
    <div className=" max-w-7xl mx-auto ">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
