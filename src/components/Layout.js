import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="offset md:max-w-default mx-auto">
      <div className="pt-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;