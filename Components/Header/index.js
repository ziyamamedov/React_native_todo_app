import { View, Text, StyleSheet } from "react-native"

export const Header = () => {

  return (
    <View style={styles.headerWrap}>
      <Text style={styles.headerTitle}>Todo app</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrap: {
    height: 70,
    width: '100%',
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
