import Get_Right from "../assets/quiz_get_right.png";
import Get_Wrong from "../assets/quiz_get_wrong.png";
import French from "../assets/french_card.png";
import English from "../assets/english_card.png";
import Work from "../assets/pomodoro_work.png";
import Break from "../assets/pomodoro_break.png";

const allProjects = [
    {
        "id": 0,
        "projectName": "Quiz App",
        "git_url": "https://github.com/GakuruAlex/quiz_app_v_2",
        "details": "This ia quiz project. The questions are fetched from Open Trivia Api with params: amount=10, category=18 and type=boolean. Its a True or False system. True is marked by a button with ✓ and False with 'x'. If the answer is correct the canvas changes to green else red before the next question and score is increased by one.",
        "image_urls": [Get_Right, Get_Wrong],
        "stacks": ["Python", "API", "GitHub"]
    },
    {
        "id": 1,
        "projectName": "FlashCardApp",
        "details": "This Python application helps you learn a new language by displaying flashcards with the word in one language on the front and its translation in the other language on the back. You can customize the application with your own flashcards stored in a CSV file.",
        "image_urls": [French, English],
        "git_url": "https://github.com/GakuruAlex/FlashCardApp",
        "stacks": ["Python", "GitHub"]


    },
    {
        "id": 2,
        "projectName":"Pomodoro",
        "git_url":"https://github.com/GakuruAlex/Pomodoro",
        "details": "This project is a simple productivity timer based on the Pomodoro Technique—a time management method that breaks work into intervals, traditionally 25 minutes long, separated by short breaks. It's designed to help users stay focused and maintain consistent productivity.",
        "image_urls": [Work, Break],
        "stacks": ["Python", "Tkinter", "GitHub"]

    }
]

export default allProjects;