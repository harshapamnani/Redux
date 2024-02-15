import { Add_To_Cart , Remove_From_Cart } from "./constants";
const initialState = [];

export const reducer = (state = initialState , action) => {
   switch (action.type){
    case Add_To_Cart :
        return[
           ...state,
           action.data
        ]   
        case Remove_From_Cart :
         let result = state.filter((item) => {
              return item.name != action.data
         })
         return[
            ...result
         ]   
        default : return state
   }
     
}