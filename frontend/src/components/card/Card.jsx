import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';
import { FaLongArrowAltRight } from "react-icons/fa";

function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/cars.png" alt="Cars" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>24.03.2025-</span>
                    <span className={styles.category}>Cars</span>
                </div>
                <Link href={'/'}><h2 className={`font-bold text-3xl`}>Nissan GT-R: A Revolutionary Sports Car</h2></Link>
                <p className={styles.desc}>
                    The GTR (Gran Turismo Racing) series, primarily known for
                    the iconic Nissan GT-R, is a legendary lineup of high-performance
                    sports cars recognized for their speed, precision, and engineering
                    excellence. Often referred to as "Godzilla" in the car community,
                    the GT-R is famous for dominating both the track and the streets.
                </p>
                <button className={styles.button}>
                    <span className={styles.borderAni}></span>
                    Read More
                    <FaLongArrowAltRight />
                </button>
            </div>
        </div>
    )
}

export default Card;