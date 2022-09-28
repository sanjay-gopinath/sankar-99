var firebaseConfig = {
    apiKey: "AIzaSyArZIthQ6_clc9th04PhUqdpUeMgssQtoY",
    authDomain: "practie-test.firebaseapp.com",
    databaseURL: "https://practie-test-default-rtdb.firebaseio.com",
    projectId: "practie-test",
    storageBucket: "practie-test.appspot.com",
    messagingSenderId: "48821441941",
    appId: "1:48821441941:web:82ca2acdb5f0a21659d29c"
};
firebase.initializeApp(firebaseConfig);
// Create function addUser()

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;


function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == player1_name) {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == player1_name) {
        question_turn = player2_name;
        document.getElementById("player_question").innerHTML = "Question_turn - " + player2_name;
    } else {
        question_turn = player1_name;
        document.getElementById("player_question").innerHTML = "Question_turn - " + player1_name;
    }

    if (answer_turn == player1_name) {
        answer_turn = player2_name;
        document.getElementById("player_answer").innerHTML = "Answer_turn - " + player2_name;
    } else {
        answer_turn = player1_name;
        document.getElementById("player_answer").innerHTML = "Answer_turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";

}

// Get value of user by id player1_name_input and player2_name_input

// Store these values locally

//Assign "game_page.html" to window.location