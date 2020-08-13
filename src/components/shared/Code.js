import React, { Component } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export class Code extends Component {

   render() {
      return <SyntaxHighlighter
         language={this.props.lang}
         style={dark}
      >


         {this.props.children.replace(/^\s+|\s+$/g, '')}


      </SyntaxHighlighter>;

   }
}

export default Code;
// showLineNumbers = { true};
// startingLineNumber = { 0};
// lineNumberStyle = {{ color: '#ddd', fontSize: 20; }}
// wrapLines = { true};
// lineProps = {(num) => { console.log(num); }}