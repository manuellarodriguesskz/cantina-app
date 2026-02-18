import React,{useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    Modal,
} from "react-native";

const produtos = [
    {
        id:"1",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvW9SmsT9TCvbTB35ZnVFlJO9TrqTt5qoHQ&s",
    },

     {
        id:"2",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt84WvkPcRENmhRz0FEv9vx_0u1n7mgz4pPw&s",
    },

     {
        id:"3",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3S7kdcbAr_vR2mg2DmGeGBk4s8iIqN7K0Sg&s",
    },

     {
        id:"4",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflz5_Oq9zOrxBQ--VA4Yr0WYNaZ9sZUKf8Q&s",
    },

     {
        id:"5",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOulhV9TX1LGqgRNX0tng210zU6Th1GIioxg&s",
    },

     {
        id:"6",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPc7Qm_DWALPEsB7HqYXPHgJSaGzDy1YVEOA&s",
    },

     {
        id:"7",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFRlMJHKlBYGG3rDE3srhikhm3GB3U5ANIw&s",
    },

     {
        id:"8",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGD8SCUCzyhu00oAXLsLpLwemril-ihn6hg&s",
    },

     {
        id:"9",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwAM6GSlW6eJEzZ3tFEdBgaEy3-i9sx1TXA&s",
    },

     {
        id:"10",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUNBiNHin6Ry9FFdFDFWhPFZNSEixF0ZtRw&s",
    },

     {
        id:"11",
        nome:"coxinha",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUu06s4Gu9u6EtPIH93sRYssUYe5VYNGQgPQ&s",
        destaque: true,
    },
];

export default function HomeScreen(){
 const [carrinho, setCarrinho] = useState([]);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [busca, setBusca] = useState("");

    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        Alert.alert("Sucesso", `${produto.nome} foi para o carrinho!`);
    };

    const removerDoCarrinho = (indexParaRemover) => {
        const novoCarrinho = carrinho.filter((_, index) => index !== indexParaRemover);
        setCarrinho(novoCarrinho);
    };

    const totalCarrinho = carrinho.reduce((sum, item) => sum + item.preco, 0);

    
    const exibirDados = () => {
        
        if (busca.trim() === "") {
            return produtos.filter(p => p.destaque === true);
        }
        
        return produtos.filter((p) =>
            p.nome.toLowerCase().includes(busca.toLowerCase())
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Cantina Idol</Text>
                <TouchableOpacity style={styles.botaoCarrinho} onPress={() => setModalVisivel(true)}>
                    <Text style={styles.textoCarrinho}>🛒 ({carrinho.length})</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                placeholder="Buscar produto..."
                style={styles.search}
                value={busca}
                onChangeText={(texto) => setBusca(texto)}
            />

            
            <Text style={styles.subtitulo}>
                {busca.trim() === "" ? "Nossas Sugestões ⭐" : "Resultados da busca:"}
            </Text>

            <FlatList
                data={exibirDados()} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.imagem }} style={styles.imagem} />
                        <View style={styles.info}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text style={styles.preco}>R$ {item.preco.toFixed(2).replace('.', ',')}</Text>
                        </View>
                        <TouchableOpacity style={styles.botao} onPress={() => adicionarAoCarrinho(item)}>
                            <Text style={styles.botaoTexto}>comprar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            
            <Modal visible={modalVisivel} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.titulo}>Seu Carrinho</Text>
                    <FlatList
                        data={carrinho}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <View style={styles.itemCarrinho}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.nome}>{item.nome}</Text>
                                    <Text>R$ {item.preco.toFixed(2).replace('.', ',')}</Text>
                                </View>
                                <TouchableOpacity style={styles.botaoRemover} onPress={() => removerDoCarrinho(index)}>
                                    <Text style={styles.textoRemover}>Remover</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        ListEmptyComponent={<Text style={styles.vazio}>O carrinho está vazio!</Text>}
                    />
                    <View style={styles.footerCarrinho}>
                        <Text style={styles.totalTexto}>Total: R$ {totalCarrinho.toFixed(2).replace('.', ',')}</Text>
                        <TouchableOpacity style={styles.botaoFechar} onPress={() => setModalVisivel(false)}>
                            <Text style={styles.botaoTexto}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFF8E1", padding: 16 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
    titulo: { fontSize: 28, fontWeight: "bold", color: "#FF6F00", textAlign: "center" },
    subtitulo: { fontSize: 18, fontWeight: "600", color: "#555", marginBottom: 10 },
    botaoCarrinho: { backgroundColor: '#FF6F00', padding: 10, borderRadius: 50 },
    textoCarrinho: { color: '#fff', fontWeight: 'bold' },
    search: { backgroundColor: "#fff", padding: 10, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: "#ddd" },
    card: { backgroundColor: "#fff", borderRadius: 12, padding: 12, marginBottom: 12, flexDirection: "row", alignItems: "center", elevation: 3 },
    imagem: { width: 50, height: 50, marginRight: 12, borderRadius: 8 },
    info: { flex: 1 },
    nome: { fontSize: 16, fontWeight: "bold" },
    preco: { color: "#4CAF50", marginTop: 4, fontWeight: "600" },
    botao: { backgroundColor: "#FF9800", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
    botaoTexto: { color: "#fff", fontWeight: "bold" },
    modalContainer: { flex: 1, padding: 20, backgroundColor: '#fff' },
    itemCarrinho: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
    botaoRemover: { backgroundColor: '#ffebee', padding: 8, borderRadius: 5 },
    textoRemover: { color: '#c62828', fontWeight: 'bold' },
    footerCarrinho: { borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 20 },
    totalTexto: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'right' },
    botaoFechar: { backgroundColor: '#FF6F00', padding: 15, borderRadius: 10, alignItems: 'center' },
    vazio: { textAlign: 'center', marginTop: 50, color: '#999', fontSize: 16 }
});