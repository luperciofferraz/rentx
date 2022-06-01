import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input'; 
import { PasswordInput } from '../../components/PasswordInput'; 
import { useAuth } from '../../hooks/auth';

import {
    Container,
    Header,
    HeaderTop,
    HeaderTitle,
    LogoutButton,
    PhotoContainer,
    Photo,
    PhotoButton,
    Content,
    Options,
    Option,
    OptionTitle,
    Section,
    
} from './styles';

export function Profile() {

    const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
    const { user } = useAuth();
    const theme = useTheme();
    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }

    function handleSignOut() {
        navigation.goBack();
    }

    function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
        setOption(optionSelected);
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderTop>
                            <BackButton 
                                color={theme.colors.shape} 
                                onPress={handleBack} 
                            />
                            <HeaderTitle>Editar Perfil</HeaderTitle>
                            <LogoutButton onPress={handleSignOut} >
                                <Feather 
                                    name="power" 
                                    size={24} 
                                    color={theme.colors.shape} 
                                />
                            </LogoutButton>
                        </HeaderTop>
                        <PhotoContainer>
                            <Photo source={{ uri: 'https://github.com/luperciofferraz.png'}} />
                            <PhotoButton onPress={() => {}}>
                                <Feather 
                                    name="camera"
                                    size={24}
                                    color={theme.colors.shape} 
                                />
                            </PhotoButton>    
                        </PhotoContainer>
                    </Header>

                    <Content style={{ marginBottom: useBottomTabBarHeight() }}>
                        <Options>
                            <Option 
                                active={option === 'dataEdit'}
                                onPress={() => handleOptionChange('dataEdit')}
                            >
                                <OptionTitle active={option === 'dataEdit'}>
                                    Dados
                                </OptionTitle>
                            </Option>
                            <Option 
                                active={option === 'passwordEdit'}
                                onPress={() => handleOptionChange('passwordEdit')}
                            >
                                <OptionTitle active={option === 'passwordEdit'}>
                                    Trocar Senha
                                </OptionTitle>
                            </Option>
                        </Options>
                        {
                            option === 'dataEdit' ? 
                            <Section>
                                <Input 
                                    iconName="user"
                                    placeholder="Nome"
                                    autoCorrect={false}
                                    defaultValue={user.name}
                                />
                                <Input 
                                    iconName="mail"
                                    editable={false}
                                    defaultValue={user.email}
                                />
                                <Input 
                                    iconName="credit-card"
                                    placeholder="CNH"
                                    keyboardType="numeric"
                                    defaultValue={user.driver_licence}
                                />
                            </Section>                
                            :
                            <Section>
                                <PasswordInput 
                                    iconName="lock"
                                    placeholder="Senha Atual"
                                />
                                <PasswordInput 
                                    iconName="lock"
                                    placeholder="Nova Senha"
                                />
                                <PasswordInput 
                                    iconName="lock"
                                    placeholder="Repetir Senha"
                                />
                            </Section>                
                        }
                    </Content>

                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );
}