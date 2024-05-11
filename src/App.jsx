// import { QueryClient, QueryClientProvider } from 'react-query'
// import React, { useState } from "react";
// import { AppContainer } from "styled/styled-appContainer";
// import { ImageGallery } from './components/ImageGallery';
// import { Searchbar } from 'components/Searchbar';
// import { Button } from 'components/Button';
// import { useQuery } from 'react-query'
// import { getImages } from 'utils/getImages'


// const queryClient = new QueryClient()

// function App() {
  
//   const [queryWord, setQueryWord] = useState('');
//   const [pageCount, setPageCount] = useState(1);

//   const handleSearch = (value) => {
//     setQueryWord(value);
//     console.log(value)
//     setPageCount(1); // Resetowanie numeru strony przy każdym nowym wyszukiwaniu
//   };

//   const handleLoadMore = () => {
//     setPageCount(prevPageCount => prevPageCount + 1);
//   };

//   return (
//     <AppContainer>
//       <Searchbar onSubmit={handleSearch}/>
//       <QueryClientProvider client={queryClient}>
//         <ImageGallery inputValue={queryWord} page={pageCount}/>
//         <Button onClick={handleLoadMore}/>
//       </QueryClientProvider>
//     </AppContainer>
//   );
// }

// export default App;

import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useState } from "react";
import { AppContainer } from "styled/styled-appContainer";
import { ImageGallery } from './components/ImageGallery';
import { Searchbar } from 'components/Searchbar';
// import { Button } from 'components/Button';


const queryClient = new QueryClient()

function App() {
  
  const [queryWord, setQueryWord] = useState('');
  const [pageCount, setPageCount] = useState(1);

  const handleSearch = (value) => {
    setQueryWord(value);
    console.log(value)
    setPageCount(1); // Resetowanie numeru strony przy każdym nowym wyszukiwaniu
  };

  // const handleLoadMore = () => {
  //   setPageCount(prevPageCount => prevPageCount + 1);
  // };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSearch}/>
      <QueryClientProvider client={queryClient}>
        <ImageGallery inputValue={queryWord} page={pageCount}/>
        {/* <Button onClick={handleLoadMore}/> */}
      </QueryClientProvider>
    </AppContainer>
  );
}

export default App;
