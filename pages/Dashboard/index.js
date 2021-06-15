import React, { useContext, useState } from 'react';
import { ScrollView, Text, FlatList, Alert } from 'react-native';
import api from '../../config/configApi';

import { AuthContext } from '../../contexts/auth';
import { Container, ButtomSignOut, TextSignOut } from './styles';


export default function Dashboard() {
    const [user,setUser] = useState({
        usuarios: []
    });
    const listaUsuario = async () =>{
        await api.get('/usuarios').then( (response)=>{
            setUser(response.data.usuarios);
            Alert.alert("",response.data);
        }); 
    }
    // Alert.alert("",user);
    const { signOut } = useContext(AuthContext);

    return (
        // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
            <Text>Dashboard</Text>
            {/* <ButtomSignOut onPress={() => signOut()}>
                <TextSignOut>
                    Sair
                    </TextSignOut>
            </ButtomSignOut> */}
            <ButtomSignOut onPress={listaUsuario}>
                    <TextSignOut>
                        Acessar
                    </TextSignOut>
            </ButtomSignOut>
        </Container>
        // </ScrollView>
    )
}