import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError">{props.error.message || props.error || "Page Error: Error Desconocido"}</div>;
}

export default PageError;
