import Input from '../../Components/Inputs/Input'
import InputReadonly from '../../Components/InputReadonly/InputReadonly'
import ButtonInverse from '../../Components/Buttons/ButtonInverse'


export default function EditPerfilPage(usuario){

    return(<div>

        <div >
           <h1>Editar Perfil</h1>
            <Input placeholder={usuario.name} type='String'></Input>
            <Input placeholder={usuario.lName} type='String'></Input>
            <InputReadonly placeholder={usuario.favGame} type='String'></InputReadonly>
            <ButtonInverse display='Editar Perfil'></ButtonInverse>
        </div>
    </div>)
}
