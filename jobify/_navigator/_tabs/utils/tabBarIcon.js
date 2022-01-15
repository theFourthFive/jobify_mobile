import { View, StyleSheet } from "react-native";

export default (name, { focused }) => (
  <View style={styles.icon}>
    <FontAwesome5
      name={name}
      size={20}
      color={focused ? "blue" : "gray"}
    ></FontAwesome5>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    // centring Tab Button...
    position: "absolute",
    top: 20,
  },
});
