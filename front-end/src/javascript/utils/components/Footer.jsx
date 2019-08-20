import React from 'react';
export default function RenderFooter() {
  const date = new Date();

  return (
    <footer className="footer">
      {/* dynamic date for the copyright */}
      <small className="copy">
        &copy; {date.getFullYear()} - Date Night Shuffle
      </small>
    </footer>
  );
}
