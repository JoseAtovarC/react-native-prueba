import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Register from "./screens/register.js";
import ScreenOne from "./screens/screenOne.js";
import ScreenTwo from "./screens/screenTwo.js";



const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='login' component={Login} />
          <stack.Screen name='register' component={Register} />
          <stack.Screen name='screenOne' component={ScreenOne} />
          <stack.Screen name='screenTwo' component={ScreenTwo} />

        </stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}

