class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("w4") || lowerCaseMessage.includes("w-4")) {
        this.actionProvider.handleJavascriptList();
      }
      if (lowerCaseMessage.includes("thanks") || lowerCaseMessage.includes("thank")) {
          this.actionProvider.happy();
      }
    }
  }
  
  export default MessageParser;