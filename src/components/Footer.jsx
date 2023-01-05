import React from "react";

function Footer() {
  const year = currentDate.getFullYear();

  return (
    <div>
      <p className="footer" style={customStyle}>
        Copyright {year}
      </p>
    </div>
  );
}

export default Footer;
