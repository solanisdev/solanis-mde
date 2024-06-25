/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from '@uiw/react-codemirror';
import Markdown from 'react-markdown';
import './SolanisMDE.css';

const SolanisMDE = ({ width, height, initialMarkdown }) => {
  const [markdown, setMarkdown] = useState(initialMarkdown || '# Bem-vindo ao Solanis MDE!');

  const handleMarkdownChange = (editor, value) => {
    setMarkdown(value);
  };

  return (
    <div className="solanis-mde" style={{ width: width || '100%', height: height || '100vh' }}>
      <div className="editor">
        <CodeMirror
          value={markdown}
          options={{
            mode: 'markdown',
            theme: 'material',
            lineNumbers: true,
          }}
          onChange={(editor) => handleMarkdownChange(editor, editor.getValue())}
        />
      </div>
      <div className="preview">
        <Markdown children={markdown} />
      </div>
    </div>
  );
};

SolanisMDE.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  initialMarkdown: PropTypes.string,
};

export default SolanisMDE;
