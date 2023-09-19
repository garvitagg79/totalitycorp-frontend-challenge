import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure(config);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
  );
};

export default App;
