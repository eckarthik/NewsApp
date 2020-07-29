import React,{Component} from 'react';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as constants from '../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {toTitleCase,showToast} from "../../utils";

class ChooseInterests extends Component {

   state = {
            categories:[],
            shouldShowChoice:false,
            userChoice:null,
            defaultCategories:constants.defaultCategories
           }
    

    styles = styles;

    onUserChoiceInputChange = (userInput) => {
        this.setState({userChoice:userInput});
    }
    
    onUserChoiceInputSubmit = () => {
        if(this.state.defaultCategories.includes(toTitleCase(this.state.userChoice))) {
            showToast("You have already added this category")
        }
        else {
            if(this.state.categories.length >= 15) {
                showToast("Maximum allowed categories are 15")
            }
            else {
                this.setState({defaultCategories:[...this.state.defaultCategories,toTitleCase(this.state.userChoice)]})
                this.handleSelection(toTitleCase(this.state.userChoice))
            }
        }
    }

    handleSelection = (category) => {
        let currentCategories = this.state.categories.includes(category) ? [...this.state.categories].filter(item => item !== category) : [...this.state.categories,toTitleCase(category)];
        this.setState({categories:currentCategories}) 
    }
    
    saveChoices = async () => {
        if(this.state.categories.length < 3) {
            showToast("Please choose atleast 3 categories")
        }
        else {
            const json = JSON.stringify({
                categories:this.state.categories
            })
            await AsyncStorage.setItem('newsCategories',json);
            this.props.navigation.navigate("NewsScreen",{categories:this.state.categories})
        }
    }

    render() {
        let categories = this.state.defaultCategories;
        let choices = categories.map((category,index) => {
            let buttonStyle = this.state.categories.includes(category) ? this.styles.categoryAddedButton : this.styles.categoryButton;
            let textStyle = this.state.categories.includes(category) ? this.styles.categoryAddedText : this.styles.categoryText;
                return <TouchableOpacity style={buttonStyle} key={index} onPress={() => this.handleSelection(category)}>
                            <Text allowFontScaling={false} style={textStyle}>{category}</Text>
                        </TouchableOpacity>
        })
        return (
            <React.Fragment>
                <View style={this.styles.container}>
                        <Text allowFontScaling={false} style={this.styles.header}>Choose your interests</Text>
                        <View style={this.styles.categories}>
                            {choices}
                        </View>
                        <Text allowFontScaling={false} style={{fontWeight:"bold"}}>Didn't like above options?</Text>
                        <Text allowFontScaling={false} style={{fontWeight:"bold"}}>Feel free to add on your below</Text>
                        <View style={styles.userChoice}>
                            <TextInput style={styles.userChoiceInput} placeholder="Enter category" onChangeText={text => this.onUserChoiceInputChange(text)}/>
                            <TouchableOpacity onPress={this.onUserChoiceInputSubmit}>
                                <Icon name="plus" style={styles.addCategoryIcon}/>
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity style={this.styles.submitButton} onPress={this.saveChoices}>
                            <Text allowFontScaling={false} style={this.styles.submitButtonText}>SAVE CHOICES</Text>
                        </TouchableOpacity>
                </View>
            </React.Fragment>
            
        );
    }
}
export default ChooseInterests;