import InputReadonly from "../../Components/InputReadonly/InputReadonly";
import { useEffect, useState } from "react";
import Button from "../../Components/Buttons/Button";
import { useUser } from "../../context/user.js";
import { getUserInfo } from "../../controllers/users.js";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonInverse from "../../Components/Buttons/ButtonInverse";
import { logout } from "../../controllers/auth.js";


export default function VerPerfilPage() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const user = useUser();
  const navigate = useNavigate();

  const navigateToPage = () => {
   navigate("/editprofile", { replace: true }) ;
  };

  const cerrar =  async () => {
    await logout();
    navigate ('/', {replace: true});
  }

  useEffect(() => {

    const getInfo = async () => {
      try {
        const info = await getUserInfo(user?.uid);

        setData(info);
        console.log(info);
      } catch (error) {
        console.log("Error retrieving user information:", error);
      }
    };

    getInfo();

  }, [location.pathname, user?.uid, navigate]);

  

  return (
    <div>
      <div>
        <h1>Mi Perfil</h1>
        <InputReadonly
          placeholder={data?.firstname}
          label="Nombre"
          type="String"
        ></InputReadonly>
        <InputReadonly
          label="Apellido"
          placeholder={data?.lastname}
          type="String"
        ></InputReadonly>
        <InputReadonly
          label="Videojuego Favorito"
          placeholder={data?.favoritegame}
          type="String"
        ></InputReadonly>
        <Button display="Editar Perfil" action={navigateToPage}></Button>
        <ButtonInverse display='Log Out' action={cerrar}></ButtonInverse>
      </div>
    </div>
  );
}
