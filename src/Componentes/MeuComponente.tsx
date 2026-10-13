export default function MeuComponente() {
    var users = [
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