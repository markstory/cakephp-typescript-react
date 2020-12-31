import React from 'react';
import {render} from '@testing-library/react';

import Greet from 'app/components/greet';

test('renders', function() {
  const {getByText} = render(<Greet />);
  expect(getByText(/Hello/).textContent).toContain('from react');
});
