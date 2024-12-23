// score de depart
let score1 = 0;
let score2 = 0;
let target1 = 0;


const target = document.getElementById("scoreinput");


// Joueur 1
const scoreElement1 = document.getElementById('scoreTeamA');
const increaseButton1 = document.getElementById('addplayerone');


// Joueur 2
const scoreElement2 = document.getElementById('scoreTeamB');
const increaseButton2 = document.getElementById('addplayertwo');


// reset 
const resetButton = document.getElementById('reset');

// maj score
function updateScores() {
    scoreElement1.textContent = score1;
    scoreElement2.textContent = score2;
   target.textContent = target1;
}
//Fonction pour vérifier si un joueur a atteint la target
function checkWinner() {
    const targetScore = target.value; // On récupère la cible de score avec la propriété value
    if (score1 >= targetScore) {
        alert("Joueur 1 gagne !");
        resetScores();
    } else if (score2 >= targetScore) {
        alert("Joueur 2 gagne !");
        resetScores();
    }
}
function resetScores() {
    score1 = 0; // Réinitialise le score du joueur 1 à 0
    score2 = 0; // Réinitialise le score du joueur 2 à 0
    target1 = target;
    updateScores(); // Mets à jour l'affichage des scores
}

// augmenter score joueur 1
increaseButton1.addEventListener('click', () => {
    score1++;// ++ = incrémente (ajoute) de 1 en 1
    updateScores();
    checkWinner();
});



//  augmenter score du Joueur 2
increaseButton2.addEventListener('click', () => {
    score2++; 
    updateScores();
    checkWinner();
});


// réinitialiser les scores
resetButton.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    target1 = target
    updateScores();
});

// affichage
updateScores();
