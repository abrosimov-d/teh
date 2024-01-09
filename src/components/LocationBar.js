export default function LocationBar(props) {
    return (
        <div className="location-bar">
            Location: {props.location.lng} {props.location.lat}
        </div>
    )
}