import React from 'react';
import { render } from '@testing-library/react';
import HeroBlocks from './HeroBlocks';
import { describe, it } from 'node:test';

describe('HeroBlocks', () => {
  it('renders without crashing', () => {
    render(<HeroBlocks />);
  });
});
