export default function JournalTable(props) {
    console.log(props.data)
    return (
        <table>
            <th>location</th>
            <th>date</th>
            <th>description</th>
            {props.data.map((e) => {return <tr>
                <td>{e.location}</td>
                <td>{e.date}</td>
                <td>{e.description}</td>
                </tr>})}
        </table>
    )
}