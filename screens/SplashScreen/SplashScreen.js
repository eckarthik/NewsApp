import React, {Component} from 'react';
import {View,Text,StyleSheet,Image,Animated} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {FadeInView} from '../../utils';

class SplashScreen extends Component {

    state = {
        shouldShowChoice:false,
        newsCategories:[]
    }

    styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        },
        logo:{
            width:100,
            height:100,
            borderRadius:50
        },
        welcomeText:{
            fontSize:20,
            fontWeight:"bold",
            marginLeft:5
        }
    })

    getNewsCategories = async () => {
        const newsCategories = await AsyncStorage.getItem("newsCategories");
        console.log("Stored News Categories SPlash= ",newsCategories)
        if(newsCategories !== null) {
            console.log("Using JSON.parse")
            this.setState({shouldShowChoice:JSON.parse(newsCategories).categories.length === 0,newsCategories:JSON.parse(newsCategories).categories})
        }
        else {
            this.setState({shouldShowChoice:true})
        }
        
    }
    componentDidMount() {
        console.log("ComponentDIdMount SPlash")
        this.getNewsCategories();
    }

    componentDidUpdate() {
        console.log("ComponentDIdUpdater SPlash")
        if(this.state.shouldShowChoice) {
            console.log("Navigating to ChooseInterests")
            this.props.navigation.navigate("ChooseInterestsScreen");
        }
        else {
            console.log("Navigating to NewsScreenr")
            this.props.navigation.navigate("NewsScreen",{categories:this.state.newsCategories});
        }
    }

    render() {

        console.log("Rendering SPlashScreen")
        return (
            <View style={this.styles.container}>
                <FadeInView>
                    <Image style={this.styles.logo} source={require('./logo.png')}/>
                    <Text allowFontScaling={false} style={this.styles.welcomeText}>Daily News</Text>
                </FadeInView>
            </View>
        );
    }
}

export default SplashScreen;