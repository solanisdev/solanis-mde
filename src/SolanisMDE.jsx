import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import './SolanisMDE.css';

const SolanisMDE = ({ width, height, initialMarkdown }) => {
  const [markdown, setMarkdown] = useState(initialMarkdown || '# Bem-vindo ao Solanis MDE!');
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = new SimpleMDE({
        element: editorRef.current,
        initialValue: markdown,
        spellChecker: false,
        autosave: {
          enabled: true,
          uniqueId: 'SolanisMDE',
          delay: 1000,
        },
      });

      editorInstance.codemirror.on('change', () => {
        setMarkdown(editorInstance.value());
      });

      editorInstanceRef.current = editorInstance;
    }

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.toTextArea();
        editorInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="solanis-mde" style={{ width: width || '100%', height: height || '100vh' }}>
      <textarea ref={editorRef} />
      <div className="preview">
        <div dangerouslySetInnerHTML={{ __html: editorInstanceRef.current?.options.previewRender(markdown) }} />
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
