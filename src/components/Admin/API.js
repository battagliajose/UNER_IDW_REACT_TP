export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los datos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
     
      
      return null;
    }
  };

export const deleteItem = async (url, id) => {
  try {
    const response = await fetch(
      url + id,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Hubo un error al eliminar el item " + id);
    } 
    return response;
  } catch (error) {
    
    return false;
  }
};

export const createItem = async (dataJson, url) => {
  try {
    const response = await fetch(url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataJson),
      }
    );
    if (response.ok) {
      return response;
    }
  } catch (error) {    
    return false;
  }
};

export const updateItem = async (dataJson, url, id) => {
  
  try {
    const response = await fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataJson),
    });
    return response;
  } catch (error) {
    return false;
  }
};