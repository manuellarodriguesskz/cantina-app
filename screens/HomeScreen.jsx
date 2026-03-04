import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { supabase } from '../supabase'; // Certifique-se que o arquivo supabase.js existe na pasta raiz

export default function HomeScreen() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const { data, error } = await supabase
          .from("cardapio")
          .select("*");

        if (error) throw error;
        setProdutos(data);
      } catch (error) {
        console.log("Erro ao buscar produtos:", error.message);
      } finally {
        setCarregando(false);
      }
    };

    buscarProdutos();
  }, []);

  if (carregando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Itens do Cardápio</Text>
      {produtos.length === 0 ? (
        <Text>Nenhum produto encontrado.</Text>
      ) : (
        produtos.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { 
    padding: 15, 
    backgroundColor: '#f9f9f9', 
    borderRadius: 8, 
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },
  nome: { fontSize: 18, fontWeight: '500' },
  preco: { fontSize: 16, color: '#2e7d32', marginTop: 5 }
});
