import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { describe, it } from 'node:test';

describe('NavBar', () => {
  it('renders without crashing', () => {
    render(<NavBar />);
  });
});
