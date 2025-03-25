import React from "react";

const CertificatePreview = ({ certificate }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <img
        src={certificate.template}
        alt="Certificate Template"
        className="w-full h-auto rounded-md"
      />
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-900">{certificate.name}</p>
        <p className="text-sm text-gray-600">{certificate.rank}</p>
      </div>
    </div>
  );
};

export default CertificatePreview;