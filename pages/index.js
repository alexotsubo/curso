import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

function Home() {
  return (
    <>
      <h1>
        Zoey Bolinha ou Zoey na Bolinha? Zoey bonitinha! e muito bonitinha
      </h1>

      <div style={{ marginTop: "20px", maxWidth: "600px" }}>
        <AudioPlayer
          src="/audio.m4a"
          autoPlay={false}
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          layout="stacked"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </>
  );
}

export default Home;
