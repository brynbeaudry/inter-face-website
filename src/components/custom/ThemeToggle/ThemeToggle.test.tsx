import React from 'react';
import { render } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
import { describe, it } from 'node:test';

describe('ThemeToggle', () => {
  it('renders without crashing', () => {
    render(<ThemeToggle />);
  });
});
