import React from "react";

const CertificateForm = ({ templates, onTemplateUpload, disabled }) => {
  const handleFileChange = (type, e) => {
    const file = e.target.files[0];
    if (file) {
      onTemplateUpload(type, URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Certificate Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Winner Template</label>
          <input
            type="file"
            accept="image/*, .pdf"
            onChange={(e) => handleFileChange("winnerTemplate", e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={disabled}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Participation Template</label>
          <input
            type="file"
            accept="image/*, .pdf"
            onChange={(e) => handleFileChange("participationTemplate", e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateForm;