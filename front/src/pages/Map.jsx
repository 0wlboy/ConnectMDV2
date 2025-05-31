import {useAuth} from '../context/AuthContext';

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
  </>
)
}

export default Map;