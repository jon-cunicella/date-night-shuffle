import React from 'react';
export default function RenderFooter() {
  const date = new Date();

  return (
    <footer className="footer">
<<<<<<< HEAD
      {/* dynamic date for the copyright */}
      <small className="copy">
        &copy; {date.getFullYear()} - Date Night Shuffle
      </small>
=======
      <small className="copy">&copy; 2019 - Date Night Roulette</small>
>>>>>>> dev
    </footer>
  );
}
