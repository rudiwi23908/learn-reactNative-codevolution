// import Welcome from "./components/Welcome.jsx";
// import Learn from "./components/Learn.jsx";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import DataBarang from "./src/screens/DataBarang";
import DataCustomer from "./src/screens/DataCustomer";
import DataKasir from "./src/screens/DataKasir";
import DataPenjualan from "./src/screens/DataPenjualan";

const Stack = createStackNavigator();
export default function App() {
  return (
    // <Learn />
    // <Welcome />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DataBarang"
          component={DataBarang}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="DataKasir" component={DataKasir} />
        <Stack.Screen name="DataPenjualan" component={DataPenjualan} />
        <Stack.Screen name="DataCustomer" component={DataCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
