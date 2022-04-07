import React from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
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
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export function SignUpFirstStep() {

   const navigation = useNavigation();

   function handleBack() {
      navigation.goBack();
   }

   function handleNextStep() {
      navigation.navigate('SignUpSecondStep');
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
                     <Bullet active />
                     <Bullet />
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

                  <FormTitle>1. Dados</FormTitle>

                  <Input 
                     iconName="user"
                     placeholder="Nome"
                  />

                  <Input 
                     iconName="mail"
                     placeholder="E-mail"
                     keyboardType="email-address"
                  />

                  <Input 
                     iconName="credit-card"
                     placeholder="CNH"
                     keyboardType="numeric"
                  />

               </Form>

               <Button 
                  title="Próximo"
                  onPress={handleNextStep}
               />

            </Container>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

   );
}