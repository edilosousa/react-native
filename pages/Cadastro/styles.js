import styled from 'styled-components';
import { StyleSheet, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
`;

export const ButtomSignOut = styled.TouchableOpacity`
    background-color: #fff;
    width: 90%;
    height: 40px;
    align-items: center;
    justify-content:center;
    border:1px solid #0d6efd;
    border-radius: 7px;
`;

export const TextSignOut = styled.Text`
    color: #0d6efd;
    font-size: 22px;
`;

export const ButtomShow = styled.TouchableOpacity`
    background-color: #fff;
    width: 90%;
    height: 40px;
    align-items: center;
    justify-content:center;
    border:1px solid #0d6efd;
    border-radius: 7px;
`;

export const TextShow = styled.Text`
    color: #0d6efd;
    font-size: 22px;
`;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,

    },
    item: {
        backgroundColor: "#FFF",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        marginVertical: 9,
        marginHorizontal: 6,
        alignSelf: 'stretch',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 1,    
        borderColor: '#D3D3D3'
    },
    title: {
        fontSize: 12,
        color: '#808080'
    },
    flat: {
        alignSelf: 'stretch',
    },
    header:{
        width: '100%',
        height: '13%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        
    },
    headerText:{
        color: '#4F4F4F',
        fontSize:18
    },
    icon:{
        marginTop: '5%',
        marginLeft:'90%',
        position: 'absolute'
    }
});