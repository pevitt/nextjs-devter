import Link from 'next/link'
export default function Timeline({ userName }){
    return (
    <>
        <h1>This is the timeline {userName}</h1>
        <Link href='/'>Go Home</Link>
    </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('/api/hello')
        .then(res => res.json())
        .then(response => {
            console.log(response);
            const {userName} = response
            return {userName}
        })
}