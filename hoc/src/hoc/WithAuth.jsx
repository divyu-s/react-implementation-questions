import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const WithAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(true);

    useEffect(() => {
      console.log(isAuth);
      if (!isAuth) {
        navigate("/");
      }
    }, [isAuth, navigate]);

    return isAuth ? <WrappedComponent {...props} /> : <div>null</div>;
  };

  return WithAuthComponent;
};

export default WithAuth;
