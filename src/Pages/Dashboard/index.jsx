import { Navigate } from "react-router-dom";

export const Dashboard = ({ authenticated }) => {
  if (!authenticated) {
    return <Navigate to={"/"} />;
  }

  return <div>
    <p> Dashboard</p>
  </div>;
};
