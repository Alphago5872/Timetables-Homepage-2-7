const CreateBox = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose} />;
  };

  const ModalOverlay = (props) => {
    return (
      <div className="modal">
        <div className="modal__content">++++</div>
      </div>
    );
  };

  return (
    <a
      style={{
        gridColumn: `span ${props.hori ?? 1}`,
        backgroundColor: `${props.color}`,
        color: `${props.color ? "#000" : "#454545"}`,
      }}
      onClick={() => alert("Omg")}
      className={`timetable2 ${props.lunch ? "lunch" : ""} ${
        props.no_hover ? "timetable2__no-hover" : ""
      }`}
    >
      {props.subject ? (
        <h2
          style={{
            fontSize: `${!props.color && !props.lunch ? "1.5rem" : ""}`,
          }}
        >
          {props.subject}
        </h2>
      ) : (
        ""
      )}
      {props.teacher ? <h3>{props.teacher}</h3> : ""}
      {props.date ? <h1>{props.date}</h1> : ""}
      {props.room ? <h4>{props.room}</h4> : ""}
      {props.time ? <h6>{props.time}</h6> : ""}
    </a>
  );
};

export default CreateBox;
