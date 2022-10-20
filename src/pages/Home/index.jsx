
import React from "react";
import logo from '../../assets/img/minhaFoto.jpg';
import "./home.css";

function Home() {

  return (
    <main className='homeMain'>
      <section className="home">
        <h1>Meu portifólio</h1>

        <img src={logo} className="minhaFoto" alt="minha-foto" />
        <h1>Meu portifólio</h1>
      </section>


    </main>
  );

}

export default Home;
