import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
const store = configureStore()
import configureStore from '../store/configureStore'
import User from './User'
import { View, StyleSheet, StatusBar, FlatList } from 'react-native'
import { Button } from 'react-native-paper'

export default function Users ({ navigation }) {
  const [users, setUsers] = useState([])

  // function to fetch all users array in the object data
  async function fetchMoviesJSON () {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    console.log(data.users[0])
    setUsers(data.users)
  }

  // calling the function with the useEffect in order to get the data in the first render
  useEffect(() => {
    fetchMoviesJSON()
  }, [])

  const renderItem = ({ item }) => (
    <User
      id={item.id}
      nav={navigation}
      username={item.username}
      age={item.age}
      img={item.image}
    />
  )

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <Button
          style={{ borderRadius: 200 }}
          icon='camera'
          mode='contained'
          onPress={() => navigation.navigate('add user')}
        >
          ADD
        </Button>
      </View>
    </Provider>
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
