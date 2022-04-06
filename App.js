import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './Components/Header';
import { TodoForm } from './Components/TodoForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TodoForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
