import styles from './SignUpPage.module.css'
import Input from '../../Components/Inputs/Input'
import Button from '../../Components/Buttons/Button'


export default function LogIn (){

    return (
        
        <div className={styles.container}>
            <div className={styles.form}>
               <h1>Sign Up</h1>
                <Input placeholder='Username' type='String'></Input>
                <Input placeholder='E-Mail' type='String'></Input>
                <Input placeholder='Contraseña' type='String'></Input>
                <Input placeholder='Confirmar Contraseña' type='String'></Input>
                <div className={styles.signup}>
                <Button display='Sign Up'> </Button>
               
                <a href=""><img src="./GoogleLogo.png"/></a>
                </div>
                <a href="">¿Ya tienes una cuenta? ¡Ingresa aquí!</a>
            </div>
            


        </div>

    )

}