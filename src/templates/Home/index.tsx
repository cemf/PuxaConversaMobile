import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    textAlign: "center",
    color: "white",
    marginHorizontal: 30,
  },
  red: {
    color: "red",
  },
  box: {
    backgroundColor: "black",
    width: 300,
    height: 300,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius:3
  },
  askButton: {
    marginTop: 20,
    width:300,
    height:30,
    textAlign: "center",
    backgroundColor: "blue",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius:8
  },
  askText:{
    color: "white",
    textAlign: "center",
  }
});

export const Home = () => {
  const perguntas = require("../../perguntas.json")

  const [pergunta, setPergunta] = useState("Escolha a primeira pergunta");

  const getQuestion = () => {
    let NewPergunta =
      perguntas["questoes"][
        Math.floor(Math.random() * perguntas["questoes"].length)
      ];

    return setPergunta(NewPergunta);
  };

  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.text}>{pergunta}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          getQuestion();
        }}
        style={styles.askButton}
      >
        <View>
          <Text style={styles.askText}>Pergunte</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
