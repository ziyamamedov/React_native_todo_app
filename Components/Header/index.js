import { View, Text, StyleSheet } from "react-native"

export const Header = () => {

  return (
    <View style={styles.headerWrap}>
      <Text>Todo app</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrap: {
    height: 70,
    backgroundColor: 'violet'
  },
});
