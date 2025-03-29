import Link from 'next/link';
import styles from './menuCates.module.css'

export const MenuCategories = () => {
    return (
        <div className={styles.categories}>
            <Link href={'/blog?cat=cars'} className={`${styles.categoryItem} ${styles.cars}`}>Cars</Link>
            <Link href={'/blog?cat=cars'} className={`${styles.categoryItem} ${styles.family}`}>Family</Link>
            <Link href={'/blog?cat=cars'} className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link>
            <Link href={'/blog?cat=cars'} className={`${styles.categoryItem} ${styles.football}`}>Football</Link>
            <Link href={'/blog?cat=cars'} className={`${styles.categoryItem} ${styles.art}`}>Art</Link>
        </div>
    )
}
