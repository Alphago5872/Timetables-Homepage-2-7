import TeachersTimetableCard from "./TeachersTimetableCard";
import MoreTeachersTimetableCard from "./MoreTeachersPre";
import { useNavigate } from "react-router-dom";

function Box({ children, ...props }) {
  return (
    <div className="tttpre" {...props}>
      {children}
    </div>
  );
}

const TeachersTimetable = () => {
  let navigate = useNavigate();

  const teacherToggleHandler = () => {
    navigate("/teacherstimetable/");
  };

  const moreTeacherToggleHandler = () => {
    navigate("/moreteacherstimetable");
  };

  return (
    <div>
      <h1 style={{ marginTop: "25px" }}>Teachers' Timetable</h1>
      <Box>
        <TeachersTimetableCard
          image={
            "https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Thonnisorn-Choochaisangrat.png"
          }
          teacher="June"
          onClick={teacherToggleHandler}
          teacherFull="Mr. Thonnisorn Choochaisangrat"
        />
        <TeachersTimetableCard
          image={
            "https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Watcharee-Amornwatcharapong.png"
          }
          teacher="Mink"
          onClick={teacherToggleHandler}
          teacherFull="Mrs. Watcharee Amornwatcharapong"
        />
        <TeachersTimetableCard
          image={
            "https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Teeraphong-Vechatrakoolphaisan.png"
          }
          teacher="Ith"
          onClick={teacherToggleHandler}
          teacherFull="Mr. Teeraphong Vechatrakoolphaisan"
        />
        {/* <TeachersTimetableCard
          teacher="Earth"
          onClick={teacherToggleHandler}
          teacherFull="Mr. Dhanuphon Boriboonsub"
        /> */}
        <MoreTeachersTimetableCard
          image="none"
          // teacher="View more"
          onClick={moreTeacherToggleHandler}
          teacherFull="View more"
        />
      </Box>
    </div>
  );
};

export default TeachersTimetable;
