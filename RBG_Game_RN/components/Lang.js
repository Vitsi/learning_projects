import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
      <TouchableOpacity onPress={() => setLanguage("en")}>
        <Text style={{ marginHorizontal: 10, fontSize: 16, fontWeight: language === "en" ? "bold" : "normal" }}>🇬🇧 English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLanguage("fr")}>
        <Text style={{ marginHorizontal: 10, fontSize: 16, fontWeight: language === "fr" ? "bold" : "normal" }}>🇫🇷 Français</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLanguage("am")}>
        <Text style={{ marginHorizontal: 10, fontSize: 16, fontWeight: language === "am" ? "bold" : "normal" }}>🇪🇹 አማርኛ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSelector;
