import React from 'react';
import ReactDOM from "react-dom";

import './index.css';
import {Text} from  './Text';
import { ToDoInput } from './ToDoInput';

ReactDOM.render(
   <div className="application">
      <Text size="18px">Todos</Text>
      <ToDoInput onAdd={todo => console.log(todo)}/>
   </div>,
   document.getElementById('root'));