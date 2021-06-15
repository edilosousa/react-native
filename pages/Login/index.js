import React, {useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';
import { Alert, Image, ScrollView , StyleSheet } from 'react-native';

import { Container, Logo, Input, ButtomForm, TextForm } from './styles';
import api from '../../config/configApi';

const styles = StyleSheet.create({
    tinyLogo: {
      width: 350,
      height: 50,
    }
  });


export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const { signIn } = useContext(AuthContext);

    const handleLogin = async () => {
        const headers = {
            'Content-type': 'application/json'
        }
        await api.post('/login', {usuario, senha}, {headers})
        .then((response) => {
            if(response.data.erro){
                Alert.alert("",response.data.message);
            }else{
                AsyncStorage.setItem('@token',response.data.token);
                // Alert.alert("",response.data.token);
                // Alert.alert("",response.data.message);
                // navigation.navigate('Dashboard');
                signIn();
            }
        }).catch(()=>{
            Alert.alert("","tente mais tarde");
        })
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Container>
                <Logo>
                    <Image style={styles.tinyLogo} source={require('../../logo.png')}/>
                </Logo>

                <Input 
                    placeholder="Usuário" 
                    autoCorrect={false}
                    value={usuario} 
                    keyboardType="email-address"  
                    autoCapitalize="none"  
                    onChangeText={text => setUsuario(text)}
                />

                <Input 
                    placeholder="Senha"
                    autoCorrect={false}  
                    value={senha}
                    secureTextEntry={true}  
                    onChangeText={text => setSenha(text)}
                />

                <ButtomForm onPress={handleLogin}>
                    <TextForm>
                        Acessar
                    </TextForm>
                </ButtomForm>

            </Container>
        </ScrollView>
    );
}