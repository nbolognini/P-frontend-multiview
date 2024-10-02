import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getItem } from '../../utils/localStorage'; // Importar getItem

import FetchDataComponent from '../../utils/FetchDataComponent';
import DisplayDataComponent from '../../utils/DisplayDataComponent';

import FetchMultiviewComponent from '../../utils/FetchMultiviewComponent';
import DisplayMultiviewComponent from '../../utils/DisplayMultiviewComponent';


import FetchDataUrlComponent from '../../utils/FetchDataUrlComponent';



export const HomePage = () => {



  return (
    <>
            <FetchMultiviewComponent />
            <DisplayMultiviewComponent />

    </>


  )
}
