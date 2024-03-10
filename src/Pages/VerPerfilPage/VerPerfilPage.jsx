import InputReadonly from '../../Components/InputReadonly/InputReadonly'
import { useEffect, useState } from 'react'
import Button from '../../Components/Buttons/Button'
import {useUser} from '../../context/user.js' 
import {getUserInfo} from '../../controllers/users.js'


export default function VerPerfilPage(usuario){

    const [data, setData] = useState(null);    
    
    const navigateToPage = () => {
        window.location.href = '/editprofile';
      };

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


    return(
        <div>
        <div>
           <h1>Mi Perfil</h1>
            <InputReadonly placeholder={data?.firstname} type='String'></InputReadonly>
            <InputReadonly placeholder={data?.lastname} type='String'></InputReadonly>
            <InputReadonly placeholder={data?.favoritegame} type='String'></InputReadonly>
            <Button display='Editar Perfil' action={navigateToPage}></Button>
        </div>
        

    </div>
    )


}