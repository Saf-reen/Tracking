// import {React, useEffect} from 'react';

// const Card = ({ children, className = '' }) => {
//   return (
//     <div className={`bg-white rounded-xl shadow-lg border border-gray-100 ${className}`}>
//       {children}
//     </div>
//   );
// };

// export default Card;

import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
