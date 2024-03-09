import styles from './WelcomePage.module.css'
import Button from '../../Components/Buttons/Button'
import { useNavigate } from 'react-router-dom';

export default function WelcomePage(){

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <div className={styles.page}>
            <h1>¡Bienvenido a GameStop!</h1>
            
            <div className={styles.buttonsCont}>
            <Button display={'Log In'} action={handleLoginClick}></Button>
            <Button display={'Sign Up'} action={handleSignupClick}></Button>

            </div>
               <img src='../control.png'></img>

        </div>

    )


}