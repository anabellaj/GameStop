import styles from './WelcomePage.module.css'
import Button from '../../Components/Buttons/Button'

export default function WelcomePage(){
    return (
        <div className={styles.page}>
            <div>
            <img src='./GameStopLogo.png'></img>
            <h1>¡Bienvenido a GameStop!</h1>
            </div>
            <div className={styles.buttonsCont}>
            <Button display={'Log In'}></Button>
            <Button display={'Sign Up'}></Button>

            </div>
        </div>

    )


}