import Link from "next/link"
import Image from "next/image"
import styles from './menuPost.module.css'

export const MenuPosts = ({ image }) => {
    return (
        <div className={styles.items}>
            <Link href={'/'} className={styles.item}>
                {image && (
                    <div className={styles.imageCont}>
                        <Image
                            src={"/cars.png"}
                            alt='Car'
                            fill
                            className={styles.image}
                        />
                    </div>
                )}
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
                {image && (
                    <div className={styles.imageCont}>
                        <Image
                            src={"/car.png"}
                            alt='Car'
                            fill
                            className={styles.image}
                        />
                    </div>
                )}
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
                {image && (
                    <div className={styles.imageCont}>
                        <Image
                            src={"/cars.png"}
                            alt='Car'
                            fill
                            className={styles.image}
                        />
                    </div>
                )}
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
                {image && (
                    <div className={styles.imageCont}>
                        <Image
                            src={"/car.png"}
                            alt='Car'
                            fill
                            className={styles.image}
                        />
                    </div>
                )}
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
    )
}
