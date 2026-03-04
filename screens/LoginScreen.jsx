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
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return; 
    }

    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    Alert.alert("Sucesso!", "Você acessou a cantina DOS PRATOS ASIÁTICOS 💜");
    navigation.navigate("Home");
  }


  const uriEmoji = "https://em-content.zobj.net/source/apple/391/biting-lip_1fae6.png";

  return (
    <LinearGradient
      colors={["#2a003f", "#5f0f99", "#a64dff"]}
      style={styles.container}
    >
    
      <View style={styles.headerImagens}>
        <Image source={{ uri: uriEmoji }} style={styles.emoji} />
        
        <Image
          source={{
            uri: "https://i.pinimg.com/236x/49/73/88/4973888f03316822bdf949a2acd013c4.jpg"
          }}
          style={styles.imagemCentral}
        />

        <Image source={{ uri: uriEmoji }} style={styles.emoji} />
      </View>

      <Text style={styles.titulo}>✨ Login Idol ✨</Text>

      <TextInput
        placeholder="Digite seu email"
        placeholderTextColor="#ddd"
        style={styles.input}
        keyboardType="email-address" 
        autoCapitalize="none"       
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

      <Button title="Entrar 💜" onPress={handleLogin} color="#a64dff" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  headerImagens: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  imagemCentral: {
    width: 130,
    height: 130,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  emoji: {
    width: 50,
    height: 50,
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