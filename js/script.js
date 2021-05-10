// Constants
const addPlayerButton = document.querySelector('.add-player-button');
const deletePlayerButton = document.querySelector('.delete-player-button');

// Variables
let players = [];
let playersLabel = document.querySelector('.players-label');

// Event listeners
if (addPlayerButton) {
	addPlayerButton.addEventListener("click", addPlayer);
}


if (deletePlayerButton) {
	deletePlayerButton.addEventListener("click", deletePlayer);
}

// Functions
function addPlayer() {
    let addPlayerData = document.querySelector('.inputfield-player-name').value;
    console.log("Adding player: " + addPlayerData);

    players.push(addPlayerData);

    printPlayers();
}

function deletePlayer() {
    console.log("Deleting last player");
    players.pop();

    printPlayers();
}

function printPlayers() {
    var playersText = "";

    for(let i = 0; i < players.length; i++) {
        playersText += i + ": " + players[i] + "<br>";
    }

    playersLabel.innerHTML = playersText;
}
