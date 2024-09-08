import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-data";
import Image from "next/image";
export default function NewsList({news}){
    return(
        <ul className="news-list">
        {news.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/news/${item.slug}`}>
                <Image src={`/images/news/${item.image}`} height={300} width={300} alt={item.slug} />
              {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    )
}