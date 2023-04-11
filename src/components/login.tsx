import {useSession, signIn, signOut} from "next-auth/react"

export default function Login() {
    const {data: session} = useSession()
    if (session) {
        return <>
            <button onClick={() => {
                fetch('/api/restricted')
                    .then(res => res.json())
                    .then(data => alert(JSON.stringify(data)))
            }}>Call /api/restricted
            </button>
            <button onClick={() => {
                fetch('/api/readsession')
                    .then(res => res.json())
                    .then(data => alert(JSON.stringify(data)))
            }}>Call /api/readsession
            </button>
            <p><b> Signed in infor: </b>{JSON.stringify(session)} </p>
            <br/>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return (
        <>
            <button onClick={() => {
                fetch('/api/restricted')
                    .then(res => res.json())
                    .then(data => alert(JSON.stringify(data)))
            }}>Call /api/restricted
            </button>
            <button onClick={() => {
                fetch('/api/readsession')
                    .then(res => res.json())
                    .then(data => alert(JSON.stringify(data)))
            }}>Call /api/readsession
            </button>
            <h3>Not signed in</h3>
            <br/>
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )

}