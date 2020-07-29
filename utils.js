import React from 'react';
import {ToastAndroid,Animated} from 'react-native';

export const toTitleCase = (text) => {
    return text.split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
        .join(' ')
}

export const showToast = (toastMessage) => {
    ToastAndroid.showWithGravityAndOffset(
        toastMessage,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,50
      );
}

export const FadeInView = (props) => {
    const fadeAnim = new Animated.Value(0);
    React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }
        ).start();
      }, [fadeAnim])
    
      return (
        <Animated.View             
          style={{
            opacity: fadeAnim
          }}
        >
          {props.children}
        </Animated.View>
      );
}