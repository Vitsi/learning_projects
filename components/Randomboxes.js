import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import gamestyles from "../styles/game.style";
import LanguageSelector from "./Lang"; 

const translations = {
    en: { 
      guess: "Guess the color:", 
      easy: "Easy Mode", 
      hard: "Hard Mode", 
      newGame: "New Game",
      playagain: "Play Again?",
      correct: "Correct!",
      tryAgain: "Try again",
      congrats: "Congratulations!",
      guessed: "You guessed the correct color!"
    },
    fr: { 
      guess: "Devinez la couleur:", 
      easy: "Mode Facile", 
      hard: "Mode Difficile", 
      newGame: "Nouveau Jeu",
      correct: "Correct!",
      playagain: "Rejouer?",
      tryAgain: "Essayez encore",
      congrats: "Félicitations!",
      guessed: "Vous avez deviné la bonne couleur!"
    },
    am: { 
      guess: "ቀለሙን ይገምቱ:", 
      easy: "ቀላል ዘዴ", 
      hard: "ከባድ ዘዴ", 
      newGame: "አዲስ ጨዋታ",
      correct: "ትክክል!",
      playagain: "እንደገና ይጫወታሉ",
      tryAgain: "እንደገና ይሞክሩ",
      congrats: "እንኳን ደስ አሎት!",
      guessed: "ትክክለኛውን ቀለም ገምተውታል!"
    }
  };
  

const RandomBoxes = () => {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("easy");
  const [language, setLanguage] = useState("en");

  // randomizing each color
  const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  //easy, hard mode
  const generateColors = (num) => {
    const newColors = Array.from({ length: num }, () => getRandomRGB());
    const newTargetColor = newColors[Math.floor(Math.random() * num)];
    setColors(newColors);
    setTargetColor(newTargetColor);
    setMessage("");
  };

  // if easy maode, resets to 3 boxes
  const resetGame = () => {
    generateColors(mode === "easy" ? 3 : 6);
  };

  //the alert box translation
  const handleColorPress = (color) => {
    if (color === targetColor) {
      setMessage(translations[language].correct);
      Alert.alert(translations[language].congrats, translations[language].guessed);
    } else {
      setMessage(translations[language].tryAgain);
    }
  };

  useEffect(() => {
    resetGame();
  }, [mode]);

  return (
    <View style={gamestyles.container}>
       
      <LanguageSelector language={language} setLanguage={setLanguage} />

      <Text style={[gamestyles.target, { color: "#000", marginTop: 20 }]}>
        {translations[language].guess} <Text style={{ fontWeight: "bold" }}>{targetColor}</Text>
      </Text>

      <View style={gamestyles.modeContainer}>
        <TouchableOpacity
          style={[gamestyles.modeButton, mode === "easy" && gamestyles.activeButton]}
          onPress={() => setMode("easy")}
        >
          <Text style={gamestyles.modeText}>{translations[language].easy}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[gamestyles.modeButton, mode === "hard" && gamestyles.activeButton]}
          onPress={() => setMode("hard")}
        >
          <Text style={gamestyles.modeText}>{translations[language].hard}</Text>
        </TouchableOpacity>
      </View>

      <View style={gamestyles.colorContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity key={index} 
          style={[gamestyles.box, { backgroundColor: color }]} 
          onPress={() => handleColorPress(color)} />
        ))}
      </View>


      <Text style={[gamestyles.message]}>{message}</Text>

      <TouchableOpacity style={gamestyles.newgamebtn} onPress={resetGame}>
        {message === translations[language].correct ? (
          <Text style={gamestyles.modeText}>{translations[language].playagain}</Text>
        ) : (
          <Text style={gamestyles.modeText}>{translations[language].newGame}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default RandomBoxes;
