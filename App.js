import { StyleSheet, SafeAreaView } from "react-native";
import SignInScreen from "./client/views/SignInScreen";
import SignUpScreen from "./client/views/SignUpScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      <SignUpScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
});
