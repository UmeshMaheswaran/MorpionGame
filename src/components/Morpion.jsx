// Importation des hooks useState et useRef de React
import { useState, useRef } from "react";

// Importation des images pour les icônes de croix et de cercle
import cross_icon from "../Assets/cross.png";
import circle_icon from "../Assets/circle.png";

// Initialisation du tableau de données représentant l'état du jeu
let data = ["", "", "", "", "", "", "", "", ""];

// Composant fonctionnel Morpion
const Morpion = () => {
  // Déclaration des états locaux count (pour le compteur de coups) et lock (pour verrouiller le jeu en cas de victoire)
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  // Référence pour manipuler directement le titre du jeu
  let titleRef = useRef(null);
  // Références pour manipuler directement chaque case du jeu

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  // Tableau regroupant toutes les références des cases
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  // Fonction pour gérer le clic sur une case
  const toggle = (e, num) => {
    // Si le jeu est verrouillé, ne rien faire
    if (lock) {
      return 0;
    }
    // Vérifie si le compteur est pair pour savoir quel joueur joue (croix ou cercle)
    if (count % 2 === 0) {
      // Change le contenu de la case cliquée en icône de croix
      e.target.innerHTML = `<img src='${cross_icon}'>`;

      // Enregistre le coup dans le tableau de données
      data[num] = "x";

      // Incrémente le compteur de coups
      setCount(++count);
    } else {
      // Sinon, Change le contenu de la case cliquée en icône de cercle
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
    }

    // Vérifie s'il y a une victoire après chaque coup
    checkWin();
  };
  // Fonction pour vérifier les conditions de victoire
  const checkWin = () => {
    // Vérifie chaque combinaison gagnante possible
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  // Fonction appelée lorsqu'un joueur a gagné
  const won = (winner) => {
    // Verrouille le jeu pour empêcher de nouveaux coups
    setLock(true);

    // Met à jour le titre pour annoncer le gagnant avec l'icône correspondante
    if (winner === "Nico") {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}>Won !`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}>Won !`;
    }
  };

  // Fonction pour réinitialiser le jeu
  const reset = () => {
    // Déverrouille le jeu
    setLock(false);

    // Réinitialise le tableau de données
    data = ["", "", "", "", "", "", "", "", ""];

    // Réinitialise le titre du jeu
    titleRef.current.innerHTML = "Morpion In <span>React</span>";

    // Efface le contenu de chaque case
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };
  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        MORPION GAME IN<span>REACT</span>
      </h1>

      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <span>
        {" "}
        <h2 className="umesh">by Umesh</h2>
      </span>
    </div>
  );
};

export default Morpion;
