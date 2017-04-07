import React, { Component } from 'react';
import { render } from 'react-dom';

import { ProjectHeader } from './project/ProjectHeader';
import ProjectContent from './project/ProjectContent';

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
