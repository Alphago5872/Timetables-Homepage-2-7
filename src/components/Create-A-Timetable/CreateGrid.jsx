import "../../sass/components/_timetable.scss";
import CreateBox from "./CreateBox";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const timeLayout = [
  "09:00 - 10:30",
  "10:30 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:30",
  "14:30 - 16:00",
];

const CreateGrid = (props) => {
  // console.log(props.timetableData.content);

  // for (const day in props.timetableData.content) {

  return (
    <div className="timetable__wrapper">
      <Box className="ttbigbox">
        <div className="timetable">
          {/* {props.timetableContent.content &&
        props.timetableContent.content.map((weekday, index) => {
          console.log(weekday, index);
        })}{" "} */}
          <div className="timetable__time timetable__time--empty">
            <h3></h3>
          </div>
          {timeLayout.map((time, index) => {
            return (
              <div
                className={`timetable__time ${
                  index === 0 ? "timetable__time--first" : ""
                } ${
                  index === timeLayout.length - 1 ? "timetable__time--last" : ""
                }`}
              >
                <h3>{time}</h3>
              </div>
            );
          })}
          <CreateBox subject="Monday" color="#F0D750" no_hover hori={3} />
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />
          <CreateBox subject="Tuesday" color="#FF99DC" no_hover hori={3} />
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />
          <CreateBox subject="Wednesday" color="#77ED6D" no_hover hori={3} />
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
            button={"+ Select a subject"}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />
          <CreateBox subject="Thursday" color="#FFB35A" no_hover hori={3} />
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox subject="Friday" color="#96BAFF" no_hover hori={3} />
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />{" "}
          <CreateBox
            subject={"+ Select a subject"}
            // teacher={'e.teachers && e.teachers.join(", ")'}
            // room={"e.room && e.room"}
            hori={3}
            // no_hover={'+ === "Holiday" ? true : false'}
          />
          <CreateBox subject="Lunch" lunch no_hover />
        </div>

        {/* <CreateBox subject="Monday" color="#F0D750" no_hover /> */}

        {/* {props.timetableContent.content.forEach((data) => console.log(data))} */}
      </Box>
    </div>
  );
};

export default CreateGrid;
