const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');


const predefinedQA = {
  "How are you?": "I'm good, thank you!",
  "What is your name?": "My name is ChatBot.",
  "What can you do?": "I can answer predefined questions.",
  "Goodbye": "Goodbye! Have a nice day!",
  "How was your day?": "It’s nearing the end of the day, your phone dings and a “How was your day?” text stares back at you. Maybe it’s from your crush, best friend, or even your parent. They just want to check in, but how do you respond? Whether you’ve had a good or bad day, we’ve got you covered! Keep reading to learn how you can respond on any type of day to just about anyone."
};

function sendMessage() {
  const userMessage = userInput.value.trim();
  
  
  displayMessage(userMessage);
  
  const answer = predefinedQA[userMessage];
  if (answer) {
    displayMessage(answer);
  } else {
    displayMessage("I'm sorry, I don't understand.");
  }
  
  
  userInput.value = '';
}

function displayMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  
  
  chatBox.scrollTop = chatBox.scrollHeight;
}
