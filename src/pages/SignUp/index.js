import React, {useState} from 'react';
import { Platform } from 'react-native';

import {
  Background, 
  Container, 
  Logo, 
  Input, 
  AreaInput, 
  SubmitButton, 
  SubmitText, 
  Link, 
  LinkText
} from '../SignIn/styles';

const SignUp = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Background>
      <Container
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
          <Input
            placeholder='Name'
            autoCorrect={false}
            autoCapitaliza={'none'}
            vale={nome}
            onChangeText={(text) => setNome(text)}
          />        
        </AreaInput>
        
        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCapitaliza={'none'}
            vale={email}
            onChangeText={(text) => setEmail(text)}
          />        
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Senha'
            autoCorrect={false}
            autoCapitaliza={'none'}
            value={password}
            onChangeText={text => setPassword(text)}
          />        
        </AreaInput>

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  )

}

export default SignUp;