import "./Actions.css";

const Actions = ({ isCalling }) => {
  return (
    <>
      <a href="call" className={isCalling ? "call off" : "call"}>
        Call
      </a>
      <a href="hang" className={isCalling ? "hang active" : "hang active off"}>
        Hang
      </a>
    </>
  );
};

export default Actions;
