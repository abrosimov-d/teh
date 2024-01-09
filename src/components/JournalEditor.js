export default function JournalEditor(props) {
    return (
    <div className="journal-editor">
        <div className="editor-date">{props.date}</div>
        <input className="editor-input" value="hello world  "></input>
        <button className="editor-ok" onClick={props.onAddClick}>+</button>
    </div>
    )
}