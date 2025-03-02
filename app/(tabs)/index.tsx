import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert, Button } from "react-native";

const App = () => {
  const [text, setText] = useState("");
  const showAlert = () => {
    Alert.alert("Button Clicked!", "You clicked the Button.");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Type here..."
      />
      <Text>Hello, ReactNative</Text>
      <Button title="PressMe" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
