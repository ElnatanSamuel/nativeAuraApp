import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View
      style={{ fontFamily: "Poppins-Black" }}
      className="flex-1 items-center justify-center bg-white"
    >
      <Text className="text-7xl font-pextralight font-bold">Aura</Text>
      <Link href="/home">home</Link>
    </View>
  );
};

export default App;
