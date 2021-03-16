import loader from "../../../assets/images/805.svg";

const Preloader = () => {
  return (
    <div>
      <img
        style={{
          display: "block",
          margin: "50px auto",
        }}
        src={loader}
        alt="Loading..."
      />
    </div>
  );
};

export default Preloader;
