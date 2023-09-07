import React from "react";
import { FlatList,StyleSheet,Text,View,Image } from "react-native";
 
export default function Profile({imgUri, genero, nome, telefone, email}) {

const dados = {

imgUri: 'https://www.fakepersongenerator.com/Face/female/female20141023767881500.jpg',
genero:'Feminino',
nome:'Elvira C Young',
telefone: '517-200-2218',
email: 'coty1976@yahoo.com'
}

return (

<View style={styles.container}>

<View style = {styles.boxdados}>
            <Text style={styles.titulo}>Dados Pessoais</Text>
            
            </View>



    <Image
        source={{uri:dados.imgUri}}
        style= {styles.Image}/>

        <View style = {styles.boxdados}>
            <Text style={[styles.texto, styles.textoLabel]}>Nome</Text>
            </View>
    
        <View style = {styles.boxdados}>
            <Text style={styles.textod}>{dados.nome}</Text>
            </View>
            
        <View style = {styles.boxdados}>
            <Text style={[styles.texto, styles.textoLabel]}>Telefone</Text>
            
            </View>

        <View style = {styles.boxdados}>
            <Text style={styles.textod}>{dados.telefone}</Text>
            </View>

    <View style = {styles.boxdados}>
            <Text style={[styles.texto, styles.textoLabel]}>Gênero</Text>
            </View>

        
        <View style = {styles.boxdados}>
            <Text style={styles.textod}>{dados.genero}</Text>
            </View>

            
        <View style = {styles.boxdados}>
            <Text style={[styles.texto, styles.textoLabel]}>Email</Text>
            
            </View>
            
        <View style = {styles.boxdados}>
                <Text style={styles.textod}>{dados.email}</Text>
            
            </View>


</View>
)}

const styles = StyleSheet.create({
container: {
   padding: 15,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:35

},
Image:{
    width: 250,
    height: 250,
    borderRadius: 100,
    borderWidth: 3,
    marginBottom: 20,
    borderColor: '#9696ff',
},
boxdados:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
},
texto:{
    fontSize: 23,
    
},

textoLabel:{
fontWeight: 'bold',
textAlign:'center',
color: 'black',



},
textod:{
    flex: 1,
textAlign:'center',
color: 'black',
borderColor: '#9696ff',
padding: 7,
borderRadius: 17,
borderWidth: 3,
fontSize: 20,

},

titulo:{
fontWeight: 'bold',
fontSize: 30,

paddingBottom: 15
}
})


















