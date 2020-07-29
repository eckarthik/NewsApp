import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const AppHeader = (props) => {
    const styles = StyleSheet.create({
        appNameHeader : {
            fontSize:25,
            alignItems:"center",
            marginLeft:10,
            fontWeight:"bold"
        },
        appHeader: {
            flex:1,
            flexDirection:"row",
            padding:10,
            borderColor:"black",
            borderBottomWidth:10
        },
        headerTitle:{
            flex:1,
            flexDirection:"column"
        },
        headerNewsCategory:{
            paddingLeft:10,
            color:"red",
            fontWeight:"bold"
        }
    })
    return (
        <TouchableOpacity onPress={props.navigation.toggleDrawer}> 
            <View style={styles.appHeader}>
                <Icon style={styles.hamburgerIcon} name="list" size={40}/>
                <View style={styles.headerTitle}>
                    <Text allowFontScaling={false} style={styles.appNameHeader}>News</Text>
                    <Text allowFontScaling={false} style={styles.headerNewsCategory}>{props.newsCategory}</Text>
                </View>
            </View>
            
        </TouchableOpacity>
            
    );
}

export default AppHeader