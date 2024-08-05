 ItamIdInCart = (ProductID)=>{
        findIndex=()=>{
            if(cartItam.id === ProductID) return 1;
            else return -1;
        }
    }
    const ItamId = ItamIdInCart()()  //store 1 or -1
    shoppingCart=()=>{
        cartItam=[]
        }
        return GetCartItams=()=>{
            return AddCart=()=>{
                if(ItamId=== 1) return cartItam[ItamIdInCart].quantity++;
                else {
                    cartItam.push({id:product})
                }
            }
        }
let product1 = {id:1,name:"Product 1",price:10};
let product2 = {id:1,name:"Product 2",price:10};
const cart = shoppingCart();

console.log("Cart Itams :",cart())
