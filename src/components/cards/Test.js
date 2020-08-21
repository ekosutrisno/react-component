import React, { Component } from 'react';
import { ButtonDefault, ButtonPrimary, ButtonLink, ButtonText } from '../shared/Button';
export class Test extends Component {

   onClickTestEvent() {
      console.log("Testing Event Click Button");
   }
   onHoverTestEvent() {
      console.log("Testing Event Hover Button");
   }
   onFocusTestEvent() {
      console.log("Testing Event Focus Button");
   }
   render() {
      return (
         <div className="flex flex-wrap justify-evenly items-center">
            <div className="py-3">
               <ButtonPrimary
                  onClick={this.onClickTestEvent}
                  onHover={this.onHoverTestEvent}
                  onFocus={this.onFocusTestEvent}
                  btnText="Primary Button 1" />
            </div>
            <div className="py-3">
               <ButtonPrimary
                  shadow
                  btnText="Primary Button 2"
                  onClick={this.onClickTestEvent}
                  onHover={this.onHoverTestEvent}
                  onFocus={this.onFocusTestEvent}
               />
            </div>
            <div className="py-3">
               <ButtonDefault
                  border
                  btnText="Default Button 1"
                  onClick={this.onClickTestEvent}
                  onHover={this.onHoverTestEvent}
                  onFocus={this.onFocusTestEvent}
               />
            </div>
            <div className="py-3">
               <ButtonDefault
                  shadow
                  btnText="Default Button 2"
                  onClick={this.onClickTestEvent}
                  onHover={this.onHoverTestEvent}
                  onFocus={this.onFocusTestEvent}
               />
            </div>
            <div className="py-3">
               <ButtonText btnText="Text Button" href="/cardview" />
            </div>
            <div className="py-3">
               <ButtonLink btnText="Link Button" href="/" />
            </div>
         </div>
      );
   }
}

export default Test;
