import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from '../../config/configApi';

import { AuthContext } from '../../contexts/auth';
import { Container, ButtomSignOut, TextSignOut, styles } from './styles';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component'


export default function Dashboard() {
    const { signOut } = useContext(AuthContext);
    const [user, setUser] = useState([]);

    const lista = async () => {
        await api.get('/usuarios').then((response) => {
            setUser(response.data);
        })
    }
    useEffect(() => {
        lista();
    }, [])
    const Item = ({ title }) => (
        <TouchableOpacity onPress={()=> Alert.alert("",title)}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>

    );
    const renderItem = ({ item }) => (
        <Item title={item.nome}/>
    );

    return (
        // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        <Container>
            <View style={styles.header}>
                <Text style={styles.headerText}>Usuários cadastrados</Text>
            </View>
            <FlatList style={styles.flat}
                data={user.usuarios}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <ButtomSignOut onPress={() => signOut()}>
                <TextSignOut>
                    Sair
                </TextSignOut>
            </ButtomSignOut>
        </Container>
        // </ScrollView>
    )
}

