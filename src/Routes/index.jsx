import { useContext } from "react";
import { Route, Routes as RoutePages } from "react-router-dom";
import { ScreenTest } from "../Components/ScreenTest";
import { Dashboard } from "../Pages/Dashboard";
import { DashboardProfileGodfather } from "../Pages/DashboardProfileGodfather";
import { DashboardProfileGodson } from "../Pages/DashboardProfileGodson";
import { Home } from "../Pages/Home";
import { UsersContext } from "../Provider/User";

export const Routes = () => {
  const { authenticated } = useContext(UsersContext);
  return (
    <RoutePages>
      <Route exact path="/" element={<Home authenticated={authenticated} />} />
      <Route path="/test" element={<ScreenTest />} />
      <Route
        path="/dashboard"
        element={<Dashboard authenticated={authenticated} />}
      />
      <Route
        path="/dashboardgodsonprofile"
        element={<DashboardProfileGodson />}
      />
      <Route path="/profileGodfather" element={<DashboardProfileGodfather />} />
    </RoutePages>
  );
};
