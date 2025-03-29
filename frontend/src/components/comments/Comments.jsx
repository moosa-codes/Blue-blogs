import styles from './comments.module.css'
import { LiaComments } from "react-icons/lia";
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {

    const status = "notLoggedIn";
    return (
        <div className={styles.container}>
            <h1
                className='flex items-center gap-3 text-4xl'
                style={{ color: "var(--softText)" }}>
                <LiaComments size={60} />
                Comments
            </h1>
            {status !== "loggedIn" ? (
                <div className={styles.element}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.textArea}
                    />
                    <button className={styles.button} >
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.allComments}>
                <div className={styles.comment} >
                    <div className={styles.user}>
                        <Image
                            src={'/user.png'}
                            alt="moosa_"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>moosa_</span>
                            <span className={styles.date}>25.03.2025</span>
                        </div>
                    </div>
                    <p className={styles.desc}>I loved that blog and my fav car is
                        distincI loved that blog and
                        I loved that blog and my fav car is distinc
                        I loved that blog and my fav car is distinc my fav car is distincs.</p>
                </div>
                <div className={styles.comment} >
                    <div className={styles.user}>
                        <Image
                            src={'/user.png'}
                            alt="moosa_"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>moosa_</span>
                            <span className={styles.date}>25.03.2025</span>
                        </div>
                    </div>
                    <p className={styles.desc}>I loved that blog and my fav car is
                        distincI loved that blog and
                        I loved that blog and my fav car is distinc
                        I loved that blog and my fav car is distinc my fav car is distincs.</p>
                </div>
                <div className={styles.comment} >
                    <div className={styles.user}>
                        <Image
                            src={'/user.png'}
                            alt="moosa_"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>moosa_</span>
                            <span className={styles.date}>25.03.2025</span>
                        </div>
                    </div>
                    <p className={styles.desc}>I loved that blog and my fav car is
                        distincI loved that blog and
                        I loved that blog and my fav car is distinc
                        I loved that blog and my fav car is distinc my fav car is distincs.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Comments;