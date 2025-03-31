import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import styles from "./navbar.module.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Link href="https://github.com/moosa-codes"><FaGithub style={{ color: 'var(--text)' }} title="Github" size={30} /></Link>
                <Link href="https://www.linkedin.com/in/moosaharoon"><FaLinkedin style={{ color: 'var(--text)', borderRadius: "10px" }} title="Linked In" size={30} /></Link>
                <Link href="https://www.facebook.com/moosacodes"><FaFacebook style={{ color: 'var(--text)' }} title="Facebook" size={30} /></Link>
                <Link href="https://www.instagram.com/moosa_codes"><FaInstagram style={{ color: 'var(--text)' }} title="Instagram" size={30} /></Link>
            </div>
            <div className={styles.logo}>Blue Blogs</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}><span className={styles.borderAni}></span>Home</Link>
                <Link href="/" className={styles.link}><span className={styles.borderAni}></span>About</Link>
                <Link href="/" className={styles.link}><span className={styles.borderAni}></span>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    )
}
