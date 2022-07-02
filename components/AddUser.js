import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
const AddUser = () => {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput
        label='IMG URL'
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button
        style={{ borderRadius: 400 }}
        mode='outlined'
        onPress={() => alert('user added')}
      >
        SUBMIT
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})

export default AddUser
