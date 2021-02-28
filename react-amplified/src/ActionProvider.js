
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }

    happy() {
        const happyMessage = this.createChatBotMessage("I'm happy to help! Let me know if there's anything else I can do for you.")
        this.updateChatbotState(happyMessage)
    }

    handleW4List = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on W-4 Forms:",
          {
            widget: "w4Links",
          }
        );
    
        this.updateChatbotState(message);
    };
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider