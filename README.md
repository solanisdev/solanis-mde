# SolanisMDE

SolanisMDE is a custom Markdown Editor for React, designed to provide an integrated Markdown editing and previewing experience within a single component.

## Features

- **Code Editor**: Uses the `CodeMirror` component from `@uiw/react-codemirror` to provide a feature-rich code editor.
- **Live Preview**: Renders Markdown preview in real-time alongside the editor.
- **Customization**: Supports customization of size (`width` and `height`) and initialization with predefined Markdown content.

## Installation

To install SolanisMDE in your project, you can use npm:

```bash
npm install solanis-mde
```

Or using yarn:

```bash
yarn add solanis-mde
```

## Usage

Here's a basic example of how to use SolanisMDE in a React application:

```jsx
import React from 'react';
import SolanisMDE from 'solanis-mde';

function App() {
  return (
    <div className="App">
      <h1>My Markdown Editor</h1>
      <SolanisMDE width="600px" height="400px" initialMarkdown="# Hello World!" />
    </div>
  );
}

export default App;
```
