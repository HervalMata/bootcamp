import React from 'react';
import logo from '~/assets/logo.svg';
import {Link} from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
