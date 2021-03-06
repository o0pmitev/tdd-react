import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('Counter Testing', () => {
  test('render the title of counter', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('This is counter app');
    expect(linkElement).toBeInTheDocument();
  });
})

