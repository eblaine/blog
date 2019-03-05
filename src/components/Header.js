/* @flow */

import me from "../me.jpeg";
import React, {Component} from "react";
import {Link} from 'react-router-dom';


import "./Header.css"
/**
 * Header component
 */

type HeaderProps = {}
export default class Header extends Component<*, HeaderProps> {
  render() {
    return (
        <header className={"App-header"}>
          <Link to={"/posts"}>
            <img src={me} alt={"me"} className={'App-header-photo'}/>
            <svg className={"App-photo-filter"}>
              <filter id="gray">
                <feColorMatrix
                    type="matrix"
                    values="1 -0.3 0 0 0
                        0 1 0 -0.1 0
                        0 1 1 -0.3 0
                        0 0 1.7 1 0 "/>
              </filter>

              <filter id="purple">
                <feColorMatrix
                    type="matrix"
                    values="1 -0.2 0 0 0
                            0 1 0 -0.1 0
                            0 1.2 1 0.1 0
                            0 0 1.7 1 0 "/>
              </filter>
            </svg>


          </Link>
          <div className={'App-header-text'}>
            <Link to={"/posts/about.md"}><h3 className={'App-header-name'}>Ellen Blaine</h3></Link>
            <p className={'App-tagline'}>Pro front-end dev, UX designer</p>
            <p className={'App-tagline'}>Amateur whisky enthusiast</p>
            <p className={'App-tagline'}>Aspiring bogey golfer</p>
            <div className={'Header-img-container'}>
              <a target={"_blank"} href={'https://twitter.com/ln_blaine'}>
                <img alt="twitter" className={'Header-img'} src={require("./icons/twitter.png")}/>
              </a>
              <a target={"_blank"} href={'https://www.linkedin.com/in/ellen-blaine-a95432a2/'}>
                <img alt="linkedin" className={'Header-img'} src={require("./icons/linkedin.png")}/>

              </a>
              <a target={"_blank"} href={'https://www.instagram.com/ln_blaine/'}>
                <img alt="instagram" className={'Header-img'} src={require("./icons/instagram.png")}/>
              </a>
              <a target={"_blank"} href={'https://github.com/eblaine'}>
                <img alt="github" className={'Header-img'} src={require("./icons/github.png")}/>
              </a>
            </div>
          </div>
        </header>
    )
  }
}



