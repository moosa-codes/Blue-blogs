import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Pagination from "@/components/pagination/Pagination";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
      <CardList />
      <Menu />
      </div>
      <Pagination />
    </div>
  )
}