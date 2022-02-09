import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BonusPrize from "./components/BonusPrizes";

const icon = require("./assets/img/lock.svg");

export default function App() {
  // , badge:{icon:(<SvgUri width="100%" height="1005" uri={icon}></SvgUri>)} 
  const images = [
    { uri: require("./assets/img/img_1.png")},
    { uri: require("./assets/img/img_2.png") },
  ];
  return (
    <View style={styles.container}>
      <BonusPrize imgs={images} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2",
    alignItems: "center",
    justifyContent: "center",
  },
});
