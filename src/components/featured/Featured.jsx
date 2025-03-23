import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, how You doing?!</b><p> Discover unique saturations and creative ideas.</p>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/car.png" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Ever heard ,about JDM cars???</h1>
                    <p className={styles.postDesc}>
                        JDM stands for Japanese Domestic Market. It refers to vehicles and
                        automotive parts that are specifically designed and
                        manufactured for the Japanese market. These cars often have unique features,
                        styling, and performance elements tailored to Japanese regulations and
                        consumer preferences.
                    </p>
                    <button className={styles.button}>
                        <span className={styles.borderAni}></span>
                        Read More
                        <FaLongArrowAltRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
