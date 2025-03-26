import Link from 'next/link';
import styles from './menu.module.css'
import { FaFireAlt } from "react-icons/fa";
import { MenuPosts } from '../menuPosts/MenuPosts';
import { MenuCategories } from '../menuCategory/MenuCategories';

function Menu() {
    return (
        <div className={styles.container}>
            <h2 className={styles.subTitle}>What's up, world?</h2>
            <h1 className={styles.title}>Most Popular<FaFireAlt size={40} color='orange' /></h1>
            <MenuPosts image={false} />
            <h2 className={styles.subTitle}>Discover by category</h2>
            <h1 className={styles.title}> Categories</h1>
            <MenuCategories />
            <h2 className={styles.subTitle}>Chosen by an Editor</h2>
            <h1 className={styles.title}>Editor's Pick</h1>
            <MenuPosts image={true} />

        </div>
    )
}

export default Menu;