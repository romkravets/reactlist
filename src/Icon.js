import React from 'react';
import  T from 'prop-types';
import {iconsConfig} from './iconsConfig';

export const Icon = ({name, ...props}) => {
   const IconC = iconsConfig[name];
   return <IconC {...props}/>;
};

T.prpopTypes = {
   name: T.string.isRequired,
   size: T.string,
   color: T.string,
};

Icon.defaultProps = {
   size: '14px',
   color: '#000',
}
