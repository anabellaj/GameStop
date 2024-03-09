import InputReadonly from '../../Components/InputReadonly/InputReadonly'
import Button from '../../Components/Buttons/Button'

export default function VerPerfilPage(usuario){

    return(
        <div>
        <div>
           <h1>Mi Perfil</h1>
            <InputReadonly placeholder={usuario.name} type='String'></InputReadonly>
            <InputReadonly placeholder={usuario.lName} type='String'></InputReadonly>
            <InputReadonly placeholder={usuario.favGame} type='String'></InputReadonly>
            <Button display='Editar Perfil'></Button>
        </div>
        


    </div>
    )


}