import React, { Component } from 'react';
import { render } from 'react-dom';

import { ProjectHeader } from './project/projectHeader';
import ProjectContent from './project/projectContent';

export default class Project extends Component {
  render() {
    return (
      <div>
        <ProjectHeader />
        <ProjectContent />
      </div>
    )
  }
}
