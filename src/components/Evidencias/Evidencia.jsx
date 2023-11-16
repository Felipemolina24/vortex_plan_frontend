import React, { useEffect } from 'react';
import { useTasks } from '../../context/Context';

const Evidencia = () => {
  const {evidencias, loadEvidencias } = useTasks();


  useEffect(() => {
    loadEvidencias();
  }, [loadEvidencias]);

  return (
    <div className="container">
        {evidencias.map((image, index) => (
          <div key={index} className="image-item">
            <p>ID: {image.id}</p>
            <img
              src={'http://localhost:4000/' + image.src} alt="Certificado" className="card-img-top"
            />
          </div>
        ))}
      </div>
  );
};

export default Evidencia;
