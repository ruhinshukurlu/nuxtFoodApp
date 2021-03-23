import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
    fooddata : [],
    cart : []
})


export const mutations = {
  updateFoodData : (state, data)=>{
    state.fooddata = data
  },

  addToCart(state, formData){
    formData.id = uuidv4()
    state.cart.push(formData)
  }
}

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.count, 0);
  },
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0);
  }
};


export const actions = {
  async getFoodData({ state, commit }){
    if (state.fooddata.length) return
    try {
      await fetch("https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",{
        headers : {
          'Content-Type' : 'application/json',
          'x-api-key' : process.env.AWS_API_KEY
        }
      })
      .then(response => response.json())
      .then(data=>{
        console.log('Sucess', data);
        commit('updateFoodData', data)
      })
    }
    catch(err){
      console.log(err);
    }
  }
}