import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  red: {
    color: "red",
  },
  box: {
    backgroundColor: "black",
    width: 200,
    height: 200,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const Home = () => {
  return (
    <View>
      <Button
        onPress={() => {
          console.log("You tapped the button!");
        }}
        title="Press Me"
      />
      <View style={styles.box}>
        <Text style={styles.text}>Aqui iria uma pergunta</Text>
      </View>
    </View>
  );
};
