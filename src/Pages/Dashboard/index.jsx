import { Navigate } from "react-router-dom";
import { StudentInformation } from "../../Components/StudentInformation";

export const Dashboard = ({ authenticated }) => {
  if (!authenticated) {
    return <Navigate to={"/"} />;
  }
  return <div>
  <>
  </>
  </div>;
};
