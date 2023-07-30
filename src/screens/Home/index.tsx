import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const participants = [
    { id: uuidv4(), name: "Miguel" },
    { id: uuidv4(), name: "John Doe" },
    { id: uuidv4(), name: "Jane Doe" },
    { id: uuidv4(), name: "Foo Bar" },
    { id: uuidv4(), name: "Lorem Ipsum" },
    { id: uuidv4(), name: "Ana" },
    { id: uuidv4(), name: "Maria" },
    { id: uuidv4(), name: "João" },
    { id: uuidv4(), name: "José" },
    { id: uuidv4(), name: "Pedro" },
    { id: uuidv4(), name: "Paulo" },
    { id: uuidv4(), name: "Lucas" },
  ];

  const handleParticipantAdd = () => {
    console.log('Adicionando participante');
  }

  const handleParticipantRemove = (name: string) => {
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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant) => (
            <Participant
              key={participant.id}
              name={participant.name}
              onRemove={() => handleParticipantRemove(participant.name)} />
          ))
        }
      </ScrollView>
    </View>
  );
}