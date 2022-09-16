import { Route, Routes as RoutePages } from "react-router-dom";
import { ScreenTest } from "../Components/ScreenTest";
import { Home } from "../Pages/Home";

export const Routes = () => {
  return (
    <RoutePages>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/test" element={<ScreenTest />} />
    </RoutePages>
  );
};
