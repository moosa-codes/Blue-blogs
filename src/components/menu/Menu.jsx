import Link from 'next/link';
import styles from './menu.module.css'
import Image from 'next/image';
import { FaFireAlt } from "react-icons/fa";

function Menu() {
    return (
        <div className={styles.container}>
            <h2 className={styles.subTitle}>What's up, world?</h2>
            <h1 className={styles.title}>Most Popular<FaFireAlt size={40} color='orange' /></h1>
            <div className={styles.items}>
                <Link href={'/'} className={styles.item}>
                    <div className={styles.textCont}>
                        <span className={`${styles.category} ${styles.car}`} >Car</span>
                        <h4 className={styles.postTitle}>
                            The GTR (Gran Turismo Racing) series, primarily known for
                            the iconic Nissan GT-R.
                        </h4>
                        <div className={styles.details}>
                            <span>John Doe</span>
                            <span> -25.03.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href={'/'} className={styles.item}>

                    <div className={styles.textCont}>
                        <span className={`${styles.category} ${styles.car}`} >Car</span>
                        <h4 className={styles.postTitle}>
                            The GTR (Gran Turismo Racing) series, primarily known for
                            the iconic Nissan GT-R.
                        </h4>
                        <div className={styles.details}>
                            <span>John Doe</span>
                            <span> -25.03.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href={'/'} className={styles.item}>
                    <div className={styles.textCont}>
                        <span className={`${styles.category} ${styles.car}`} >Car</span>
                        <h4 className={styles.postTitle}>
                            The GTR (Gran Turismo Racing) series, primarily known for
                            the iconic Nissan GT-R.
                        </h4>
                        <div className={styles.details}>
                            <span>John Doe</span>
                            <span> -25.03.2025</span>
                        </div>
                    </div>
                </Link>
                <h2 className={styles.subTitle}>Chosen by an Editor</h2>
                <h1 className={styles.title}>Editor's Pink<FaFireAlt size={40} color='orange' /></h1>
                <Link href={'/'} className={styles.item}>
                    <div className={styles.imageCont}>
                        <Image
                            src={"/car.png"}
                            alt='Car'
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textCont}>
                        <span className={`${styles.category} ${styles.car}`} >Car</span>
                        <h4 className={styles.postTitle}>
                            The GTR (Gran Turismo Racing) series, primarily known for
                            the iconic Nissan GT-R.
                        </h4>
                        <div className={styles.details}>
                            <span>John Doe</span>
                            <span> -25.03.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href={'/'} className={styles.item}>
                    <div className={styles.imageCont}>
                        <Image
                            src={"/car.png"}
                            alt='Car'
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textCont}>
                        <span className={`${styles.category} ${styles.car}`} >Car</span>
                        <h4 className={styles.postTitle}>
                            The GTR (Gran Turismo Racing) series, primarily known for
                            the iconic Nissan GT-R.
                        </h4>
                        <div className={styles.details}>
                            <span>John Doe</span>
                            <span> -25.03.2025</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Menu;