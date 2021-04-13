import { Fragment } from "react";
import styles from "./ProfileInfo.module.css";
import view from "../../../../assets/images/view.jpg";
import check from "../../../../assets/images/check.png";
import cross from "../../../../assets/images/cross.png";
import camera from "../../../../assets/images/camera.png";
import maleUser from "../../../../assets/images/maleUser.png";
import Contacts from "./ProfileContacts";

const ProfileData = ({ profile, setMainPhoto, isOwner, ...props }) => {
  return (
    <Fragment>
      <section className={styles.view}>
        <img src={view} alt="Sunset" />
      </section>
      <section className={styles.avatar}>
        <img src={profile.photos.large || maleUser} alt="Avatar" />
        <div className={styles.uploadPhoto}>
          {isOwner && (
            <div onChange={setMainPhoto}>
              <label>
                <img src={camera} alt="camera" />
                <input type={"file"} />
              </label>
            </div>
          )}
        </div>
      </section>
      <div className={styles.name}>{profile.fullName}</div>

      <div className={styles.description}>PlugDescr{profile.aboutMe}</div>

      <div className={styles.jobRequest}>
        Job request
        <img src={profile.lookingForAJob ? check : cross} alt="Job Request" />
      </div>
      <div className={styles.jobRequestDescription}>PlugJobRequest{profile.lookingForAJobDescription}</div>
      <div className={styles.contacts}>
        <h4>Contact Me</h4>
        {Object.keys(profile.contacts).map((key) => {
          return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key] || <span>~~~</span>} />;
        })}
      </div>
    </Fragment>
  );
};
export default ProfileData;
