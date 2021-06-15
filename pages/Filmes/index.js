import React,{Component} from 'react';
import {SafeAreaView,Text,StyleSheet} from 'react-native';
import styled from 'styled-components';
import api from '../../config/configApi';

export default class App extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text>
                    olá mundo.
                </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});