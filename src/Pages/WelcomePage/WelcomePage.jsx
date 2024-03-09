import styles from './WelcomePage.module.css'
import Button from '../../Components/Buttons/Button'

export default function WelcomePage(){
    return (
        <div className={styles.page}>
            <h1>¡Bienvenido a GameStop!</h1>
            
            <div className={styles.buttonsCont}>
            <Button display={'Log In'}></Button>
            <Button display={'Sign Up'}></Button>

            </div>
               <img src='../control.png'></img>

        </div>

    )


}