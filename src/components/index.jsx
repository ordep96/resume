import React, { Component } from 'react';

import ResumeForm from './ResumeForm';
import ResumeFinal from './ResumeFinal';

class App extends Component {

  render() {
    return(
      <main className="resume-main resume">
        <ResumeForm />
        <ResumeFinal />
      </main>
    )
  }
}

export default App;