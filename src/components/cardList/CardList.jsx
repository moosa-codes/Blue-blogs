import styles from './cardList.module.css'
import { FcBullish } from "react-icons/fc";
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';


function CardList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Trending Posts<FcBullish size={40}/></h1>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList;