import { FlatList, ScrollView, StyleSheet } from "react-native"
import { TodoItem } from "../TodoItem"

export const TodoList = ({todos}) => {

  return(
    <ScrollView style={styles.todoListWrap}>
      <FlatList
        data={todos}
        renderItem={({item}) => <TodoItem text={item.text} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  todoListWrap: {

  }
})