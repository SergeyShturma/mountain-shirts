import React, { useState } from 'react';

import SortingChild from 'hooks/SortingChild';
import DropDown from 'hooks/DropDown/DropDown';
import ImgCarousel from 'components/ImgCarousel/ImgCarousel';

const ShirtsChildPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingChild sortDir={sortDir} />
      <ImgCarousel />
    </>
  );
};

export default ShirtsChildPage;