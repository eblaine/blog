/* @flow */
import React, {Component} from 'react';


/**
 * A generic post
 */

export default class Post extends Component<PostProps> {
  render() {
    return (
        <div>
          {this.props.match.md}
        </div>
    )
  }
}

type PostProps = {
  match: any
};
