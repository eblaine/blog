/* @flow */
import React, {Component} from "react";
import "./Border.css"

/**
 * A border inspired by the Lindsay family tartan
 *
 */

export default class Border extends Component<*> {
  render() {
    return (
        [
            <div key={'green'} className={'Border-green Border-line Border-line-vertical'}/>,
            <div key={'purple'} className={'Border-purple Border-line Border-line-horizontal'}/>,
            <div key={'red'} className={'Border-red Border-line Border-line-vertical'}/>,
            <div key={'green2'} className={'Border-green-small Border-line Border-green'}/>,
            <div key={'brown'} className={'Border-brown Border-line Border-line-horizontal'}/>,
        ]
    )
  }
}

