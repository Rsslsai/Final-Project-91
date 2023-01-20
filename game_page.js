player_1_name = localStorage.getItem("player_1");
player_2_name = localStorage.getItem("player_2");
document.getElementById("player_1").innerHTML = player_1_name + " : ";
document.getElementById("player_2").innerHTML = player_2_name + " : ";
player_1_score = 0;
player_2_score = 0;
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;
document.getElementById("question_turn").innerHTML = player_1_name;
document.getElementById("answer_turn").innerHTML = player_2_name;

function send() {
    number_1 = document.getElementById("player1").value;
    number_2 = document.getElementById("player2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    question_number = "<h4>" + number_1 + " X " + number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='Check'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {

        update_player1_score = player_1_score + 1;
        document.getElementById("player_1_score").innerHTML = update_player1_score;
    }

    else {
        update_player2_score = player_2_score + 1;
        document.getElementById("player_2_score").innerHTML = update_player2_score;
    }
}
