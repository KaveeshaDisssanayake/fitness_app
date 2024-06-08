
export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'caf4d89e8fmshaefa596d070ff03p196faajsne5db9033d7ce' ,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {

  const response = await fetch(url,options);
 const data = await response.json();

 return data;
}