export default function MeuComponente() {
    const users = [
        {
            "user": "nome",
            "senha": 123
        },
        {
            "user": "nome",
            "senha": 123
        },
        {
            "user": "nome",
            "senha": 123
        },
        {
            "user": "nome",
            "senha": 123
        }
    ]

    return (
        <>
            {users.map((item) => (
                <div>
                    {item.user} - {item.senha}
                </div>
            ))}
        </>
    )

}