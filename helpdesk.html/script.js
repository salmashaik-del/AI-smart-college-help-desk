document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Bot responses for SVEC College Helpdesk
    const collegeData = {
        "admission": "Welcome to SVEC! For admission information, please contact the college admissions office. We offer undergraduate engineering programs across different branches.",
        "courses": "SVEC offers undergraduate (B.Tech) engineering courses including CSE, AI & ML, ECE, EEE, and Mechanical Engineering.",
        "fees": "For accurate tuition fee and other fee details, please check the official college website or the college accounts section/fee counter.",
        "exam": "For examination timetables, hall tickets, and results, please check the college examination portal or student portal.",
        "attendance": "Students can check their attendance through the college student portal, or contact your class advisor for detailed reports.",
        "placement": "For placement information, training schedules, and recruitment updates, contact the Training & Placement Cell.",
        "facilities": "For information about laboratories, library, transport, and other campus facilities, contact the college administration.",
        "contact": "You can reach SVEC administration office at 08624-234567 or email us at info@svec.edu.in."
    };

    function appendMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function handleUserMessage() {
        const text = userInput.value.trim();
        if (text === "") return;

        appendMessage(text, "user");
        userInput.value = "";

        // Simple bot logic to match keywords
        setTimeout(() => {
            const query = text.toLowerCase();
            let botReply = "I am here to help you with SVEC college details! You can ask about admissions, courses, exams, placements, fees, attendance, or contact info.";

            for (let key in collegeData) {
                if (query.includes(key)) {
                    botReply = collegeData[key];
                    break;
                }
            }

            appendMessage(botReply, "bot");
        }, 500);
    }

    sendBtn.addEventListener("click", handleUserMessage);
    
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleUserMessage();
        }
    });
});