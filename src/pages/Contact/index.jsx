import React, { useState } from 'react';
import './contact.css';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Por favor prencher os campos vazio!')
      return;
    };
    alert('teste')
  }


  return (
    <main className='maincontato'>
      <div className='containeConta'>
        <h1 className='title'> Meus Contatos</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            className='input'
            type="text"
            placeholder='Digite seu Nome'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className='input'
            type="email"
            placeholder='Digite seu Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className='textearea'
            placeholder='Deixe sua mensagem'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className='button' type="submit" value="Enviar" />

        </form>

      </div>
    </main>
  );

}

export default Contact;
