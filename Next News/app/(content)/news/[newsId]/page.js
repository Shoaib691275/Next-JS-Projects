import { DUMMY_NEWS } from "@/dummy-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
export default function NewsDetails({ params }) {
  const news = params.newsId;
  const newsDetail = DUMMY_NEWS.find((item) => item.slug == news);
  if (!newsDetail) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsDetail.slug}/image`}>
          <Image
            src={`/images/news/${newsDetail.image}`}
            height={150}
            width={400}
          />
        </Link>

        <h1>{newsDetail.title}</h1>
        <time dateTime={newsDetail.time}>{newsDetail.date}</time>
      </header>
      <p>{newsDetail.content}</p>
    </article>
  );
}
