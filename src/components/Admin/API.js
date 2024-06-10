export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los datos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error("Error eliminando:", error);
    }
  };