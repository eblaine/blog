/* @flow */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/**
 * A list of posts
 */

export default class Posts extends Component<PostsProps> {
  render() {
    return (
      <div>
        <Link to={'/posts/About.md'}>About me</Link>
      </div>
    )
  }
}

type PostsProps = {

}
