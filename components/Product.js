import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native'
import React, { useState , useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { AddToCart, RemoveFromCart } from './redux/action'


const Product = (props) => {
  const item = props.item
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
     dispatch(AddToCart(item))
  }

  const handleRemoveFromCart = (item) => {
    dispatch(RemoveFromCart(item.name))
  }

  const [isSdded , setIsSdded] = useState(false)

  const cartData = useSelector((state) => state.reducer)

  useEffect(() => {
    // if(cartData && cartData.length){
    //       cartData.forEach(element => {
    //        if(element.name == item.name){
    //             setIsSdded(true)
    //        }
    //  });
    // }

    let result = cartData.filter((element) => {
      return element.name == item.name
    })
    if(result.length){
         setIsSdded(true)
    }
    else{
         setIsSdded(false)
    }

  }, [cartData])


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row' ,
            justifyContent: 'space-between',
            width: '95%'}}>
      <Text style={styles.Text}>{item.name}</Text>
      <Text style={styles.Text}>{item.price}</Text>
      <Image style={{width: 100 , height: 100}} source={{uri: item.image}}/>
      </View>

      {isSdded ?
      <TouchableOpacity 
      onPress={() => handleRemoveFromCart(item)}
      style={styles.button}>
        <Text>Remove from cart</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity 
      onPress={() => handleAddToCart(item)}
      style={styles.button}>
        <Text>Add to cart</Text>
      </TouchableOpacity>
      }
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginVertical: 5,
    borderBottomColor: 'orange',
    borderBottomWidth: 1
  },
  button:{
    backgroundColor: 'brown',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '95%',
    marginTop: 10
  },
  Text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
})