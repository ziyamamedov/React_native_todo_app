import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export const TodoForm = () => {

  return (
    <View>
      <TextInput 
        placeholder='Add todo'
      />
      <Button title='Add'/>
    </View>
  )
}