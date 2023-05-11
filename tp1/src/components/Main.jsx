import React from "react";

const Main = () => {
  const nombre = "Luciano";
  const edad = 21;
  const nombreBro = "Nicolas";

  return (
    <div>
      <h2>
        <u>Descripcion:</u>
      </h2>

      <p className="parrafo">
        Mi nombre es {nombre}, tengo {edad} años soy estudiante de la carrera de
        programcion en la UNT. Mi compañero de estudios es {nombreBro}, aprendi
        lenguajes como C# y un poco de JavaScript sumado a SQL SERVER. Mis
        objetivo de la carrera es aprender lo maximo posible para estar listo a
        la hora de entrar al mercado laboral poniendo en practica todo lo
        aprendido durante mis años en la facultad.
      </p>
    </div>
  );
};

export default Main;
