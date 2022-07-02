import { View, StyleSheet, Text, StatusBar, Image } from 'react-native'
import { useEffect, useState } from 'react'

export default function DetailsScreen ({ navigation, route }) {
  const [users, setUsers] = useState([])
  async function fetchUsersJSON () {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    setUsers(data.users)
  }
  useEffect(() => {
    fetchUsersJSON()
  }, [])
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Details Screen</Text>
    //   <Text>{route.params.id}</Text>

    // </View >
    <View style={styles.container}>
      {users
        .filter(elem => elem.id === route.params.id)
        .map((u, index) => (
          <View style={styles.item}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: u.image
              }}
            />
            <Text>{u.firstName}</Text>
            <Text>{u.lastName}</Text>
            <Text>{u.age}</Text>
            <Text>COMPANY:{u.company.address.address}</Text>
            <Text>POSTAL CODE:{u.company.address.postalCode}</Text>
            <Text>STATE:{u.company.address.state}</Text>
          </View>
        ))}
    </View>
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
