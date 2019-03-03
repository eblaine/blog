/* @flow */
import React, {Component} from 'react';
import Markdown from 'markdown-to-jsx';
import styled from "styled-components"
import CodeComponent from "./CodeComponent"

/**
 * A generic post
 */

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

type PostProps = {
  match: any
};

const MainTitle = styled.h1`
  color: #2980b9;
`;

const SectionTitle = styled.h2`
  color: #895fad;
  border-bottom: 2px dashed #333;
  text-align: right;
  margin: 0 20px;
`;

const SubSectionTitle = styled.h3`
  color: #2980b9;
  text-transform: uppercase;
`;

const ParaText = styled.p`
  color: green;
  text-align: left;
  margin: 10px 20px;
  line-height: 1.5rem;
`;

const StrongText = styled.strong`
  color: black;
  padding: 2px;
  text-decoration: underline;
`;

const ExtLink = styled.a.attrs({
  target: '_blank'
})`
  color: #2980b9;
  &:hover {
    color: #ffd700;
  }
`;

const Code = styled.code`

  font-size: 1.125rem;
`;

const DividerLine = styled.hr`
  border: 1px solid #2980b9;
`;

const Image = styled.img`
  border: 5px solid #895fad;
  border-left: none;
  border-right: none
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

