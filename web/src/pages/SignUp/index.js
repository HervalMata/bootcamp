import React from 'react';
import logo from '~/assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">JCriar conta gratuita</Link>
      </Form>
    </>
  );
}
