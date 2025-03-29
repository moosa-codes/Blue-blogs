// "use client"
// import { ThemeContext } from "@/context/Theme-Context";
// import Image from "next/image";
// import { useContext } from "react";

// function ThemeToggle() {

//     const { theme, toggle } = useContext(ThemeContext);

//     return (
//         <div
//             onClick={toggle}
//             className="flex items-center  justify-between w-11 border rounded-4xl relative "
//             style={
//                 theme === "dark" ? { backgroundColor: "#212121" } : { backgroundColor: "#212122" }
//             }>
//             <Image src={"/darkmode.png"} alt="Turn On Dark Mode" width={16} height={16} />
//             {/* ball */}
//             <div className="rounded-full bg-[#212121] w-4.5 h-4.5 absolute left-0"
//                 style={{
//                     transform: theme === "dark" ? "translateX(23px)" : "translateX(0)",
//                     background: theme === "dark" ? "white" : "white",
//                     border: theme !== "dark" ? "border:1px solid #212121" : "none"
//                 }}
//             ></div>
//             <Image src={"/light.png"} alt="Turn On Light Mode" width={16} height={16} />
//         </div >
//     )
// }

// export default ThemeToggle;


"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme-Context";

const ThemeToggle = () => {
    const { toggle, theme } = useContext(ThemeContext);

    return (
        <div
            className={styles.container}
            onClick={toggle}
            style={
                theme === "dark" ? { backgroundColor: "#0E1C27" } : { backgroundColor: "white" }
            }
        >
            <Image src="/darkmode.png" alt="" width={14} height={14} />
            <div
                className={styles.ball}
                style={
                    theme === "dark"
                        ? { left: 1, background: "white" }
                        : { right: 1, background: "#0E1C27" }
                }
            ></div>
            <Image src="/light.png" alt="Turn on light mode" width={14} height={14} />
        </div>
    );
};

export default ThemeToggle;
