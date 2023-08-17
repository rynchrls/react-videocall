import React from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
      const appID = 292248651;
      const serverSecret = "277b242b9e3bdd4c153106b90f0ffcde";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Ryan Charles"
      );
  
      const zc = ZegoUIKitPrebuilt.create(kitToken)
      zc.joinRoom({
          container: element,
          sharedLinks: [
              {
                  name: 'Copy Link',
                  url: `https://rynchrls.github.io/room/${roomId}`
              }
          ],
          scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall
          },
          showScreenSharingButton:  true,
      })
    };
  
    return <div className="App4">
      <div className="div" ref={myMeeting} />
    </div>;
}
export default Room;