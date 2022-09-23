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
  const { authenticated,user } = useContext(UsersContext);

  return (
    <RoutePages>
      <Route exact path="/" element={<Home authenticated={authenticated} />} />

      <Route path="/test" element={<ScreenTest />} />

      {/* <Route
        path="/dashboard"
        element={<Dashboard authenticated={authenticated} />}
      /> */}

      <Route
        path="/dashboardgodsonprofile"
        element={<DashboardProfileGodson />}
      />
      <Route path="/profilegodfather" element={<DashboardProfileGodfather />} />

      <Route path="/dashboardstudentscourses" element={<DashboardStudentsCourses />} />
      <Route path="/dashboardstudentgodparents" element={<DashboardStudentGodparents />} />
      {/* <Route path="/dashboardstudentgodparents" element={<DashboardStudentGodparents />} /> */}
      <Route path="/favoritecourses" element={<FavoriteCourses />} />
      <Route path="/dashboardsponsored" element={<DashboardSponsored />} />
      <Route path="/componentpartnerschools" element={<ComponentPartnerSchools />} />

    </RoutePages>
  );
};
