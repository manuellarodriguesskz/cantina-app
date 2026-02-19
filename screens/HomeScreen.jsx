import React,{useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    ImageBackground,
} from "react-native";

const produtos = [
    {
        id:"1",
        nome:"Lisa",
        preco:5.00,
        imagem:"https://jeccachantilly.com/wp-content/uploads/2023/05/korean-pork-bone-soup-2.jpg",
        destaque: false,
    },

     {
        id:"2",
        nome:"Rosé",
        preco:5.00,
        imagem:"https://marcwiner.com/wp-content/uploads/2024/10/Kimchi-jigae-en-tete.jpg",
        destaque: false,
    },

     {
        id:"3",
        nome:"jimin(Kimchi-jjigae)",
        preco:6.00,
        imagem:"https://i.pinimg.com/1200x/37/d9/c1/37d9c13358675c79521932c7aadb4df5.jpg",
        destaque: false,
    },

     {
        id:"4",
        nome:"jungcook",
        preco:3.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvW9SmsT9TCvbTB35ZnVFlJO9TrqTt5qoHQ&s",
        destaque: false,
    },

     {
        id:"5",
        nome:"Kimbap",
        preco:3.50,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOulhV9TX1LGqgRNX0tng210zU6Th1GIioxg&s",
        destaque: false,
    },

     {
        id:"6",
        nome:"Matcha Muffins",
        preco:2.50,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPc7Qm_DWALPEsB7HqYXPHgJSaGzDy1YVEOA&s",
        destaque: false,
    },

     {
        id:"7",
        nome:"Tangyuan",
        preco:5.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFRlMJHKlBYGG3rDE3srhikhm3GB3U5ANIw&s",
        destaque: false,
    },

     {
        id:"8",
        nome:"V (japchae)",
        preco:6.00,
        imagem:"https://i.pinimg.com/736x/5a/f5/52/5af552ffa4a0f937e1e83af7d25bc99e.jpg",
        destaque: true,
    },

     {
        id:"9",
        nome:"jungcook (samgyeopsal)",
        preco:6.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvW9SmsT9TCvbTB35ZnVFlJO9TrqTt5qoHQ&s",
        destaque: true,
    },

     {
        id:"10",
        nome:"j-hope (kimchi)",
        preco:6.00,
        imagem:"https://sugaryums.com/wp-content/uploads/2023/03/Baechu-Kimchi-Cabbage-Kimchi-Recipe-SugarYums-2-1152x1536.jpg",
        destaque: true,
    },

     {
        id:"11",
        nome:"mochi",
        preco:2.00,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUu06s4Gu9u6EtPIH93sRYssUYe5VYNGQgPQ&s",
        destaque: true,
    },
];

export default function HomeScreen(){
 const [carrinho, setCarrinho] = useState([]);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [busca, setBusca] = useState("");
    const [mostrarMensagem,setMostrarMensagem] = useState(false)

    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        setMostrarMensagem(true);
        setTimeout(()=>{
          setMostrarMensagem(false);
        },2000);    
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
        <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/736x/01/f4/e2/01f4e265a855859a6eefb44122bb0a41.jpg' }}
        style={styles.container}>
          {mostrarMensagem &&(
          <View style={styles.alertCustomizado}>
                    <Text style={styles.alertTexto}>Produto adicionado! ✅</Text>
                </View>)}
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
                            <Text style={styles.preco}>
                               ₩ {(item.preco * 1000).toLocaleString('pt-BR')}
                            </Text>
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
                                    <Text>₩ {(item.preco * 1000).toLocaleString('pt-BR')}</Text>
                                </View>
                                <TouchableOpacity style={styles.botaoRemover} onPress={() => removerDoCarrinho(index)}>
                                    <Text style={styles.textoRemover}>Remover</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        ListEmptyComponent={<Text style={styles.vazio}>O carrinho está vazio!</Text>}
                    />
                    <View style={styles.footerCarrinho}>
                        <Text style={styles.totalTexto}>Total: ₩ {(totalCarrinho * 1000).toLocaleString('pt-BR')}</Text>
                        <TouchableOpacity style={styles.botaoFechar} onPress={() => setModalVisivel(false)}>
                            <Text style={styles.botaoTexto}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16 
    },

    header: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginBottom: 15 
    },

    titulo: { 
        fontSize: 28, 
        fontWeight: "bold", 
        color: "#901090", 
        textAlign: "center" 
    },

    subtitulo: { 
        fontSize: 18, 
        fontWeight: "600", 
        color: "#901090", 
        marginBottom: 10 
    },

    botaoCarrinho: { 
        backgroundColor: '#901090', 
        padding: 10, 
        borderRadius: 50 
    },

    textoCarrinho: { 
        color: '#b968b9', 
        fontWeight: 'bold' 
    },

    search: { 
        backgroundColor: "#901090", 
        padding: 10, 
        borderRadius: 10, 
        marginBottom: 15, 
        borderWidth: 1, 
        borderColor: "#ddd" 
    },
    card: { 
        backgroundColor: "#901090",
        borderRadius: 12, 
        padding: 12, 
        marginBottom: 12, 
        flexDirection:"row", 
        alignItems: "center", 
        elevation: 3, 
        opacity:0.8, 
    },

    imagem: { 
        width: 50, 
        height: 50, 
        marginRight: 12, 
        borderRadius: 8 },
    info: { 
        flex: 1 
        },
    nome: { 
        fontSize: 16, 
        fontWeight: "bold", 
        color:"#fff" },

    preco: { 
        color: "#4CAF50", 
        marginTop: 4, 
        fontWeight: "600" },

    botao: { 
        backgroundColor: "#b968b9", 
        paddingVertical: 8, 
        paddingHorizontal: 12, 
        borderRadius: 8, 
    },

    botaoTexto: {
        color: "#fff", 
        fontWeight: "bold" 
    },

    modalContainer: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: '#fff' 
    },

    itemCarrinho: { 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: 15, 
        borderBottomWidth: 1, 
        borderBottomColor: '#eee', 
        alignItems: 'center' 
    },

    botaoRemover: { 
        backgroundColor: '#ffebee',
        padding: 8, 
        borderRadius: 5 
    },

    textoRemover: { 
        color: '#c62828',
        fontWeight: 'bold' 
    },

    footerCarrinho: { 
        borderTopWidth: 1, 
        borderTopColor: '#ddd',
        paddingTop: 20 
    },

    totalTexto: { 
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'right' 
    },

    botaoFechar: { 
        backgroundColor: '#FF6F00',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center' 
    },

    vazio: { 
        textAlign: 'center',
        marginTop: 50,
        color: '#901090',
        fontSize: 16 
    },

 alertCustomizado: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        backgroundColor: '#b968b9',
        padding: 15,
        borderRadius: 10,
        zIndex: 100, 
        alignItems: 'center',
        elevation: 10, 
        borderColor:'#901090',
        borderWidth: 3,
    },
    
    alertTexto: {
        color: '#901090',
        fontWeight: 'bold',
        fontSize: 16
    },
});