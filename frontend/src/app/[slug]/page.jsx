import styles from './readPost.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/Comments'

export default function ReadPost() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Nissan GT-R: A Revolutionary Sports Car</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src="/user.png"
                                alt="moosa_"
                                fill
                                className={styles.userImage}
                            />
                        </div>
                        <div className={styles.userDetails}>
                            <h3 className={styles.username}>moosa_</h3>
                            <p className={styles.date} style={{ color: 'var(--softText)' }}>Posted at : <span>26.03.2025</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/cars.png"
                        alt="Car Image"
                        fill
                        className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            JDM stands for Japanese Domestic Market. It refers to vehicles
                            and automotive parts that are specifically designed and manufactured
                            for the Japanese market. These cars often have unique features,
                            styling, and performance elements tailored to Japanese regulations
                            and consumer preferences.
                        </p>

                        <p>
                            JDM stands for Japanese Domestic Market. It refers to vehicles
                            and automotive parts that are specifically designed and manufactured
                            for the Japanese market. These cars often have unique features,
                            styling, and performance elements tailored to Japanese regulations
                            and consumer preferences.
                        </p>

                        <p>
                            JDM stands for Japanese Domestic Market. It refers to vehicles
                            and automotive parts that are specifically designed and manufactured
                            for the Japanese market. These cars often have unique features,
                            styling, and performance elements tailored to Japanese regulations
                            and consumer preferences.
                        </p>
                    </div>
                    <Comments />
                </div>
                <Menu />
            </div>
        </div>
    )
}