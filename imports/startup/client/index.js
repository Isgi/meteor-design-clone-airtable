import React from 'react';
import { render } from 'react-dom';

import { routes } from './routes.js';

Meteor.startup( () => {
	render(routes(), document.getElementById( 'react-root' ));
	$('body').addClass('skin-blue');
});
