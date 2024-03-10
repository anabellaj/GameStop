import Input from "../../Components/Inputs/Input";
import InputReadonly from "../../Components/InputReadonly/InputReadonly";
import ButtonInverse from "../../Components/Buttons/ButtonInverse";
import { useUser } from "../../context/user.js";
import { getUserInfo } from "../../controllers/users.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPerfilPage() {
  const [data, setData] = useState(null);
  const user = useUser();
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/profile", { replace: true });
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const info = await getUserInfo(user?.uid);
        setData(info);
      } catch (error) {
        console.log("Error retrieving user information:", error);
      }
    };

    getInfo();
  }, [user?.uid, navigate]);

  return (
    <div>
      <div>
        <h1>Editar Perfil</h1>
        <Input placeholder={data?.firstname} type="String"></Input>
        <Input placeholder={data?.lastname} type="String"></Input>
        <InputReadonly
          placeholder={data?.favoritename}
          type="String"
        ></InputReadonly>
        <ButtonInverse
          display="Guardar Cambios"
          action={navigateToPage}
        ></ButtonInverse>
      </div>
    </div>
  );
}
