import React from 'react';
import {View,Text,Image,StyleSheet,Button} from 'react-native';

const NoInternetError = (props) => {
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
            <Image style={styles.noInternetImage} source={require("./no-internet.png")}/>
            <Text styles={styles.errorMessage}>No Internet Connection Available</Text>
            <Button title="Check Connectivity" onPress={props.clicked}/>
        </View>
    );
}

export default NoInternetError;