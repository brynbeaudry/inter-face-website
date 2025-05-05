#!/bin/bash

# Check if component name was provided
if [ "$#" -ne 1 ]; then
  echo "Usage: ./gc.sh ComponentName"
  exit 1
fi

# Capitalize the first letter of the component name
ComponentName="$(tr '[:lower:]' '[:upper:]' <<< ${1:0:1})${1:1}"

# Directory where the component will be created
ComponentDir="./src/components/custom/${ComponentName}"

# Create the component directory
mkdir -p "${ComponentDir}"

# Create the React component file
cat > "${ComponentDir}/${ComponentName}.tsx" <<EOF
import React from 'react';
import classes from './${ComponentName}.module.css';

export default function $ComponentName() {
  return (
    <div className={classes.container}>
      <h1>$ComponentName Component</h1>
    </div>
  );
}
EOF

# Create the CSS module file
cat > "${ComponentDir}/${ComponentName}.module.css" <<EOF
.container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
EOF

# Create the test file
cat > "${ComponentDir}/${ComponentName}.test.tsx" <<EOF
import React from 'react';
import { render } from '@testing-library/react';
import $ComponentName from './$ComponentName';
import { describe, it } from 'node:test';

describe('$ComponentName', () => {
  it('renders without crashing', () => {
    render(<$ComponentName />);
  });
});
EOF

echo "Component $ComponentName created successfully in the components directory."

