/* @flow */
import React, {Component} from 'react';
import Markdown from 'markdown-to-jsx';
import styled from "styled-components"
import CodeComponent from "./CodeComponent"

/**
 * A generic post
 */

type PostProps = {
  match: any
};
export default class Post extends Component<PostProps> {
  render() {
    const mdFile = require(`../markdown/${this.props.match.params.md}`);

    return (
        <div>
            <Markdown options={options}>
            {mdFile}
            </Markdown>
        </div>
    )
  }
}


const MainTitle = styled.h1`
  color: #5D71B5;
`;

const SectionTitle = styled.h2`
  margin: 10px 0;
`;

const SubSectionTitle = styled.h3`
  color: #2980b9;
  text-transform: uppercase;
`;

const ParaText = styled.p`
  text-align: left;
  margin: 10px 0;
  line-height: 1.5rem;
`;

const StrongText = styled.strong`
  font-weight: bold;
`;

const ExtLink = styled.a.attrs({
  target: '_blank'
})`
  font-weight: bold;
`;


const DividerLine = styled.hr`
  border: 1px solid #CED9FF;
`;

const Image = styled.img`
  
`;

const options = {
  overrides: {
    h1: {
      component: MainTitle
    },
    h2: {
      component: SectionTitle
    },
    h3: {
      component: SubSectionTitle
    },
    p: {
      component: ParaText
    },
    strong: {
      component: StrongText
    },
    a: {
      component: ExtLink
    },
    code: {
      component: CodeComponent,
      props: {
        language: 'js'
      }
    },
    img: {
      component: Image
    },
    hr: {
      component: DividerLine
    }
  }
};

