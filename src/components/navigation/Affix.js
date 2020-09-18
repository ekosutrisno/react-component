import React from 'react';

function Affix(props) {
   let className = `fixed z-50 cursor-pointer ${props.style}`;
   let childrenClassName = `w-full h-full bg-white rounded shadow p-2 ${props.bg ? `bg-${props.bg}` : ``}`;

   if (props.topLeft)
      className += ` top-0 left-0`;
   if (props.topRight)
      className += ` top-0 right-0`;
   if (props.bottomLeft)
      className += ` bottom-0 left-0`;
   if (props.bottomRight)
      className += ` bottom-0 right-0`;

   let css = {
      marginTop: props.top ? `${props.top}px` : 0,
      marginLeft: props.left ? `${props.left}px` : 0,
      marginRight: props.right ? `${props.right}px` : 0,
      marginBottom: props.bottom ? `${props.bottom}px` : 0
   };


   return (
      <div className={className} style={css}>
         <div className={childrenClassName}>
            {props.children}
         </div>
      </div>
   );
}

export default Affix;
