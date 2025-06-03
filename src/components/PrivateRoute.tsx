import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

interface PrivateRouteProps {
  redirectPath?: string;
  children?: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  redirectPath = "/login",
  children,
}) => {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export default PrivateRoute;
