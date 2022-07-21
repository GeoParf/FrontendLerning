export default d =>{
  const {data} = d;
  if(!data){
    throw new Error;
    // Здесь может быть обработчик ошибок, которые прислал сервер
  } else {
    return data;
  };
};