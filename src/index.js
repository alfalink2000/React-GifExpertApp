import React from 'react';
import {createRoot} from 'react-dom/client';
import GifExpertApp from './Components/01-GifExpertApp';
import './styles/index.css';
 
//Recordar aplicar el render en 3 lineas con el createRoot

const root = document.getElementById('root');
const autoRoot = createRoot(root);
autoRoot.render(< GifExpertApp /> );//Recordar dejar un espacio despues del componente