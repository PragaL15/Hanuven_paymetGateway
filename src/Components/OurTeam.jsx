import { useState } from "react";
import ram from '../Components/Assets/RamKumar.jpg';

function OurTeam() {
  const teamMembers = [
    { name: 'Ram Kumar', role: 'CEO', image: ram, desc: 'Dr. K.R. Ramkumar holds a Ph.D. in Computer Science and Engineering, awarded by Anna University, Chennai, India. With a remarkable 22 years of teaching and 15 years of research experience, his expertise spans various domains, notably Network Security, Cryptography, and Post Quantum Cryptography. Dr. Ramkumar currently serves as an Professor at Chitkara University, Punjab. He dedicates himself to analyzing Ayurvedic remedies for chronic illnesses while infusing them with scientific insights.Additionally, He is the founder of Hanuven Healthcare Products Private Limited, his own startup that specializes in introducing skincare products derived from herbal compositions and formulations.' },
    { name: '', role: 'CTO', image: '', desc: 'Updating...' },
    { name: '', role: 'CFO', image: '', desc: 'Updating...' },
    { name: '', role: 'Marketing', image: '', desc: 'Updating...' },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-16 bg-gray-100" id="team">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="cursor-pointer text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedMember(member)} // Open modal on click
            >
              <img 
                src={member.image || 'https://via.placeholder.com/150'} // Fallback image
                alt={member.name} 
                className="w-36 h-36 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
              onClick={closeModal}
            >
              &#10005;
            </button>
            
            {/* Modal Content */}
            <div className="text-center">
              <img 
                src={selectedMember.image || 'https://via.placeholder.com/150'} 
                alt={selectedMember.name} 
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-1">{selectedMember.name}</h3>
              <p className="text-gray-600 mb-4">{selectedMember.role}</p>
              <p className="text-gray-700">{selectedMember.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default OurTeam;