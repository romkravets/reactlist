import React from 'react';
import  T from 'prop-types';

import './index';

export const Text = ({ size, children }) => (
   <div className="text" style={{fontSize: size }}>
      {children}
   </div>
);

Text.propTypes = {
   size: T.string,
   children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired,
};

Text.defaultProps = {
   size: '14px'
}