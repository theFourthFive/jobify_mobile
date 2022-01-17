import { View, Text, StyleSheet } from "react-native";

import AddEvent from "../../../../components/companies/AddEvent";

export default () => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <AddEvent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
