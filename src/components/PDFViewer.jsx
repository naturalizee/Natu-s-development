
import React from "react";
import "../styles/contactForm.scss"

export const PDFViewer = ({ language }) => {
  const handleDownload = () => {
    window.open("/assets/CV_alizee_dereppe_developpeuse_web.pdf", "_blank"); // Ouvre le fichier dans un nouvel onglet
  };

  return (
    <div className="download-cv">
      <button onClick={handleDownload}>
        {language === "fr" ? "Télécharger mon CV" : "Download my CV"}
      </button>
    </div>
  );
};