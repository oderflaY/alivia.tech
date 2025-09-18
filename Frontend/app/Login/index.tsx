import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import "../../global.css";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-11/12 max-w-md bg-white rounded-2xl p-6 shadow-lg">
        <Image
          className="h-48 w-96 object-contain"
          source={require("./../../assets/images/Logo_alivia_color.png")}
        />

        <Text className="text-center text-lg font-semibold mb-4  font-lato-bold">
          Iniciar sesión
        </Text>

        <Text className="text-gray-600 mb-1 font-lato-bold">Correo</Text>
        <TextInput
          placeholder="Ingresar correo"
          value={email}
          onChangeText={setEmail}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4"
          keyboardType="email-address"
        />

        {/* Input Contraseña */}
        <Text className="text-gray-600">Contraseña</Text>
        <TextInput
          placeholder="Ingresar contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4"
        />

        {/* Recordar usuario */}
        <TouchableOpacity
          className="flex-row items-center mb-4"
          onPress={() => setRemember(!remember)}
        >
          <View
            className={`h-5 w-5 rounded border mr-2 ${
              remember ? "bg-blue-600" : "bg-white"
            }`}
          />
          <Text className="text-gray-700">Recordar usuario</Text>
        </TouchableOpacity>

        {/* Botón Iniciar Sesión */}
        <TouchableOpacity className="bg-blue-600 rounded-lg py-3">
          <Text className="text-center text-white font-semibold">
            Iniciar sesión
          </Text>
        </TouchableOpacity>

        {/* Enlace de ejemplo */}
      </View>
    </View>
  );
}
