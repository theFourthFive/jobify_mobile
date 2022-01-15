import { View, TouchableOpacity, StyleSheet } from "react-native";

export default ({ children, onPress }) => (
  <TouchableOpacity style={styles.TouchOpac} onPress={onPress}>
    <View style={styles.plusButton}>{children}</View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TouchOpac: {
    top: -10,
    justifyContent: "center",
    alignItems: "center",
    // ...styles.shadow,
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: "blue",
  },
});
