import { useContext } from "react";
import { Route, Routes as RoutePages } from "react-router-dom";
import { ScreenTest } from "../Components/ScreenTest";
import { Dashboard } from "../Pages/Dashboard";
import { Home } from "../Pages/Home";
import { UsersContext } from "../Provider/User";

export const Routes = () => {
  const { authenticated } = useContext(UsersContext);
  return (
    <RoutePages>
      <Route exact path="/" element={<Home />} />
      <Route path="/test" element={<ScreenTest />} />
      <Route
        path="/dashboard"
        element={<Dashboard authenticated={authenticated} />}
      />
    </RoutePages>
  );
};
