import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Namaste voter!! I am your chatbot, your Digital Assistant Bot. Please use following buttons to get related information or ask me a question. I will try my best to answer your queries.`
    ),
  ],
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#093F89",
          padding: "5px",
          borderRadius: "3px",
          color: "#FFFFFF",
        }}
      >
        Welcome
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      // backgroundColor: "#F1F1F1",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {
    users: [],
  },
  widgets: [
    {
      widgetName: "overview",
      // widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["users"],
    },
  ],
};

export default config;
