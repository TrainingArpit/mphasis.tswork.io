var MessageManager = /** @class */ (function () {
    function MessageManager() {
        this.messages = [];
    }
    MessageManager.prototype.addMessage = function (message) {
        this.messages.push(message);
    };
    MessageManager.prototype.getMessageById = function (id) {
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var message = _a[_i];
            if (message.id === id) {
                return message;
            }
        }
        return undefined;
    };
    MessageManager.prototype.getAllMessages = function () {
        return this.messages;
    };
    return MessageManager;
}());
var user1 = { id: 1, username: "Ridhi" };
var user2 = { id: 2, username: "Ridhi" };
var user3 = { id: 3, username: "Ridhi" };
var user4 = { id: 4, username: "Ridhi" };
var user5 = { id: 5, username: "Sonam" };
var message1 = {
    id: 1,
    sender: user1,
    content: "Hello, Ridhi",
};
var message2 = {
    id: 2,
    sender: user2,
    content: "Hello, Sonam",
};
var message3 = {
    id: 3,
    sender: user3,
    content: "Hello, Sonam",
};
var message4 = {
    id: 4,
    sender: user4,
    content: "Hello, Sonam",
};
var message5 = {
    id: 5,
    sender: user5,
    content: "Hii,Guys!!",
};
var messageManager = new MessageManager();
messageManager.addMessage(message1);
messageManager.addMessage(message2);
messageManager.addMessage(message3);
messageManager.addMessage(message4);
messageManager.addMessage(message5);
console.log(messageManager.getAllMessages());
