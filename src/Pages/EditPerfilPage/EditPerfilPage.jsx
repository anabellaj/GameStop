import Input from "../../Components/Inputs/Input";
import InputReadonly from "../../Components/InputReadonly/InputReadonly";
import ButtonInverse from "../../Components/Buttons/ButtonInverse";
import { useUser } from "../../context/user";
import { getUserInfo, updateUserProfile } from "../../controllers/users.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPerfilPage() {
  const [data, setData] = useState({});
  const user = useUser();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const navigateToPage = () => {
    navigate("/profile", { replace: true });
  };


  const saveInfo = () => {
    const update = async () => {
      try {
        await updateUserProfile(user?.uid, firstname, lastname, data?.favoritegame);
      } catch (error) {
        console.log("Error retrieving user information:", error);
      }
    }
    update();

    navigateToPage();
  };

  useEffect(() => {
    if (!user)return;
    const getInfo = async () => {
      try {
        const info = await getUserInfo(user?.uid);
        setData(info);
        setFirstname(info?.firstname);
        setLastname(info?.lastname);
      } catch (error) {
        console.log("Error retrieving user information:", error);
      }
    };

    getInfo();
  }, [user, user?.uid, navigate]);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Editar Perfil</h1>
        <Input placeholder={data?.firstname} type="String" value={firstname} onChange={handleFirstname}></Input>
        <Input placeholder={data?.lastname} type="String" value={lastname} onChange={handleLastname}></Input>
        <InputReadonly
          placeholder={data?.favoritegame}
          type="String"
        ></InputReadonly>
        <ButtonInverse
          display="Guardar Cambios"
          action={saveInfo}
        ></ButtonInverse>
      </div>
    </div>
  );
}
