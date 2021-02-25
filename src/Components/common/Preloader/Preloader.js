import preloader from "../../../assets/images/Infinity.svg";

const Preloader = () => {
  return (
    <div>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={preloader}
        alt="Loading..."
      />
    </div>
  );
};

export default Preloader;
