import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logopng.png';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
