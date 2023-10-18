import React, { useState } from "react";
import {StyleSheet, View, FlatList } from "react-native";
import { Button, Text, TextInput, Card, IconButton } from "react-native-paper";


export default function Lista(){
    

    const [tarefa, setTarefa] = useState(["Primeira Tarefa", "Segunda Tarefa"])
    const [inputValue, setInputValue] = useState('')
    const [editando, setEditando] = useState(false)
    const [tarefaSendoEditada, setTarefaSendoEditada] = useState(null)

    function adicionarTarefa() {
        console.log('ADICIONAR TAREFA')
        let novaListaTarefas = tarefa
        novaListaTarefas.push(inputValue)
        setTarefa(novaListaTarefas)
        setTarefaSendoEditada(null)
        setInputValue('')
    }

    function editarTarefa() {
        console.log('EDITAR TAREFA')
        console.log('TarefaSendoEditada: ', tarefaSendoEditada)
        console.log('TarefaASerEditado inputValue: ', inputValue)

        let index = tarefa.indexOf(tarefaSendoEditada)
        let novaListaTarefas = tarefa

        novaListaTarefas.splice(index, 1, inputValue)

        setTarefa(novaListaTarefas)
        setEditando(false)
        setInputValue('')
    }

    function excluirTarefa(tarefas) {
        let novaListaTarefas = tarefa.filter(item => item !== tarefas)
        setTarefa(novaListaTarefas)
    }

    function handleEditarTarefa(tarefas) {
        setTarefaSendoEditada(tarefas)
        setInputValue(tarefas)
        setEditando(true)
    }

    function handleButton() {
        console.log('HANDLE BUTTON -> editando: ', editando)
        if (editando) {
            editarTarefa()
        } else {
            adicionarTarefa()
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <TextInput
                    style={{ flex: 4 }}
                    mode='outlined'
                    label='Digite uma tarefa'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />


                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleButton}
                >
                    {editando ? 'Edit' : 'Add'}
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
                                handleEditarTarefa(item)
                            }} />
                            <IconButton icon='trash-can-outline' onPress={() => {
                                excluirTarefa(item)
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
