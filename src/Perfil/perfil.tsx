import React from "react";
import "./perfil.css";

const App: React.FC = () => {
  return (
    <div className="imagen ">
        <img
          src="gatoo.jpg"
          alt="Foto de perfil"
        />
        <h1 className="nombre">Pepito perez</h1>
        <p className="descripcion">
          Principiante en pepos
        </p>

        <div className="trabajo">
          <a
            href="#"
            className="facebook"
          >
           Facebook
          </a>
          <a
          href="#"
          className="instagram"
          >
            Instagram
          </a>
          <a
          href="#"
           className="twitter"
          >
             Twitter
          </a>
        </div>
      </div>
  );
};

export default App;