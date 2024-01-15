import React from 'react';


function Header(props) {
  const {count,color}=props
  return (
    <div>
      Khoa nè đây là page khoa {count}
    </div>
  );
}

export default Header;