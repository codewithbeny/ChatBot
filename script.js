const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and class name
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent =
        className === "outgoing"
            ? `<p></p>`
            : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
};

// Handle chat input and responses
const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    const outgoingChatli = createChatLi(userMessage, "outgoing");
    chatbox.appendChild(outgoingChatli);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Handle special user messages before giving a predefined response
    if (userMessage.toLowerCase() === "hi" || userMessage.toLowerCase() === "hello") {
        setTimeout(() => {
            const incomingChatli = createChatLi("How can I assist you today? Choose one of the options:", "incoming");
            chatbox.appendChild(incomingChatli);
            const optionsMessage = createChatLi("1. Get help with account \n 2. Inquire about our services \n 3. Speak to support", "incoming");
            chatbox.appendChild(optionsMessage);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
        return;
    }
    if (userMessage.toLowerCase() == "1") {
        setTimeout(() => {
        const optionsMessage = createChatLi("You can login to your Account by visiting MemberPortal and Still you want help Type 'call' to schedule a callback", "incoming");
        chatbox.appendChild(optionsMessage);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
        return;
    } 

    if (userMessage.toLowerCase() == "2" ) {
        setTimeout(() => {
            const optionsMessage = createChatLi("We Provide scoring Services: \n 1. Paper less Scoring, \n 2. Entry Systems\n", "incoming");
            chatbox.appendChild(optionsMessage);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
        return;
    } 

    if (userMessage.toLowerCase() == "3" || userMessage.toLowerCase() == "call" ) {
        setTimeout(() => {
            const optionsMessage = createChatLi("We are scheduling your call with our executive", "incoming");
            chatbox.appendChild(optionsMessage);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
        return;
    } 

    if (userMessage.toLowerCase().includes("help")) {
        setTimeout(() => {
            const incomingChatli = createChatLi("Sure! Here are a few things I can assist with:", "incoming");
            chatbox.appendChild(incomingChatli);
            const optionsMessage = createChatLi("1. I can provide information on your account.\n2. I can help with our services.\n3. I can connect you with support.", "incoming");
            chatbox.appendChild(optionsMessage);

            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
        return;
    }

    // Default message for other queries
    setTimeout(() => {
        const incomingChatli = createChatLi("Sorry, I didn't quite understand that. Can you please clarify?", "incoming");
        chatbox.appendChild(incomingChatli);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
};

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without the Shift key and the window
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatbtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
    document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
    document.body.classList.toggle("show-chatbot")
);
