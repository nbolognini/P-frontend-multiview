import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

import { getItem } from '../../utils/localStorage'; // Importar getItem
import FetchDataComponent from '../../utils/FetchDataComponent';
import DisplayDataComponent from '../../utils/DisplayDataComponent';
import FetchDataUrlComponent from '../../utils/FetchDataUrlComponent';


export const Canal26Page = () => {
  <div>FetchDataComponent();</div>

  const signals = getItem('signals');

  return (
    <>
        <FetchDataComponent />
        <FetchDataUrlComponent />
        <DisplayDataComponent />

        




    </>


  )
}
