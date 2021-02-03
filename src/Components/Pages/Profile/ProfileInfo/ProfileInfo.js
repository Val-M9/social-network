import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import backgroundImage from "../../../../assets/images/view.jpg";
import check from "../../../../assets/images/check.png";
import cross from "../../../../assets/images/cross.png";
import maleUser from "../../../../assets/images/maleUser.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.view}>
        <img src={backgroundImage} alt="Sunset" />
      </div>
      <div className={styles.avatar}>
        <img
          src={
            props.profile.photos.large ? props.profile.photos.large : maleUser
          }
          alt="Avatar"
        />
      </div>
      <div className={styles.name}>{props.profile.fullName}</div>

      <div className={styles.description}>{props.profile.aboutMe}</div>

      <div className={styles.jobRequest}>
        <img
          src={props.profile.lookingForAJob ? check : cross}
          alt="Job Request"
        />
      </div>

      <div className={styles.jobRequestDescription}>
        {props.profile.lookingForAJobDescription}
      </div>
      <div className={styles.contacts}>{props.profile.contacts.twitter}</div>
      <div className={styles.status}>
        <ProfileStatus status={"Hello"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
