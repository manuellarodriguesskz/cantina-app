import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleLogin() {
    if (!email.includes("@")) {
      Alert.alert("Erro", "Email inválido");
      return;
   
    }
navigation.navigate("Home")
    if (senha.length < 3) {
      Alert.alert("Erro", "Senha muito curta");
      return;
    }
      navigation.navigate("Home");

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>✨ Login Idol ✨</Text>

      <TextInput
        placeholder="Digite seu email"
        placeholderTextColor="#ddd"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <View style={styles.senhaContainer}>
        <TextInput
          placeholder="Informe sua senha"
          placeholderTextColor="#ddd"
          secureTextEntry={!mostrarSenha}
          style={styles.inputSenha}
          onChangeText={setSenha}
          value={senha}
        />

        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.mostrar}>
            {mostrarSenha ? "🙈" : "👁️"}
          </Text>
        </TouchableOpacity>
      </View>

      <Button title="Entrar 💜" onPress={handleLogin} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  imagem: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 20
  },
  imagem: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 20
  },
  titulo: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    color: "#fff"
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  inputSenha: {
    flex: 1,
    padding: 12,
    color: "#fff"
  },
  mostrar: {
    fontSize: 18,
    color: "#fff"
  }
});
