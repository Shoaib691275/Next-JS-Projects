'use client';
import { DUMMY_NEWS } from "@/dummy-data"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ImagePage({params}){
    const router=useRouter()
    const slug=params.newsId
    const newsDetail=DUMMY_NEWS.find(item=>item.slug==slug)
    if(!newsDetail){
        notFound()
    }
    return(
        <>
        
        <div className="modal-backdrop" onClick={router.back}/>
        <dialog className="modal" open>
        <div className="fullscreen-image">
            <img src={`/images/news/${newsDetail.image}`} alt={newsDetail.title} />
        </div>

        </dialog>
        </>
    )
}