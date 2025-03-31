"use client"
import { useState } from 'react';
import styles from './writeBlog.module.css';
import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";

const WriteBlog = () => {

    const [openOptions, setOpenOptions] = useState(false);

    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' />
            <textarea className={styles.bdesc} placeholder='write your blog...'></textarea>
            <div className={styles.box}>
                <button className={styles.button} onClick={() => setOpenOptions(!openOptions)}>
                    <CiCirclePlus size={30} />
                </button>
                {openOptions && (
                    <div className={styles.options}>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                        <button className={styles.option}><CiImageOn size={25} /></button>
                        <button className={styles.option}><IoMdDownload size={25} /></button>
                        <button className={styles.option}><MdOndemandVideo size={25} /></button>
                    </div>
                )}


            </div>
        </div>
    )
}

export default WriteBlog
