import { DUMMY_NEWS } from "@/dummy-data"
import Link from "next/link"

export default function ImagePage({params}){
    const slug=params.newsId
    const newsDetail=DUMMY_NEWS.find(item=>item.slug==slug)
    if(!newsDetail){
        notFound()
    }
    return(

        <div className="fullscreen-image">
            <img src={`/images/news/${newsDetail.image}`} alt={newsDetail.title} />
        </div>
    )
}