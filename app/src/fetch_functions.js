export const fetchData = async (url) => { 
    // When we await a Promise, we are given the resolved value (the Response object)
    // An awaited statement becomes "blocking"
    const response = await fetch(url);
  
    // Since response.json() also returns a Promise, we can await it too.
    const jsonData = await response.json();
  
    // now we do something with the data
     console.log(jsonData);
     return jsonData
  };

  


  // i am here (nicole)
