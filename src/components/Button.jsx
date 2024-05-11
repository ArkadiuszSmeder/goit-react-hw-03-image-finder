import React, { useState } from 'react';

export const Button = () => {

  const [pageCount, setPageCount] = useState(1);

  const handleLoadMore = () => {
    setPageCount(prevPageCount => prevPageCount + 1);
    console.log(pageCount);
  };
  
    return (
      <button type="button" onClick={handleLoadMore}>Load more</button>
    );
  };

