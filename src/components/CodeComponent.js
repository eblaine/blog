/* @flow */
import React, {Component} from 'react';
import Highlight from "react-highlight.js";

/**
 * Code with syntax highlighting
 */

export default class CodeComponent extends Component<CodeComponentProps> {
  render() {
    return (
        <Highlight language={this.props.language}>
          {this.props.children}
        </Highlight>
    )
  }
}

type CodeComponentProps = {
  language: string,
  children: any
}