import { useToken } from "../../Hooks/useToken"
import { Login } from "../../pages/Login";

const RouteRequiresLogin = (props: any) => {
   const userIsLogged = useToken()

   return userIsLogged ? props.component : <Login />
};

export default RouteRequiresLogin;