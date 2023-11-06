import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper';

export default function ListaTarefaAsyncStorage() {

    const [tarefa, setTarefa] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [editando, setEditando] = useState(false)
    const [carroSendoEditado, setCarroSendoEditado] = useState(null)


    useEffect(() => {
        loadTarefa()
    },[])


    async function loadTarefa() {
        const response =  await AsyncStorage.getItem('tarefa')
        console.log("🚀 ~ file: ListaTarefa.js:21 ~ loadTarefa ~ response:", response)
        const carrosStorage = response ? JSON.parse(response) : []
        setTarefa(carrosStorage)
    }


    async function adicionarCarro() {
        console.log('ADICIONAR CARRO')
        let novaListaTarefa = tarefa
        novaListaTarefa.push(inputValue)
        await AsyncStorage.setItem('tarefa', JSON.stringify(novaListaTarefa));
        setTarefa(novaListaTarefa)
        setCarroSendoEditado(null)
        setInputValue('')
    }

    async function editarCarro() {
        console.log('EDITAR CARRO')
        console.log('carroSendoEditado: ', carroSendoEditado)
        console.log('carroASerEditado inputValue: ', inputValue)

        let index = tarefa.indexOf(carroSendoEditado)
        let novaListaTarefa = tarefa

        novaListaTarefa.splice(index, 1, inputValue)

        await AsyncStorage.setItem('tarefa', JSON.stringify(novaListaTarefa));
        setTarefa(novaListaTarefa)
        setEditando(false)
        setInputValue('')
    }

    async function excluirCarro(carro) {
        let novaListaTarefa = tarefa.filter(item => item !== carro)
        await AsyncStorage.setItem('tarefa', JSON.stringify(novaListaTarefa));
        setTarefa(novaListaTarefa)
    }

    function handleEditarCarro(carro) {
        setCarroSendoEditado(carro)
        setInputValue(carro)
        setEditando(true)
    }

    function handleButton() {
        console.log('HANDLE BUTTON -> editando: ', editando)
        if (editando) {
            editarCarro()
        } else {
            adicionarCarro()
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <TextInput
                    style={{ flex: 2}}
                    mode='outlined'
                    label='Tarefa'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />


                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleButton}
                >
                    {editando ? 'Edit' : 'Adicionar'}
                </Button>

            </View>



            <FlatList
                style={styles.list}
                data={tarefa}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}
                        mode='outlined'
                    >
                        <Card.Content style={styles.cardContent}>
                            <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
                            <IconButton icon='pen' onPress={() => {
                                handleEditarCarro(item)
                            }} />
                            <IconButton icon='trash-can-outline' onPress={() => {
                                excluirCarro(item)
                            }} />
                        </Card.Content>
                    </Card>
                )}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        width: '95%',
        paddingTop: 10,
        gap: 5
    },
    button: {
        flex: 2,
        padding: 8
    },
    list: {
        width: '95%',
        marginTop: 10
    },
    card: {
        margin: 5
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})