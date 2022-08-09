import Glance from "../components/Homepage-components/Glance/Glance";
import NewtonNews from "../components/Homepage-components/Newton_News/NewtonNews";
import TeachersTimetable from "../components/Homepage-components/Teachers'_Timetable/TeachersTimetable";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import TimetablePreview from "../components/Homepage-components/TimetablePreview/TimetablePreview";
import Clock from "../components/Homepage-components/Clock/Clock";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = (props) => {
  const LoggedIn = localStorage.getItem("isLoggedIn");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log(isLoggedIn);
  return (
    <div>
      {/* <div className="hero"></div> */}
      <WebCard>
        <div className="home">
          <div>
            <h1 className="home__time">
              <Clock format={"hh-mm"} />
            </h1>
          </div>
          <div>
            <Glance />
          </div>
          <NewtonNews />
          <div>
            <TeachersTimetable />
          </div>
          <div>
            <TimetablePreview />
          </div>
        </div>
      </WebCard>
    </div>
  );
};

export default Home;
