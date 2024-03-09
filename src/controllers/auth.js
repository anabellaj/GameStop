import { auth, googleProvider } from '../firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export async function loginWithEmailAndPassword(email, password) {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        return user;
    } catch (error) {
        console.error('Error al iniciar sesión con correo electrónico y contraseña:', error.message);
        return null;
    }
}

export async function loginWithGoogle() {
    try {
        const { user } = await signInWithPopup(auth, googleProvider);
        console.log(user);
        return user;
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error.message);
        return null;
    }
}

export async function registerWithEmailAndPassword(email, password) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        return user;
    } catch (error) {
        console.error('Error al registrar con correo electrónico y contraseña:', error.message);
        return null;
    }
}

export async function logout() {
    try {
        await auth.signOut();
        console.log('Cierre de sesión exitoso');
    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
    }
}

