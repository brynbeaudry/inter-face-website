import React from 'react';
import { render } from '@testing-library/react';
import WavyBackground from './WavyBackground';
import { describe, it } from 'node:test';

describe('WavyBackground', () => {
  it('renders without crashing', () => {
    render(<WavyBackground />);
  });
});
