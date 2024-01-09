export default function LocationBar(props) {
    return (
        <div className="location-bar">
            Location: {props.location}
            <button onClick={props.updateLocation}>update</button>
        </div>
    )
}