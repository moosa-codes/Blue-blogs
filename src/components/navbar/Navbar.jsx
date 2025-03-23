import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/insta.png" alt="Instagram" width={24} height={24} />
                <Image src="/fb.png" alt="Facebook" width={24} height={24} />
                <Image src="/github.png" alt="Github" width={24} height={24} />
                <Image src="/linkedin.png" alt="linkedIn" width={24} height={24} />
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
