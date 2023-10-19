import axios from 'axios';
import React from 'react';
import {render} from 'react-dom';

/**
 * Set CSRF token as a header based on the value of the "XSRF" token cookie.
 */
axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.xsrfHeaderName = 'X-Csrf-Token';

// Load components in the application.
import Greet from 'app/components/greet';

// Simple render setup that outputs a react 'application' into the DOM.
// For more robust setups, consider using a library like react-router
// or inertiajs.
if (document.getElementById('react-app')) {
  render(<Greet />, document.getElementById('react-app'));
}
