import instance from '@api/core';

const url = '/cart';

export const cart = {
  async getCart(){
    try{
      const data = await instance({url});
      return data;
    }
    catch(err){
      throw err;
    };
  },

  async postCart(payload){
    console.log(payload);
    const method = 'POST';
    const {params} = payload;
    try{
      console.log(params);
      const data = await instance({url:this.url, method, params});
      console.log(data);
      return data;
    }
    catch(err){
      throw err;
    };
  },

  // Put
  // Delite
};