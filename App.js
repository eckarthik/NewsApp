import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import News from './screens/News/News';
import ChooseInterests from './screens/ChooseInterests/ChooseInterests';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen/SplashScreen';

class App extends Component {

    render() {
      let Stack = createStackNavigator();
      const Drawer = createDrawerNavigator();
    
    return (
      <React.Fragment>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
          <Stack.Screen name="SplashScreen">
              {props => <SplashScreen {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="ChooseInterestsScreen">
              {props => <ChooseInterests {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="NewsScreen">
              {props => <Drawer.Navigator>
                  { 
                    props.route.params.categories.map(category => <Drawer.Screen name={category} key={category}>
                      {(props) => <News name={category} {...props}/>}
                    </Drawer.Screen>)
                  }
                </Drawer.Navigator>}
              
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
       
      </React.Fragment>
    );
  }
}
export default App;
