import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Redirect } from 'expo-router'

const HomeScreen = () => {
  return   <Redirect href={"/(home)"} />
}

export default HomeScreen
