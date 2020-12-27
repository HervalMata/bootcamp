import React from 'react';
import {Image} from 'react-native';
import Background from '~/components/Background';
import logo from "~/assets/logo.png";
import {Container, Form, FormInput, SignLink, SignLinkText, SubmitButton} from "~/pages/SignIn/styles";

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite o sua senha"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
