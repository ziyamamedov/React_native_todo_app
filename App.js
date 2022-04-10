import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './Components/Header';
import { TodoForm } from './Components/TodoForm';
import { TodoList } from './Components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([])
  const idRef = useRef(0)

  return (
    <View style={styles.appWrapper}>
      <Header />
      <View style={styles.appContainer}>
        <TodoForm setTodos={setTodos} idRef={idRef} />
        <TodoList todos={todos} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  appContainer: {
    width: '100%',
    paddingHorizontal: '4%'
  }
});
