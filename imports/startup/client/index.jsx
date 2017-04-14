import React from 'react';
import { render } from 'react-dom';

import { routes } from './routes';

Meteor.startup( () => {
	render(routes(), document.getElementById( 'react-root' ));
});
