import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleLogin() {
    // validação básica
    if (!email.includes("@")) {
      Alert.alert("Sucesso!", "Voce acessou a cantina DOS PRATOS ASIATICOS");
      return;
   
    }
navigation.navigate("Home")
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
      />

      <View style={styles.senhaContainer}>
        <TextInput
          placeholder="Informe sua senha"
          secureTextEntry={!mostrarSenha}
          style={styles.inputSenha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          onPress={() => setMostrarSenha(!mostrarSenha)}
        >
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