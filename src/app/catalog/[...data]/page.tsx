export default async function Catalog({ params }: any) {

    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch("https://api.github.com/users/Akihito7");
    const user = await response.json();


    return (
        <>
            <h1>catalog</h1>
            <p>{JSON.stringify(user, null, 2)}</p>

        </>
    )
}