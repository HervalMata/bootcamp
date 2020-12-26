import React from 'react';
import { Container, Content, Profile } from "~/components/Header/styles";
import { Link } from "react-router-dom";
import logo from '../../assets/logo-purple.svg';
import Notifications from '~/components/Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="CoBarber"/>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Herval Mata</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Herval Mata"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
