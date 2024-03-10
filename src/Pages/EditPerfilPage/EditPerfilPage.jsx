import Input from '../../Components/Inputs/Input'
import InputReadonly from '../../Components/InputReadonly/InputReadonly'
import ButtonInverse from '../../Components/Buttons/ButtonInverse'
import {useUser} from '../../context/user.js' 
import {getUserInfo} from '../../controllers/users.js'
import { useEffect, useState } from 'react'


export default function EditPerfilPage(usuario){
    const navigateToPage = () => {
        window.location.href = '/profile';
      };
    
      const [data, setData] = useState(null);    

      const user = useUser();
      const uid = user?.user?.uid;
      
  
      const getInfo = async () => {
          try {
              const info = await getUserInfo(uid);
             
              setData(info);
          } catch (error) {
            console.log("Error retrieving user information:", error);
          }
        };
      
      getInfo();


    return(<div>

        <div >
           <h1>Editar Perfil</h1>
            <Input placeholder={data?.firstname} type='String'></Input>
            <Input placeholder={data?.lastname} type='String'></Input>
            <InputReadonly placeholder={data?.favoritename} type='String'></InputReadonly>
            <ButtonInverse display='Guardar Cambios' action={navigateToPage}></ButtonInverse>
        </div>
    </div>)
}
