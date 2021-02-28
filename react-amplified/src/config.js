import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = { 
  botName: "Cosmo",
  initialMessages: [createChatBotMessage("Hi, I'm Cosmo. I'm here to help students with their taxes. What do you want to learn?", {
      widget: "learningOptions",
  })
],
...LearningOptions,
widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "w4Links",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
              options: [
                {
                  text: "What is a W-4 Form?",
                  url: "https://smartasset.com/taxes/what-is-a-w-4-form",
                  id: 1,
                },
                {
                  text: "W-4 Breakdown",
                  url:
                    "https://www.withum.com/resources/the-new-simplified-form-w-4/",
                  id: 2,
                },
                {
                    text: "How to Fill Out a W-4 Form",
                    url:
                      "https://www.nerdwallet.com/article/taxes/how-to-fill-out-form-w4-guide?trk=nw_gn_5.0",
                    id: 3,
                },
              ],
            },
          },
    ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config