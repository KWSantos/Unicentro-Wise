import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const register = (email: string, password: string) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        return user
    }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
}

const login = (email: string, password: string) => {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        return user
    }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
}

const logout = () => {

    signOut(auth).then(() => {
        console.log("Deslogado com sucesso")
    }).catch((error) => {
        console.log("Erro ao deslogar")
    })
}

export default { register, login, logout }