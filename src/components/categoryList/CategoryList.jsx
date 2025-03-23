import Image from "next/image";
import Link from "next/link";
import styles from "./category.module.css";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Recent Trends</h1>
      <div className={styles.allCates}>
        <div className={styles.category}>
          <Link href={""}>
            <Image src='/familia.png' alt="Family" width={30} height={30} />
            <h3>Familia</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryList;