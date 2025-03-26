import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/cars.png" alt="Blue Blogs" width={50} height={50} />
                    <h1 className={styles.logoText}>Blue Blogs</h1>
                </div>
                <p className={`${styles.desc} text-justify`}>
                    This is a blog website where you can find the latest trending news,posts and more.
                    We are here to provide you with the latest news, articles, and updates about technology.
                    Highly recommended for all the tech enthusiasts out there.
                    Feel free to explore and share your thoughts with us.
                    <p className='font-bold flex items-center gap-2'><FaRegCopyright /> Copyrights Reserved 2025 | Techs</p>
                </p>

                <div className={styles.social}>
                    <Link href="https://github.com/moosa-codes"><FaGithub style={{ color: 'var(--text)' }} title="Github" size={30} /></Link>
                    <Link href="https://www.linkedin.com/in/moosaharoon"><FaLinkedin style={{ color: 'var(--text)', borderRadius: "10px" }} title="Linked In" size={30} /></Link>
                    <Link href="https://www.facebook.com/moosacodes"><FaFacebook style={{ color: 'var(--text)' }} title="Facebook" size={30} /></Link>
                    <Link href="https://www.instagram.com/moosa_codes"><FaInstagram style={{ color: 'var(--text)' }} title="Instagram" size={30} /></Link>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Home</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Family</Link>
                    <Link href="/">Cars</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Football</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="https://github.com/moosa-codes"><FaGithub style={{ color: 'var(--text)' }} title="Github" size={20} /></Link>
                    <Link href="https://www.linkedin.com/in/moosaharoon"><FaLinkedin style={{ color: 'var(--text)', borderRadius: "10px" }} title="Linked In" size={20} /></Link>
                    <Link href="https://www.facebook.com/moosacodes"><FaFacebook style={{ color: 'var(--text)' }} title="Facebook" size={20} /></Link>
                    <Link href="https://www.instagram.com/moosa_codes"><FaInstagram style={{ color: 'var(--text)' }} title="Instagram" size={20} /></Link>
                </div>
            </div>
        </div>
    );
}