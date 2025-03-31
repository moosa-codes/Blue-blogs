import Image from "next/image";
import Link from "next/link";
import styles from "./category.module.css";
import { FaArrowTrendUp } from "react-icons/fa6";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending<FaArrowTrendUp size={40} color="purple" /></h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link href={"/blog?cat=familia"} className={`${styles.category} ${styles.family}`}>
            <Image
              src='/familia.png'
              alt="Family"
              width={30} className={styles.image}
              height={30} />
            Familia
          </Link>
          <Link href={"/blog?cat=art"} className={`${styles.category} ${styles.art}`}>
            <Image
              src='/art.png'
              alt="Arts"
              width={30}
              height={30}
              className={styles.image}
            />
            Art
          </Link>
          <Link href={"/blog?cat=coding"} className={`${styles.category} ${styles.coding}`}>
            <Image
              src='/coding.png'
              alt="Coding" className={styles.image}
              width={30}
              height={30} />
            Coding
          </Link>
          <Link href={"/blog?cat=sports"} className={`${styles.category} ${styles.football}`}>
            <Image
              src='/football.png'
              alt="Football" className={styles.image}
              width={30}
              height={30} />
            Football
          </Link>
          <Link href={"/blog?cat=cars"} className={`${styles.category} ${styles.cars}`}>
            <Image
              src='/cars.png' className={styles.image}
              alt="Cars"
              width={30}
              height={30} />
            Cars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryList;