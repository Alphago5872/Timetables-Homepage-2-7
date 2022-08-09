import FooterWebsite from "../components/Wrapper-Components/Wrapper-1/FooterWebsite_1";
import HeaderWebsite_3 from "../components/Wrapper-Components/Wrapper-3/HeaderWebsite_3";

const ForgotPassword = () => {
  return (
    <div>
      {/* <HeaderWebsite_3 /> */}
      <div style={{ justifyContent: "center" }}>
        {/* <iframe
          src="https://forms.gle/Ykr933xT2paBUvAN6"
          style={{ width: "100%", height: "110rem" }}
        ></iframe> */}
        <iframe
          // style={"border-radius:12px"}
          style={{ borderRadiu:"10px" }}
          src="https://open.spotify.com/embed/playlist/51vPyb3Wsi6aMhHZYXmOct?utm_source=generator"
          width="100%"
          height="595rem"
          frameBorder="0"
          allowTransparency="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <FooterWebsite />
    </div>
  );
};

export default ForgotPassword;
