import React,{useState} from "react";
import {View,Text,Image,StyleSheet, TouchableOpacity}  from "react-native";
export default function Biscoito(){
    const [frase, setFrase]= useState("");
    const[quebrado,serQuebrado]= useState(false);

    const frases = [
        "Siga os bons e aprenda com eles.",
        "O bom-senso vale mais do que muito conhecimento.",
        "O riso é a menor distância entre duas pessoas.",
        "Deixe de lado as preocupações e seja feliz.",
        "Realize o óbvio, pense no improvável e conquiste o impossível.",
        "Acredite em milagres, mas não dependa deles.",
        "A maior barreira para o sucesso é o medo de falhar."
    ];

    const quebrarBiscoito = () =>{ 
        if (!quebrado){ 
            const randomIndex = Math.floor(Math.random() * frases.length);
            setQuebrado(true);
        }

};
    const reiniciarBiscoito = () => {
        setFrase("");
        setQuebrado(false);
    };
    return (
        <View style={styles.container}>{quebrado ? (<Image source={require("./assets/biscoitoInteiro.png")} style={styles.image}/>):(<Image style={styles.image} source={require("./assets/biscoitoQuebrado.png")}/>)})
        <View style = {styles.container}>  <Text style = {styles.texto}>{frase}</Text>     </View>
        <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito} disabled={quebrado}>
            <Text style={styles.botaoTexto}>Quebrar Biscoito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={reiniciarBiscoito} disabled={!quebrado}>
            <Text style={styles.botaoTexto}>Reiniciar Biscoito</Text>
        </TouchableOpacity>
    </View>);
    

}

const styles = StyleSheet.create({
    
})