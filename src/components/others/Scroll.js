import React from 'react';
const menu = [
   "Items 1", "Items 2", "Items 3", "Items 1", "Items 2", "Items 3", "Items 1", "Items 2", "Items 3"
];


function Scroll() {
   return (
      <div className="w-48 text-gray-900">
         <input className="py-2 px-4 focus:outline-none w-auto" />
         <Items />
      </div>
   );

}
function Items() {
   return (
      <div className="relative rounded-b-lg w-auto">
         <div className="flex absolute flex-col items-center h-32 overflow-y-auto">
            {menu.map((item, idx) => {
               return <input
                  className="py-2 px-4 focus:outline-none w-auto"
                  type="text"
                  key={idx}
                  value={item}
               />;
            })}
         </div>
      </div>
   );
}

export default Scroll;
