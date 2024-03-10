import Input from "../../Components/Inputs/Input";
import InputReadonly from "../../Components/InputReadonly/InputReadonly";
import ButtonInverse from "../../Components/Buttons/ButtonInverse";
import { useUser } from "../../context/user";
import { getUserInfo, updateUserProfile } from "../../controllers/users.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPerfilPage() {
  const [data, setData] = useState({});
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    const getInfo = async () => {
      try {
        const info = await getUserInfo(user.uid);
        setData(info);
        setFirstname(info?.firstname || "");
        setLastname(info?.lastname || "");
      } catch (error) {
        setError(error);
      }
    };

    getInfo();
  }, [user]);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const saveInfo = async () => {
    if (!user || !firstname || !lastname || saving || isLoading) return;

    setSaving(true);
    try {
      await updateUserProfile(user.uid, firstname, lastname, data?.favoritegame);
      navigate("/profile", { replace: true });
    } catch (error) {
      setError(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Editar Perfil</h1>
        <Input
          placeholder="Nombre"
          type="text"
          value={firstname}
          onChange={handleFirstname}
        />
        <Input
          placeholder="Apellido"
          type="text"
          value={lastname}
          onChange={handleLastname}
        />
        <InputReadonly
          placeholder={data?.favoritegame}
          type="text"
        />
        <ButtonInverse
          display={saving ? "Guardando..." : "Guardar Cambios"}
          action={saveInfo}
        />
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
}
