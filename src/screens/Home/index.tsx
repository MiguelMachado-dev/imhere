import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const participants = ["Miguel", "John Doe", "Jane Doe", "Foo Bar", "Lorem Ipsum", "Ana", "Maria", "João", "José", "Pedro", "Paulo", "Lucas"];

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
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)} />
          ))
        }
      </ScrollView>
    </View>
  );
}