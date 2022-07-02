import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native'

export default User = ({ username, age, img, nav, id }) => {
  const image = { uri: img }
  return (
    <TouchableOpacity onPress={() => nav.navigate('details', { id: id })}>
      <View style={styles.item}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
          <Text style={styles.title}>{username}</Text>
          <Text style={styles.title}>{age}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    flex: 1,

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0'
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 100,
    height: 100
  }
})
