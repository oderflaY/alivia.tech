import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-200">
      <Text className="text-2xl font-bold text-white">
        Hola, mundo con Tailwind! 🚀
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
