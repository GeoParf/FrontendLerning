export default payload => {
  const {method = 'GET', url, parametres = {}} = payload;
  const base = {method, url};
  switch (method) {
    case 'POST': {
      const {data = {}, params = {}} = parametres;
      base.data = data;
      base.params = params;
      break;
    };

    //case 'DELETE': {
    //}

    default: {
      base.params = parametres;
    };
  };
  return base;
};