'use client'

import Link from "next/link";
import { useState } from "react";
import styles from './authLinks.module.css'
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoCreateSharp } from "react-icons/io5";

const AuthLinks = () => {
    const [open, setOpen] = useState(false);

    const status = "LoggedIn";

    return (
        <>
            {status === "notLoggedIn" ? (
                <Link href="/login" className={styles.link}>
                    Login <CiLogin />
                </Link>
            ) : (
                <>
                    <Link href="/writeBlog" className="flex items-center gap-1.5">
                        Write <IoCreateSharp />
                    </Link>
                    <span className="flex gap-2 items-center cursor-pointer">
                        Logout <IoIosLogOut />
                    </span>
                </>
            )}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "notLoggedIn" ? (
                        <Link href="/login" className="flex items-center">
                            Login <CiLogin />
                        </Link>
                    ) : (
                        <>
                            <Link href="/writeBlog">Write</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthLinks;