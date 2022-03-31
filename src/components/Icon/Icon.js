import React from 'react';
import Calculator from './Calculator';
import Karma from './Karma';
import Supervisor from './Supervisor';
import Teambuilder from './TeamBuilder';

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case 'calc':
      return <Calculator {...props} />;
    case 'karma':
      return <Karma {...props} />;
    case 'super':
      return <Supervisor {...props} />;
    case 'team':
      return <Teambuilder {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
