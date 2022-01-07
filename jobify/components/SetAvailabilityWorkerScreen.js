import { StyleSheet, Text, View, Button } from "react-native";

export default function SetAvailabilityWorkerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View styles={styles.menu}>
        <Text>Availability Worker Screen</Text>
        <Button
          title="Routes Menu"
          onPress={() => navigation.navigate("Routes")}
        />
      </View>
    </View>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center"
  },
  menu:{
    flex: 1,
  }
});
