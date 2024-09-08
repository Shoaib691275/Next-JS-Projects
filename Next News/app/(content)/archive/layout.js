export default function ArchiveLayout({archive,latest}){
    return(
        <div id="archive-layout">
            <h1>Archive Page</h1>
            <section id="archive-filter">

            {archive}
            </section>
            <section id="archive-latest">
            {latest}

            </section>
        </div>
    )
}