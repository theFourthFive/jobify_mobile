import { View, StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";
export default (name, { focused }) => (
  <View style={styles.icon}>
    <FontAwesome5
      name={name}
      size={20}
      color={focused ? colors.blue : colors.gray}
    ></FontAwesome5>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    // centring Tab Button...
    position: "absolute",
    top: 20,
  },
});
