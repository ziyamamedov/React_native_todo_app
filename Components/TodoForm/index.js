import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const TodoForm = ({setTodos, idRef}) => {

  const [inputValue, setInputValue] = useState('')

  const inputChangeHandler = (value) => {
    setInputValue(value)
  }

  const onSubmit = () => {
    if(inputValue) {
      setTodos(prev => [
        ...prev,
        {
          id: idRef.current++,
          text: inputValue
        }
      ])
    }
  }

  return (
    <View style={styles.formWrap}>
      <TextInput
        style={styles.input}
        placeholder='Add todo'
        value={inputValue}
        onChangeText={inputChangeHandler}
      />
      <Button 
        style={styles.submitBtn}
        title='Add Todo'
        onPress={onSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  formWrap: {
    flexDirection: 'row',
    width: '100%'
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    border: '1px solid grey',
    flexGrow: 1,
    marginRight: 20,
  },
});