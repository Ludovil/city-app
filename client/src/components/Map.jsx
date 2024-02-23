import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const markers = [
  {
    geocode: [52.51831, 13.40707],
    popUp: "here",
    id: 1,
    address: "",
  },
  {
    geocode: [52.49477, 13.43851],
    popUp: "Glogauer Str. 1, 10999 Berlin",
    id: 2,
  },
  {
    geocode: [52.49842, 13.43372],
    popUp: "skalitzer str",
    id: 3,
  },
  {
    geocode: [52.500519, 13.44354],
    popUp: "Schlesische Str. 42, 10997 Berlin",
    id: 4,
  },
  {
    geocode: [52.49634, 13.43501],
    popUp: "Wiener Straße, 10999 Berlin",
    id: 5,
  },
];

function map() {
  return (
    <MapContainer center={[52.52, 13.405]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      {markers.map((marker) => (
        <Marker position={marker.geocode} key={marker.id}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
export default map;
