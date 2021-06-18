import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../../config/configApi';

import { AuthContext } from '../../contexts/auth';
import { Container, ButtomSignOut, TextSignOut, styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'

export default function Dashboard({navigation}) {
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
    const Item = ({ id, nome, email }) => (
        <TouchableOpacity>
            <View style={styles.item}>
                {/* <Ionicons style={styles.icon} name="information-circle-outline" size={30} color="black"/> */}
                <Text style={styles.title}>ID: {id}</Text>
                <Text style={styles.title}>Nome: {nome}</Text>
                <Text style={styles.title}>e-mail: {email}</Text>
            </View>
        </TouchableOpacity>

    );
    const renderItem = ({ item }) => (
        <Item
            id={item.id}
            nome={item.nome}
            email={item.email}
        />
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
            {/* <ButtomSignOut onPress={() => signOut()}>
                <TextSignOut>
                    Sair
                </TextSignOut>
            </ButtomSignOut> */}
        </Container>
        // </ScrollView>
    )
}

