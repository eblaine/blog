/* @flow */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Posts.css"

/**
 * A list of posts
 */

type PostsProps = {}
export default class Posts extends Component<PostsProps> {
  render() {
    return (
      <div>
        <div className={'Post-container'}>
          <Link to={'/posts/about.md'}>
            <h3 className={'Post-title'}>About me</h3>
          </Link>
          <div className={'Post-date'}>3/4/19</div>
          <div className={'Post-teaser'}>
            My blog's hello world!
          </div>
        </div>
      </div>
    )
  }
}

