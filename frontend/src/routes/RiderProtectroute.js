import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

const RiderProtectedRoute = ({ children }) => {
  const { isLoading, isRider } = useSelector((state) => state.rider);
  if (isLoading === true) {
    return <Loader />;
  } else {
    if (!isRider) {
      return <Navigate to={`/rider-private`} replace />;
    }
    return children;
  }
};

export default RiderProtectedRoute;
