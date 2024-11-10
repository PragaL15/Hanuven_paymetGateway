const Alert = ({ children, onClose }) => (
  <div className="bg-red-500 text-white p-4 rounded flex justify-between items-center">
    {children}
    <button className="ml-4" onClick={onClose}>
      ×
    </button>
  </div>
);

export default Alert;
