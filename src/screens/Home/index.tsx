import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { polyfillWebCrypto } from "expo-standard-web-crypto";

polyfillWebCrypto();

import { Participant } from '../../components/Participant';

import { styles } from './styles';

interface ParticipantsList {
  id: string;
  name: string;
}

export default function Home() {
  const [participants, setParticipants] = useState<Array<ParticipantsList>>([]);
  const [newParticipant, setNewParticipant] = useState<string>('');

  const handleParticipantAdd = () => {
    const nameExists = participants.some((participant) => participant.name === newParticipant);
    if (nameExists) {
      return Alert.alert('Ops!', 'Esse participante já foi adicionado.');
    }

    setParticipants(prevState => [...prevState, { id: uuidv4(), name: newParticipant }]);
    setNewParticipant('');
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover participante', `Deseja remover ${name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter((participant) => participant.name !== name))
      }
    ])
    console.log(`Removendo participante: ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleParticipantRemove(item.name)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhum participante adicionado.</Text>
        )}
      />

    </View>
  );
}