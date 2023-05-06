const celdas = document.querySelectorAll(".celdas")
const condicionGanar = [
    [0, 1, 2],
    [3 ,4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let jugador1 = "X";
let findeljuego = false;

celdas.forEach(celdas => {
    celdas.addEventListener ("click", () => {
        if (findeljuego) {
            return;
        }
        if (celdas.textContent === "") {
            celdas.textContent = jugador1;
            if (ganador ()) {
                findeljuego = true;
                alert(`${jugador1} es el ganador`)
            } else if (empate ()) {
                findeljuego= true;
                alert("Excelente juego, es un empate")
            }else {
                jugador1 = jugador1 === "X" ? "O" : "X";
            }
        }
    });
});


function ganador () {
    return condicionGanar.some(condition => {
        return condition.every (index => {
            return celdas[index].textContent === jugador1;
        })
    })
}

function empate () {
    return Array.from(celdas).every(celdas => {
        return celdas.textContent !=="";
    })
}

const inicio = document.getElementById(`iniciar`);


function startGame() {
    // Vaciar todas las celdas del tablero
    celdas.forEach(celdas => {
      celdas.innerText = '';
    });
}
inicio.addEventListener('click', startGame);

