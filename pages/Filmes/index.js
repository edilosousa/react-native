import React,{Component} from 'react';
import {SafeAreaView,Text,StyleSheet,FlatList} from 'react-native';
import styled from 'styled-components';
import api from '../../config/configApi';
import Filme from './item';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            filmes: []
        }
    }

    async componentDidMount(){
        const response = await api.get('/usuarios');
        this.setState({
            filmes: response.data.usuarios
        });
        console.log(response.data.usuarios[0]['nome'])
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                data={this.state.filmes}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Filme data={item} />}
                >

                </FlatList>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});