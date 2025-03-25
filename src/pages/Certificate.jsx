import React, { useState } from "react";
import { motion } from "framer-motion";
import CertificateForm from "../components/CertificateForm";
import CertificatePreview from "../components/CertificatePreview";
import Header from "../components/Header";

const Certificate = () => {
  const [selectedHackathon, setSelectedHackathon] = useState("");
  const [templates, setTemplates] = useState({
    winnerTemplate: null,
    participationTemplate: null,
  });
  const [participants, setParticipants] = useState([]);
  const [winners, setWinners] = useState({ 1: "", 2: "", 3: "" });
  const [generatedCertificates, setGeneratedCertificates] = useState([]);

  const hackathons = [
    { id: 1, name: "CodeSprint 2024" },
    { id: 2, name: "HackTheFuture 2024" },
    { id: 3, name: "InnovateX 2024" },
  ];

  const handleHackathonSelect = (e) => {
    const selectedId = e.target.value;
    setSelectedHackathon(selectedId);
    if (selectedId) {
      setParticipants([
        { id: 1, name: "Ananya Roy" },
        { id: 2, name: "Rahul Sharma" },
        { id: 3, name: "Priya Patel" },
        { id: 4, name: "Suresh Kumar" },
      ]);
    } else {
      setParticipants([]);
    }
  };

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Certificate Management" />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-8 overflow-y-auto bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen"
      >

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mb-8 bg-white p-6 rounded-lg shadow-md"
        >
          <label className="block text-lg font-medium text-gray-900">Select Hackathon</label>
          <select
            value={selectedHackathon}
            onChange={handleHackathonSelect}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-600"
          >
            <option value="">Select a Hackathon</option>
            {hackathons.map((hackathon) => (
              <option key={hackathon.id} value={hackathon.id}>{hackathon.name}</option>
            ))}
          </select>
        </motion.div>

        <div className={`${!selectedHackathon ? "opacity-50 pointer-events-none" : ""}`}>
          <CertificateForm
            templates={templates}
            onTemplateUpload={(type, file) => setTemplates((prev) => ({ ...prev, [type]: file }))}
            disabled={!selectedHackathon}
          />

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Select Winners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((rank) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={rank}
                  className="bg-white p-5 rounded-lg shadow-md"
                >
                  <label className="block text-lg font-medium text-gray-700">{`${rank} Place`}</label>
                  <select
                    className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500  text-gray-600"
                    onChange={(e) => setWinners((prev) => ({ ...prev, [rank]: e.target.value }))}
                    disabled={!selectedHackathon}
                  >
                    <option value="">Select Winner</option>
                    {participants.map((participant) => (
                      <option key={participant.id} value={participant.name}>{participant.name}</option>
                    ))}
                  </select>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              const certificates = participants.map((participant) => {
                const isWinner = Object.values(winners).includes(participant.name);
                const rank = Object.keys(winners).find((key) => winners[key] === participant.name);
                return {
                  name: participant.name,
                  template: isWinner ? templates.winnerTemplate : templates.participationTemplate,
                  rank: isWinner ? `${rank} Place` : "Participant",
                };
              });
              setGeneratedCertificates(certificates);
            }}
            className="mt-8 px-6 py-3 bg-gray-800 bg-opacity-50 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedHackathon}
          >
            Generate Certificates
          </motion.button>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Generated Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedCertificates.map((certificate, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={index}
                >
                  <CertificatePreview certificate={certificate} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificate;
