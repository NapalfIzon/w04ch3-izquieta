import "./Info.css";

const Info = ({ isHidden }) => {
  return (
    <span className={isHidden ? "message off" : "message"}>Calling...</span>
  );
};

export default Info;
