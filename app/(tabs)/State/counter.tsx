import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Counter = () => {
  const [counter, setCount] = useState(0);

  const increment = () => {
    setCount(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text>현재 카운트: {counter}</Text>
      <Button title="증가" onPress={increment}></Button>
      <Button
        title="감소"
        onPress={decrement}
        disabled={counter === 0}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Counter;
