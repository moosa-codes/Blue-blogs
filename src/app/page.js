import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Pagination from "@/components/pagination/Pagination";


export default function Home() {
  return (
    <div>
      <Featured />
      <Pagination />
      <Menu />
      <CardList />
      <CategoryList />
    </div>
  )
}