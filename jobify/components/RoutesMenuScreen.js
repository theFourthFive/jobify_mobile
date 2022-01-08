import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import CheckBox from "react-native-check-box";
import CheckBox from "react-native-checkbox";

export default function RoutesMenuScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Routes Menu Screen</Text>
      {/* <CheckBox
        style={{ flex: 1, padding: 10 }}
        checkBoxColor={"skyblue"}
        onClick={() => {
          setSelection(!isSelected);
        }}
        isChecked={isSelected}
        leftText={"CheckBox"}
      /> */}
      <CheckBox
        label="Label"
        checked={isSelected}
        onChange={(checked) => setSelection(!isSelected)}
      />
      <Text></Text>
      <Button
        title="Events"
        onPress={() => navigation.navigate("EventList")}
      />
      {/* <Button
        title="Worker: Add Availability"
        onPress={() => navigation.navigate("SetAvailabilityWorker")}
      /> */}
      {/* <Button
        title="Edit your Profile"
        onPress={() => navigation.navigate("EditProfile")}
      /> */}
      <Button
        title="Worker: Profil"
        onPress={() => navigation.navigate("Profil")}
      />
      <Button
        title="AddEvent"
        onPress={() => navigation.navigate("AddEvent")}
      />

    </View>
  );
}

// prettier ignore
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
});
