export const getImages = async (inputValue, page) => {

    const query = `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=42573503-814be0cbf75c4ae20afa280cd&image_type=photo&orientation=horizontal&per_page=12`
    const response = await fetch(query)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

// export const getImages = async (inputValue, page) => {
//   const query = `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=42573503-814be0cbf75c4ae20afa280cd&image_type=photo&orientation=horizontal&per_page=12`
//   const response = await fetch(query)
//   if (!response.ok) {
//     throw new Error('Network response was not ok')
//   }
//   return response.json();
// }
