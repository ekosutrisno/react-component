import React, { Component } from 'react';

export class ButtonMultiselect extends Component {
   constructor(props) {
      super(props);
      this.state = {
         onSearch: false,
         valueSelected: ''
      };
      this.setValueSelected = this.setValueSelected.bind(this);
   }
   setValueSelected(val) {
      console.log(val);
      this.setState(state => ({ valueSelected: state.valueSelected = val }));
   }

   render() {

      let divClassName = "relative w-full flex flex-col bg-gray-300 text-gray-900 rounded-md";
      let inputClassName = "py-2 px-4 w-full bg-white rounded-md focus:outline-none shadow";
      let optionClassName = "top-0 left-0 absolute py-2 w-full bg-white rounded-b-md border-t-2 shadow-md h-auto";
      let itemClassName = "py-2 px-4 mb-1 bg-white w-full text-left hover:bg-gray-300 transition-color duration-100 focus:outline-none";

      // test Data 
      const elements = [
         { value: 'Eko Sutrisno', label: 'Eko Sutrisno' },
         { value: 'Ahmad Yunandar', label: 'Ahmad Yunandar' },
         { value: 'Puspita Sari', label: 'Puspita Sari' },
         { value: 'Mama Keren', label: 'Mama Keren' },
      ];

      return (
         <div className={divClassName}>
            <div className="relative">
               <input
                  className={inputClassName}
                  type="text"
                  onFocus={() => this.setState(state => ({ onSearch: !state.onSearch }))}
                  onBlur={() => this.setState(state => ({ onSearch: !state.onSearch }))}
               />
               <span className="fa fa-fw fa-caret-down absolute right-0 top-0 mt-3 mr-2"></span>
            </div>
            {
               this.state.onSearch ?
                  <div className={optionClassName} style={{ marginTop: 2.30 + 'rem' }}>
                     {elements.map((value, index) => {
                        return <input
                           className={itemClassName}
                           type="text"
                           value={value.value}
                           key={index}
                           onChange={(e) => this.setValueSelected(e.target.value)}
                        />;
                     })}
                  </div> : null
            }
            <p>{this.state.valueSelected}</p>
         </div>
      );
   }
}

export default ButtonMultiselect;