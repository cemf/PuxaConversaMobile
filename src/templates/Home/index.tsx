import React, { useState } from "react";
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
  const perguntas = require('../../../assets/perguntas.json')

  const [pergunta, setPergunta] = useState("teste");

  const getQuestion = () =>{

    let NewPergunta = perguntas["questoes"][Math.floor(Math.random()*perguntas["questoes"].length)]
    
    return setPergunta(NewPergunta)
  }

  return (
    <View>
      <Button
        onPress={() => {
          getQuestion()
        }}
        title="Press Me"
      />
      <View style={styles.box}>
        <Text style={styles.text}>{pergunta}</Text>
      </View>
    </View>
  );
};
