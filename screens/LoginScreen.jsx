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

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleLogin() {
    if (!email.includes("@")) {
      Alert.alert("Erro", "Email inválido");
      return;
    }

    if (senha.length < 3) {
      Alert.alert("Erro", "Senha muito curta");
      return;
    }

    Alert.alert("Sucesso!", "Você acessou a cantina DOS PRATOS ASIÁTICOS");
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>

  
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4xgjAzHeY1siaNx604cp39pVaSMsEE1eAA&s"
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>✨ Login Idol ✨</Text>

      <TextInput
        placeholder="Digite seu email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <View style={styles.senhaContainer}>
        <TextInput
          placeholder="Informe sua senha"
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

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
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
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  inputSenha: {
    flex: 1,
    padding: 12
  },
  mostrar: {
    fontSize: 18
  }
});