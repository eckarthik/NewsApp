import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
 
class Loader extends React.Component {

  render() {
    return (
        <React.Fragment>
            <View style={styles.loader}>
                <AnimatedLoader
                    visible={true}
                    overlayColor="rgba(255,255,255)"
                    source={require("./LoaderAnimationCircle.json")}
                    animationStyle={styles.animation}
                    speed={1}
                />
                <Text style={styles.loadingText}>Fetching data...</Text>
            </View>
        </React.Fragment>
      
    );
  }
}
 
const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
  loadingText:{
      marginTop:90,
      color:"black",
      fontSize:20
  },
  loader:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  }
});

export default Loader;