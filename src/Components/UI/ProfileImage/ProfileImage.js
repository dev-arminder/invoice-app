import React from "react";
import img from "../../../media/images/image-avatar.jpg";
import { ProfileImg } from "./ProfileImage.module.css";

function ProfileImage() {
  return <img src={img} alt="User Profile" className={ProfileImg} />;
}
export default ProfileImage;
