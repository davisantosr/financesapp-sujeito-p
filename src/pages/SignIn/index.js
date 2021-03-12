import React, {useState} from 'react';

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
} from './styles';

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/Logo.png')}/>
        
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

        <Link>
          <LinkText>
            Criar uma conta.
          </LinkText>        
        </Link>
      </Container>
    </Background>
  )

}

export default SignIn;