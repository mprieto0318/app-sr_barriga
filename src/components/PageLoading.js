import React from "react";
import "./styles/PageLoading.css";

function PageLoading() {
  return (
    <div
      className="spinner-grow PageLoading justify-content-center" style={{width: '3rem', height: '3rem' }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default PageLoading;
