import React from 'react';
const menu = [
   "Items 1", "Items 2", "Items 3", "Items 1", "Items 2", "Items 3", "Items 1", "Items 2", "Items 3"
];


function Scroll(props) {
   return (
      <div className="max-w-xs text-gray-900">
         <div>
            <input className="py-2 px-4 focus:outline-none w-auto" />
         </div>
         <div className="w-full overflow-y-auto h-56">
            <Items />
         </div>
      </div>
   );
}

function Items(props) {
   return (
      <div className="relative rounded-b-lg">
         <div className="flex absolute flex-col items-center">
            {menu.map((item, idx) => {
               return <input
                  className="py-2 px-4 focus:outline-none"
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
