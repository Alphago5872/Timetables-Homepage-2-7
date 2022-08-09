import FooterWebsite from "./FooterWebsite_1";
import HeaderWebsite from "./HeaderWebsite_1";
import { useMediaQuery } from "react-responsive";

const WebCard = (props) => {
  const isSupported = useMediaQuery({ query: "(max-width: 310px)" });

  console.log(isSupported);
  return (
    <>
      {!isSupported ? (
        <div>
          <HeaderWebsite />
          {props.children}
          <FooterWebsite />
        </div>
      ) : (
        <div className="not-support__wrapper">
          <div className="not-support">
            <span
              style={{ fontSize: "5rem" }}
              className="material-symbols-outlined"
            >
              devices_fold
            </span>{" "}
            <br />
            Foldables phone cover screen is not supported; Please unfold your
            screen to continue.
          </div>
        </div>
      )}
    </>
  );
};

export default WebCard;
