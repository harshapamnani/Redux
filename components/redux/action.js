import { Add_To_Cart , Remove_From_Cart} from "./constants";

export function AddToCart(item){
       return {    
          type : Add_To_Cart,
          data : item
       }
}

export function RemoveFromCart(item){
        return{
          type : Remove_From_Cart,
          data : item
        }
}