import { useState } from "react";
import NavTop from "../Components/NavTop";
import NavBottom from "../Components/NavBottom";
import SupportIcon from "../Components/SupportIcon";
import MehmanPazirJahan from "../Components/MehmanPazirJahan";
import WindowNavBar from "../Components/WindowNavBar";
import AboutGuestHouse from "../Components/AboutGuestHouse";
import HospitalityFacilities from "../Components/HospitalityFacilities";
import RoomFacilities from "../Components/RoomFacilities";
import HospitalityDistance from "../Components/HospitalityDistance";
import AvailableRoomForHospitality from "../Components/AvailableRoomForHospitality";
import Map from "../Components/Map";
import Questions from "../Components/Questions";
import Reviews from "../Components/Reviews";
import Overlay from "./Overlay";
import Comments from "../Components/Comments";
import Form from "../Components/Form";
function AppLayot() {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <div className=" container mx-auto">
      <NavTop setShow={setShowWindow} />
      <main className=" my-20 px-3">
        <MehmanPazirJahan />
        <AboutGuestHouse />
        <HospitalityFacilities />
        <RoomFacilities />
        <HospitalityDistance />
        <AvailableRoomForHospitality />
        <Map />
        <Questions />
        <Reviews />
        <Comments />
        <Form />
      </main>
      <SupportIcon />
      <NavBottom />
      <WindowNavBar setShow={setShowWindow} show={showWindow} />
      <Overlay setShow={setShowWindow} show={showWindow} />
    </div>
  );
}

export default AppLayot;
