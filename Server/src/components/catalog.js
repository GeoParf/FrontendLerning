module.exports={
  findItem(catalog, id){
    return catalog.find(el => el.id === id);
  },
  filter(catalog, param){
    return param ? catalog.filter(el => el[param]): catalog ;
  },
};