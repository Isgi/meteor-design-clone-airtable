import React, { Component } from 'react';
import { render } from 'react-dom';

import { ProjectHeader } from './project/project-header';
import ProjectContent from './project/project-content';

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
