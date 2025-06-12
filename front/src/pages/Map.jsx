import {useAuth} from '../components/context/AuthContext';
import  SideBar  from './../components/ui/SideBar';

const Map = () => {
const { isAuthenticated, userRole } = useAuth();
return(
  <>
  <h1>Estas en el map</h1>
  {isAuthenticated ? (
    <p>Usuario autenticado con rol: {userRole}</p>
  ) : (
    <p>No estás autenticado</p>
  )}
  <h1>este es otro texto</h1>
  <SideBar></SideBar>
  </>
)

}

export default Map;