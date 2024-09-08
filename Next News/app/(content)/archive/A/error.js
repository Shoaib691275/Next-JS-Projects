'use client';
export default function ErrorPage({error}){
    return(
        <>
        <h1>An Error Occurred</h1>
        <p>Error: {error.message}</p>
        </>
    )
}