import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WebViewScreen from "../screens/WebViewScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BusinessSearch"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Webview" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
