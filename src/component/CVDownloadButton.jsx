import React from 'react';

class CVDownloadButton extends React.Component {
  handleDownloadClick = () => {
    // Remplacez "votre-cv.pdf" par le chemin vers votre CV au format PDF
    const cvUrl = './static/CV.pdf';

    // Créez un élément d'ancre (lien) invisible pour le téléchargement
    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.target = '_blank'; // Ouvrir dans un nouvel onglet
    downloadLink.download = 'CV.Mr.Marie.jpg';

    downloadLink.click();
  };

  render() {
    return (
      <button className="btn-cv" onClick={this.handleDownloadClick}>
        <img
          src="https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5c317c167569f5713dfc8712_file-txt-graphite.svg"
          className="h-16"
          alt="logo"
        ></img>
        <p className="text-center">CV.pdf</p>
      </button>
    );
  }
}

export default CVDownloadButton;
