import React from "react";
import styles from "./ProfileInfo.module.css";
import backgroundImage from "../../../../assets/images/view.jpg";
import check from "../../../../assets/images/check.png";
import cross from "../../../../assets/images/cross.png";
import maleUser from "../../../../assets/images/maleUser.png";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.view}>
        <img src={backgroundImage} alt="Sunset" />
      </div>
      <div className={styles.avatar}>
        <img
          src={profile.photos.large ? profile.photos.large : maleUser}
          alt="Avatar"
        />
      </div>
      <div className={styles.name}>{profile.fullName}</div>

      <div className={styles.description}>{profile.aboutMe}</div>

      <div className={styles.jobRequest}>
        Job request
        <img src={profile.lookingForAJob ? check : cross} alt="Job Request" />
      </div>
      <div className={styles.jobRequestDescription}>
        {profile.lookingForAJobDescription}
      </div>
      <div className={styles.contacts}>
        <h4>Contact Me</h4>
        {profile.contacts.twitter}
      </div>
      <div className={styles.status}>
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;