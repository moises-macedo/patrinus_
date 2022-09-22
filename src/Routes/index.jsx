import { useContext } from "react";
import { Route, Routes as RoutePages } from "react-router-dom";
import { DashboardStudentsCourses } from "../Components/DashboardStudentsCourses";
import { ScreenTest } from "../Components/ScreenTest";
import { Dashboard } from "../Pages/Dashboard";
import { DashboardPartnerSchools } from "../Pages/DashboardPartnerSchools";
import { DashboardProfileGodfather } from "../Pages/DashboardProfileGodfather";
import { DashboardProfileGodson } from "../Pages/DashboardProfileGodson";
import { DashboardStudentGodparents } from "../Components/DashboardStudentGodparents";
import { Home } from "../Pages/Home";
import { UsersContext } from "../Provider/User";
import { FavoriteCourses } from "../Components/DashboardStudent/FavoriteCourses";
import { DashboardSponsored } from "../Components/DashboardSponsored";
import { ComponentPartnerSchools } from "../Components/ComponentPartnerSchools";

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

      <Route path="/DashboardStudentsCourses" element={<DashboardStudentsCourses />} />
      <Route path="/DashboardStudentGodparents" element={<DashboardStudentGodparents />} />
      <Route path="/DashboardStudentGodparents" element={<DashboardStudentGodparents />} />
      <Route path="/FavoriteCourses" element={<FavoriteCourses />} />
      <Route path="/DashboardSponsored" element={<DashboardSponsored />} />
      <Route path="/ComponentPartnerSchools" element={<ComponentPartnerSchools />} />

    </RoutePages>
  );
};
