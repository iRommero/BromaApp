import React, { useState, useEffect } from "react";
import "../styles/styles.css";

const JokeApp = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("No se pudo cargar el chiste");
      const data = await response.json();
      setJoke(data.joke);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Generador de chistes random</h1>
      <p>{joke || "Ninguna broma que mostrar"}</p>
      <button className="jokeButton" onClick={fetchJoke}>
        Generar nueva broma
      </button>
    </div>
  );
};

export default JokeApp;
