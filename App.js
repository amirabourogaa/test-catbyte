
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Users from './components/Users'

import DetailsScreen from './components/DetailsUser'

import AddUser from './components/AddUser'



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='users list' component={Users} />
        <Stack.Screen name='details' component={DetailsScreen} />
        <Stack.Screen name='add user' component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App
