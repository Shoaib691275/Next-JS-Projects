import NewsList from "@/components/newsList"
import { getLatestNews } from "@/lib/news"

export default function LatestNews(){
    const latestNews=getLatestNews()
    return(<>
        <h1>Latest News</h1>
        <NewsList news={latestNews} />
    
    </>
    )
}