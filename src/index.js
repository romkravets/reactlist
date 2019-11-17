import React from 'react';
import ReactDOM from "react-dom";

import './index.css';
import {Text} from  './Text';
import { ToDoInput } from './ToDoInput';
import {Icon} from './Icon';

ReactDOM.render(
   <div className="application">
      <Text size="18px">Todos</Text>
      <ToDoInput onAdd={todo => console.log(todo)}/>
      <Icon name="remove"/>
   </div>,
   document.getElementById('root'));