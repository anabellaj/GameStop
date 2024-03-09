import styles from './LogInPage.module.css'
import Input from '../../Components/Inputs/Input'
import Button from '../../Components/Buttons/Button'


export default function LogIn (){

    return (
        
        <div className={styles.container}>
    
            <div className={styles.form}>
               <h1>Log In</h1>
                <Input placeholder='E-Mail' type='String'></Input>
                <Input placeholder='Contraseña' type='password'></Input>
                <div className={styles.login}>
                <Button display='Log In'> </Button>
                <a href=""><img src="./GoogleLogo.png"/></a>
                </div>
                <a href="">¿Aún no tienes cuenta? ¡Regístrate!</a>
            </div>
        
            


        </div>

    )

}