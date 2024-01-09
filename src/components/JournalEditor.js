export default function JournalEditor(props) {
    return (
    <div className="journal-editor">
        <h2 className="editor-date">{props.date}</h2>
        <select className="editor-rest" value={props.locationTitle}>
            {props.rests.map((e) => {
                return <option>{e}</option>
            })}
        </select>
        <textarea rows="5" className="editor-input" onChange={props.onChange} value={props.journalDescription}></textarea>
        <button className="editor-ok" onClick={props.onAddClick}>+</button>
    </div>
    )
}