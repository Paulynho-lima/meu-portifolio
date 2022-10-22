import React, { useState } from "react";
import { Link } from 'react-router-dom';
import reactIcon from '../../assets/img/favicon.ico';
import { Menu } from './header'

function Linkes() {
  const [active, setActive] = useState(false)

  const modelToggle = () => {
    setActive(!active)
  }

  console.log(active)

  return (
    <header>
      <Menu>
        <section id="menus" className={active ? "headerHambu listitens" : "menuClose"} >
          <div className='headerHambu'>
            <ul className='listitens'>
              <li><Link className='link2' to="/">Página Inicial</Link></li>
              <li><Link className='link2' to="/about">Sobre Min</Link></li>
              <li><Link className='link2' to="/projects">Meus Projetos</Link></li>
              <li><Link className='link2' to="/contact">Meus Contatos</Link></li>
            </ul>
          </div>

        </section>
      </Menu>

      <nav className={"header"}>
        <div className={active ? "icon iconActive" : "icon"} onClick={modelToggle}>
          <div className="hamburguer hamburguerIcon mais"></div>

        </div>

        <div className={active ? "menuClose2" : "header"} >

          <a href="/" className="logo">
            <img
              className="react-icon"
              src={reactIcon}
              alt="icone do react"
            />
          </a>
          <Link className='link' to="/">Página Inicial</Link>
          <Link className='link' to="/about">Sobre Min</Link>
          <Link className='link' to="/projects">Meus Projetos</Link>

        </div>
      </nav>

    </header>
  )
}
export default Linkes;
