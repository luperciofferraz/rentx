import React from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { useTheme } from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {

   Container,
   Header, 
   Steps,
   Title,
   Subtitle,
   Form,
   FormTitle

} from './styles';

export function SignUpSecondStep() {

   const navigation = useNavigation();
   const theme = useTheme();

   function handleBack() {
      navigation.goBack();
   }

   return (

      <KeyboardAvoidingView behavior="position" enabled>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
               <Header>

                  <BackButton 
                     onPress={handleBack} 
                  />

                  <Steps>
                     <Bullet />
                     <Bullet active/>
                  </Steps>

               </Header>

               <Title>
                  Crie sua{'\n'}
                  conta
               </Title>

               <Subtitle>
                  Faça seu cadastro de{'\n'}
                  forma rápida e fácil            
               </Subtitle>

               <Form>

                  <FormTitle>2. Senha</FormTitle>

                  <PasswordInput 
                     iconName="lock"
                     placeholder="Senha"
                  />

                  <PasswordInput 
                     iconName="lock"
                     placeholder="Repetir Senha"
                  />

               </Form>

               <Button 
                  color={theme.colors.success}
                  title="Cadastrar"
               />

            </Container>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

   );
}