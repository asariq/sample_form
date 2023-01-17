
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { store } from "./src/redux/store";
 import { Provider } from 'react-redux'
import Todo from "./src/pages/todo";

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <Provider store={store}>
      <NavigationContainer initialroutename={Todo} >

        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Todo" component={Todo} />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>

  )
}

export default App;
