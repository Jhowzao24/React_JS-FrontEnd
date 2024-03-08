import { Fab } from "@mui/material";
import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "https://d1aeri3ty3izns.cloudfront.net/media/38/386261/1200/preview_1.jpg" },
  { id: 2, src: "https://www.saxandwoodwind.com.au/DesktopModules/Revindex.Dnn.RevindexStorefront/Portals/99/Gallery/59d76f7b-490f-4c30-97e4-e57e15d7bdf2.jpg" },
  { id: 3, src: "https://th.bing.com/th/id/OIP.X3xN6Lq42ng1cB1vNUeNCwHaI2?pid=ImgDet&rs=1" },
  { id: 4, src: "https://th.bing.com/th/id/OIP.arIZNnXubGdgrQhU--USPAHaJu?rs=1&pid=ImgDetMain" },
  { id: 5, src: "https://th.bing.com/th/id/OIP.8PRIDOdzKNkI-k4NL3UfpgHaF3?pid=ImgDet&rs=1" },
  { id: 6, src: "https://th.bing.com/th/id/OIP._F0Dc7dPXF65OuKVizIzYgHaOe?rs=1&pid=ImgDetMain" },
  { id: 7, src: "https://th.bing.com/th/id/OIP.8PRIDOdzKNkI-k4NL3UfpgHaF3?pid=ImgDet&rs=1" },
  { id: 8, src: "https://th.bing.com/th/id/OIP.u26cVYcXSVkqMBECfKtooQHaUC?rs=1&pid=ImgDetMain" },
  { id: 9, src: "https://th.bing.com/th/id/OIP._F0Dc7dPXF65OuKVizIzYgHaOe?rs=1&pid=ImgDetMain"},
  { id: 10,src: "https://th.bing.com/th/id/OIP.arIZNnXubGdgrQhU--USPAHaJu?rs=1&pid=ImgDetMain"},
  { id: 11,src: "https://d1aeri3ty3izns.cloudfront.net/media/38/386261/1200/preview_1.jpg"},
  { id: 12,src: "https://www.saxandwoodwind.com.au/DesktopModules/Revindex.Dnn.RevindexStorefront/Portals/99/Gallery/59d76f7b-490f-4c30-97e4-e57e15d7bdf2.jpg"},
  { id: 13,src: "https://http2.mlstatic.com/flauta-transversal-do-niquelada-com-estojo-custom-strauss-D_NQ_NP_662887-MLB27333923450_052018-F.jpg"},
  { id: 14,src: "https://th.bing.com/th/id/R.ed5455899a9448b4467216710085a547?rik=0LcTlYA7G8AXIg&riu=http%3a%2f%2falexwaterhousehayward.com%2fblog%2fuploaded_images%2fFlugelhorn-783665.jpg&ehk=5nRryooy5XDeuRwLLHoFRn1SlwpF8DhALtdnaF3WQuY%3d&risl=&pid=ImgRaw&r=0"},
  { id: 15,src: "https://d1aeri3ty3izns.cloudfront.net/media/38/386261/1200/preview_1.jpg"},
  { id: 16,src: "https://http2.mlstatic.com/flauta-transversal-do-niquelada-com-estojo-custom-strauss-D_NQ_NP_662887-MLB27333923450_052018-F.jpg"},
];

export default function CelloGameApp() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [matchedImages, setMatchedImages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleImageClick = (image) => {
    setSelectedImages([...selectedImages, image]);

    if (selectedImages.length > 0) {
      if (selectedImages[0].id === image.id) {
        setMatchedImages([...matchedImages, image]);
      }
      setSelectedImages([]);
    }
  };

  const renderImages = () => {
    return images.map((image) => {
      const isImageSelected = selectedImages.find(
        (selectedImage) => selectedImage.id === image.id
      );
      const isImageMatched = matchedImages.find(
        (matchedImage) => matchedImage.id === image.id
      );

      if (isImageSelected || isImageMatched) {
        return (
          <div className="imageWrapper" key={image.id}>
            <img style={{width: '150px', height: '150px'}} src={image.src} alt="instrument" className="selectedImage" />
          </div>
        );
      } else {
        return (
          <div style={{alignContent: 'center', alignContent: 'center'}} key={image.id}>
            <br/>
            <Fab
              style={{width: '155px', height: '15px', backgroundColor: 'blue', borderRadius: '10px'}}
              alt="blank"
              className="blankImage"
              onClick={() => handleImageClick(image)}
            />
          </div>
        );
      }
    });
  };

  useEffect(() => {
    if (matchedImages.length === images.length) {
      alert("Parabéns! Você encontrou todos os pares de instrumentos!");
    }
  }, [matchedImages]);

  return <div style={{width: '200px'}} className="app">{renderImages(matchedImages)}<br/></div>;
}