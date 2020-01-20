import React from "react";
import "./style.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState([new Date().getFullYear()]);

  return (
    <footer>
      <div>
        <p>Copyright © {currentYear} Northwest Labs</p>
      </div>
    </footer>
  );
}
