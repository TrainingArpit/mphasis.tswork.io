interface User {
    id: number;
    username: string;
  }
 
  interface Message {
    id: number;
    sender: User;
    content: string;
  }
 
  class MessageManager {
    private messages: Message[] = [];
    addMessage(message: Message): void {
      this.messages.push(message);
    }
    getMessageById(id: number): Message | undefined {
        for (const message of this.messages) {
    if (message.id === id) {
            return message;
          }
        }
        return undefined;
      }
 
    getAllMessages(): Message[] {
        return this.messages;
      }
}
 
const user1: User = { id: 1, username: "Ridhi" };
const user2: User = { id: 2, username: "Ridhi" };
const user3: User = { id: 3, username: "ridhi" };
const user4: User = { id: 4, username: "Omni" };
const user5: User = { id: 5, username: "Sonam" };
 
const message1: Message = {
    id: 1,
    sender: user1,
    content: "Hello, Ridhi",
};
const message2: Message = {
    id: 2,
    sender: user2,
    content: "Hello, Sonam",
};
 
const message3: Message = {
    id: 3,
    sender: user3,
    content: "Hello, Sonam",
 
  };
 
  const message4: Message = {
    id: 4,
    sender: user4,
    content: "Hello, Sonam",
   
  };
 
  const message5: Message = {
    id: 5,
    sender: user5,
    content: "Hii,Guys!!",
   
  };
  const messageManager = new MessageManager();
  messageManager.addMessage(message1);
  messageManager.addMessage(message2);
  messageManager.addMessage(message3);
  messageManager.addMessage(message4);
  messageManager.addMessage(message5);
 
  console.log(messageManager.getAllMessages());
