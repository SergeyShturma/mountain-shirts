import React, { useState } from 'react';

import DropDown from 'hooks/DropDown/DropDown';
import SortingWomen from 'hooks/SortingWomen';
import ImgCarousel from 'components/ImgCarousel/ImgCarousel';

const ShirtsWomenPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingWomen sortDir={sortDir} />
      <ImgCarousel />
    </>
  );
};

export default ShirtsWomenPage;