'use client'
import { login } from '@/libs/actions/auth';
import styles from './login.module.css'
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={`${styles.loginOption} flex items-center gap-2`} onClick={() => login("google")}>
                    <FaGoogle />Sign in with Google
                </div>
                <div className={`${styles.loginOption} flex items-center gap-2`} onClick={() => login("github")}>
                    <FaGithub />  Sign in with Github
                </div>
                <div className={`${styles.loginOption} flex items-center gap-2`}>
                    <FaFacebook />   Sign in with Facebook
                </div>
            </div>
        </div>
    )
}

export default Login;