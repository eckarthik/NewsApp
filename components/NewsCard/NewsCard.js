import React, { PureComponent } from 'react';
import {View,Image,Text,Alert, TouchableOpacity, Share} from 'react-native';
import { Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class NewsCard extends PureComponent {
    
    state = {
        newsImageURL:{uri:this.props.imageURL}
    }

    styles = styles;

    async openNewsInBrowser(url) {
        try {
            if (await InAppBrowser.isAvailable()) {
              await InAppBrowser.open(url, {
                showTitle: true,
                toolbarColor: '#6200EE',
                secondaryToolbarColor: 'black',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false,
                animations: {
                  startEnter: 'slide_in_right',
                  startExit: 'slide_out_left',
                  endEnter: 'slide_in_left',
                  endExit: 'slide_out_right'
                },
                headers: {
                  'View News': 'View Full News'
                }
              })
            }
            else Linking.openURL(url)
          } catch (error) {
            Alert.alert(error.message)
          }
    }

    imageLoadingHandler = () => {
        this.setState({newsImageURL:{uri:this.props.imageURL}})
    }

    imageLoadingErrorHandler = () => {
        this.setState({newsImageURL:require("./fallback.png")})
    }

    onFacebookLinkedInShare = async (newsURL) => {
        console.log("Facebook share clicked")
        await Share.share({
            message:
              newsURL,
          });
    }

    render() {
        return (
            <View style={this.styles.container}>
                    <View style={this.styles.newsCard} >
                    <TouchableOpacity onPress={() => this.openNewsInBrowser(this.props.newsFullURL)}>
                        <Image style={{width:'100%',height:200}} source={
                            this.state.newsImageURL
                        }
                        onError = {this.imageLoadingErrorHandler}
                        />
                        <View style={this.styles.newsDetails}>
                            <Text allowFontScaling={false} style={this.styles.newsTitle}>{this.props.newsTitle}</Text>
                            <Text allowFontScaling={false} style={this.styles.publishedAt}>{new Date(this.props.publishedAt).toLocaleString()}</Text>
                            <Text allowFontScaling={false} style={this.styles.newsDescription}>{this.props.newsDescription}</Text>
                        </View>
                    </TouchableOpacity>
                        <View style={this.styles.socialShare}>
                                <Text allowFontScaling={false} style={this.styles.newsSource}>Source: {this.props.newsSource}</Text>
                                <View style={this.styles.socialIcons}>
                                    <Icon name="facebook-square" onPress={() => this.onFacebookLinkedInShare(this.props.newsFullURL)} size={25} style={{marginHorizontal:5,color:"#3b5998"}}/>
                                    <Icon name="twitter-square" onPress={() => {Linking.openURL("twitter://post?message="+this.props.newsTitle+"\n\n"+this.props.newsFullURL)}} size={25} style={{marginHorizontal:5,color:"#00acee"}}/>
                                    <Icon name="linkedin-square" onPress={() => this.onFacebookLinkedInShare(this.props.newsFullURL)} size={25} style={{marginHorizontal:5,color:"#0e76a8"}}/>
                                    <Icon name="whatsapp" onPress={() => Linking.openURL('whatsapp://send?text='+this.props.newsTitle+"\n\n"+this.props.newsFullURL)} size={25} style={{marginHorizontal:5,color:"#4FCE5D"}}/>
                                </View>
                            </View>
                    </View>
            </View>
        );
    }
    
}

export default NewsCard;