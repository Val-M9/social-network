import React from "react";
import styles from "./ProfileInfo.module.css";

import ProfileStatus from "./ProfileStatus";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileData from "./ProfileData";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  const setMainPhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={styles.profileWrapper}>
      <ProfileData profile={profile} isOwner={isOwner} setMainPhoto={setMainPhoto} />

      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
