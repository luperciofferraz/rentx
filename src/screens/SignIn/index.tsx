import React, { useState } from 'react';
import { 
   StatusBar, 
   KeyboardAvoidingView, 
   TouchableWithoutFeedback, 
   Keyboard,
   Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import * as Yup from 'yup';

import {

   Container,
   Header,
   Title,
   SubTitle,
   Footer,
   Form
   
} from './styles';

export function SignIn() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const theme = useTheme();
   const navigation = useNavigation();

   async function handleSignIn() {

      try {

         const schema = Yup.object().shape({

            email: Yup.string()
               .required('O E-mail é obrigatório')
               .email('Digite um e-mail válido'),
            password: Yup.string()
               .required('A Senha é obrigatório')
   
         });
   
         await schema.validate({ email, password });
         Alert.alert('Tudo ok');
   
      }
      catch(error) {
         if (error instanceof Yup.ValidationError) {
            Alert.alert('Opa',error.message);
         }
         else {
            Alert.alert('Erro na autenticação','Ocorreu um erro ao fazer login, verifique suas credenciais');
         }

      }

   }

   function handleSignUp() {
      navigation.navigate("SignUpFirstStep");
   }
 
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
                     onPress={handleSignIn}
                     enabled={true}
                     loading={false}
                  />

                  <Button
                     title="Criar conta gratuita"
                     color={theme.colors.background_secondary}
                     light
                     onPress={handleSignUp}
                     enabled={true}
                     loading={false}
                  />

               </Footer>

            </Container>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

   );
}