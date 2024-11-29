// Function to toggle the visibility of the chat options
function toggleChatOptions() {
    const chatOptions = document.getElementById("chat-options");
    if (chatOptions.style.display === "none" || chatOptions.style.display === "") {
        chatOptions.style.display = "block";
    } else {
        chatOptions.style.display = "none";
    }
}

// Close chat options if clicked outside
window.onclick = function(event) {
    const chatOptions = document.getElementById("chat-options");
    if (!event.target.matches('.chat-button button') && !event.target.matches('.chat-options')) {
        chatOptions.style.display = "none";
    }
}
