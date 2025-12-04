import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <div className="mt-12 flex flex-col gap-y-4 items-start">
      <h2 className=" font-DanaDemiBold text-2xl font-bold text-orange-500">
        موقعیت مکانی
      </h2>
      <div className=" w-full h-96">
        <MapContainer
          center={[36.297540972959446, 59.60597898161756]}
          zoom={13}
          scrollWheelZoom={true}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "16px",
            zIndex: "0",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[36.297540972959446, 59.60597898161756]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
