import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function map() {
  return (
    <MapContainer center={[52.52, 13.405]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
    </MapContainer>
  );
}
export default map;
