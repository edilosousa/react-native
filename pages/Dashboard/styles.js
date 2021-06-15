import styled from 'styled-components';

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