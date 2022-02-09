import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "./chatbot.css";
import ActionProvider from "../../components/chatbot/ActionProvider";
import config from "../../components/chatbot/config";
import MessageParser from "../../components/chatbot/MessageParser";
import { ConditionallyRender } from "react-util-kit";
import { ReactComponent as ButtonIcon } from "./icons/robot.svg";

const ChatBot = () => {
  const [showChatbot, toggleChatbot] = useState(false);
  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "25px",
          bottom: "55px",
          boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
        }}
      >
        <ConditionallyRender
          ifTrue={showChatbot}
          show={
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          }
        />
      </div>
      <div>
        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          CB
        </button>
      </div>
    </>
  );
};

export default ChatBot;
