import React, { useState } from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity} from "react-native";

let timer = null;
let seg = 0;
let min = 0;
let hr = 0;

export default function Cronometro() {

const [display, setDisplay] = useState('00:00:00');
const [textobotao, setTextobotao] = useState('Iniciar');
const [tempo, setTempo] = useState(null);

function start(){

    if(timer !== null){
      clearInterval(timer);
      timer = null;
      setTextobotao('Iniciar')
    } else {
        timer = setInterval(() => {
            seg++;
        
        if(seg === 60){
            seg = 0;
            min++;
        }
        if(min === 60){
            min = 0;
            hr++;
        }

        let format = (hr < 10 ?'0' :'') + hr 
        + ':' + (min < 10 ?'0' :'')+ min 
        + ':' + (seg < 10 ?'0' :'')+ seg;
        setDisplay(format)
    } , 1000 );
    setTextobotao('Parar')}



}

function clear(){
    if(timer !== null){
        clearInterval(timer);
        timer = null;
    }

    seg = 0;
    min = 0;
    hr = 0;

    setTempo(display);
    setDisplay('00:00:00'); 
    setTextobotao('Iniciar'); 
}

return(
    <View style = {styles.container}>

        <Image source={require('./assets/cronometro.jpg')} style={styles.image}  />

        <View style={styles.display}>
            <Text style={styles.texto}>{display}</Text>
        </View>
        <View style={styles.botaoarea}>

            <TouchableOpacity style={styles.botao} onPress={start}>
                <Text style={styles.textobotao}>{textobotao}</Text>
            </TouchableOpacity>
        

        <TouchableOpacity style={styles.botao} onPress={clear}>
            <Text style={styles.textobotao}>Reiniciar</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.ultimoTempoArea}>
        <Text style={styles.ultimoTempotext}>{tempo ? 'Ultimo Tempo: ' + tempo : ''}</Text>

        
        </View>
</View>
)}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#9b93fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        flex:1,
        width: 200,
        height: 100,
        margin: 55,
        justifyContent :'flex-end',
        
    },
    display:{
        
        alignItems: 'center',
        margin: 20,
        
        
    },
    texto:{
        fontSize: 80, 
    },
    textobotao:{
        fontSize: 23,
     },

    botaoarea:{
        flexDirection: 'row',
        backgroundColor: '#9b93fa',
        margin: 10,
        justifyContent: 'center',
        
        
        

    },
    botao:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4f3f69',
        margin: 10,
        padding: 30,
        flex:1,
        borderRadius: 20


    },
    ultimoTempoArea:{
        marginBottom: 90
    },
    ultimoTempotext:{
        fontSize: 23,
    }
})






   
        
    