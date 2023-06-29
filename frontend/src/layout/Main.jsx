import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;