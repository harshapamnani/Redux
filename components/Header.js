import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

const Header = () => {

  const [cartCount , setCartCount] = useState('0')
  const cartData = useSelector((state) => state.reducer)

  useEffect(() => {
     setCartCount(cartData.length)
  }, [cartData])

  return (
    <View style={{alignItems: 'flex-end' , padding: 10 , backgroundColor: 'orange'}}>
      <Text style={styles.Text}>{cartCount}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  Text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
})