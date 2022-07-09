import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Register from "./screens/register.js";
import ScreenOne from "./screens/screenOne.js";
import ScreenTwo from "./screens/screenTwo.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HamburgerIcon, Menu, Pressable, Text } from "native-base";
import { Image } from "react-native";
import logo from "./assets/planscapelogo.png"
import { AUTH_STORAGE_KEY } from "./utils/utils";


const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='login' component={Login}
            options={{
              headerStyle: { backgroundColor: "#fde047" },
              headerTitle: () => (
                <Image style={{ width: 50, height: 80 }} source={logo} />
              ),

            }
            } />
          <stack.Screen name='register' component={Register}
            options={{
              headerStyle: { backgroundColor: "#fde047" },
              headerTitle: () => (
                <Image style={{ width: 50, height: 80 }} source={logo} />
              ),
            }
            } />
          <stack.Screen name='screenOne' component={ScreenOne}
            options={({ navigation }) => ({
              headerStyle: { backgroundColor: "#fde047" },
              headerTitle: () => (
                <Image style={{ width: 50, height: 80 }} source={logo} />
              ),

              headerRight: () => (
                <Menu w="500" h="500" trigger={triggerProps => {
                  return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                    <HamburgerIcon style={{ width: 50, height: 80 }} />
                  </Pressable>;
                }}>

                  <Menu.Item p="5" onPress={() => navigation.navigate("screenOne")}>
                    <Text fontSize="2xl" fontWeight="bold">
                      ScreenOne
                    </Text>
                  </Menu.Item>
                  <Menu.Item p="5" onPress={() => navigation.navigate("screenTwo")}>
                    <Text fontSize="2xl" fontWeight="bold">
                      ScreenTwo
                    </Text>
                  </Menu.Item>
                  <Menu.Item p="5" onPress={async () => {
                    try {
                      await AsyncStorage.removeItem(AUTH_STORAGE_KEY)
                      navigation.navigate("login")
                    } catch (e) {
                      // remove error
                    }


                  }}>   <Text fontSize="2xl" fontWeight="bold">
                      Logout
                    </Text></Menu.Item>

                </Menu>
              )
            })
            } />
          <stack.Screen name='screenTwo' component={ScreenTwo}
            options={({ navigation }) => ({
              headerStyle: { backgroundColor: "#fde047" },
              headerTitle: () => (
                <Image style={{ width: 50, height: 80 }} source={logo} />
              ),
              headerRight: () => (
                <Menu w="500" h="500" trigger={triggerProps => {
                  return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                    <HamburgerIcon style={{ width: 50, height: 80 }} />
                  </Pressable>;
                }}>

                  <Menu.Item onPress={() => navigation.navigate("screenOne")}>Screen One</Menu.Item>
                  <Menu.Item onPress={() => navigation.navigate("screenTwo")}>Screen Two</Menu.Item>
                  <Menu.Item onPress={async () => {
                    try {
                      await AsyncStorage.removeItem(AUTH_STORAGE_KEY)
                      navigation.navigate("login")
                    } catch (e) {
                      // remove error
                    }


                  }}>Logout</Menu.Item>

                </Menu>
              )
            })
            } />

        </stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}

