import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class filme extends Component{
    render(){
        return(
            <View>
                <Text style={styles.nomeFilme}>{this.props.data.usuarios}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    },
    nomeFilme:{
        color:'black',
        fontSize:18
    }
});