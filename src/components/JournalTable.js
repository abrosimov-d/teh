export default function JournalTable(props) {
    console.log(props.data)
    return (
        <table className="journal-table">
            <th>РБО</th>
            <th>Дата</th>
            <th>Описание</th>
            {props.data?.map((e) => {return <tr>
                <td>{e.location.title}</td>
                <td>{e.date}</td>
                <td>{e.description}</td>
                </tr>})}
        </table>
    )
}