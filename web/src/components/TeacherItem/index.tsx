import React from "react";

import whatssappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/62807788?s=460&u=af90f3bf6a3bda5bf667b12eb8cf71c6c19486ef&v=4"
          alt="Elton Fontes"
        />
        <div>
          <strong>Elton Fontes</strong>
          <span>Developer</span>
        </div>
      </header>
      <p>
        Desenvolvedor PHP, Node ReactJS e React Native
        <br />
        Parágrafo número 2
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatssappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
