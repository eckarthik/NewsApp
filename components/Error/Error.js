import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Error = (props) => {
    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        },
        noInternetImage: {
            width:100,
            height:100
        },
        errorMessage: {
            fontSize:20,
            fontWeight:"bold"
        }
    })
    return (
        <View style={styles.container}>
            <Image style={styles.noInternetImage} source={require("./error.png")}/>
            <Text styles={styles.errorMessage}>{props.errorMessage}</Text>
        </View>
    );
}

export default Error;