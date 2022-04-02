import React, { useState } from 'react';
import { 
   StatusBar, 
   KeyboardAvoidingView, 
   TouchableWithoutFeedback, 
   Keyboard
} from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import {

   Container,
   Header,
   Title,
   SubTitle,
   Footer,
   Form
   
} from './styles';

export function SingIn() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   const theme = useTheme();

   return (

      <KeyboardAvoidingView behavior="position" enabled>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

               <StatusBar
                  barStyle="dark-content"
                  backgroundColor="transparent"
                  translucent
               />

               <Header>

                  <Title>
                     Estamos{'\n'}quase lá.
                  </Title>
                  <SubTitle>
                     Faça seu login para começar{'\n'}
                     uma experiência incrível.
                  </SubTitle>

               </Header>

               <Form>
                  
                  <Input 
                     iconName="mail"
                     placeholder="E-mail"
                     keyboardType="email-address"
                     autoCorrect={false}
                     autoCapitalize="none"
                     onChangeText={setEmail}
                     value={email}
                  />

                  <PasswordInput 
                     iconName="lock"
                     placeholder="Senha"
                     onChangeText={setPassword}
                     value={password}
                  />
                  
               </Form>

               <Footer>
                  
                  <Button
                     title="Login"
                     onPress={() => {}}
                     enabled={false}
                     loading={false}
                  />

                  <Button
                     title="Criar conta gratuita"
                     color={theme.colors.background_secondary}
                     light
                     onPress={() => {}}
                     enabled={false}
                     loading={false}
                  />

               </Footer>

            </Container>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

   );
}