import React, { useState } from 'react';
import './NoteManager.css';

const NoteManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [inputValue, setInputValue] = useState('');

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  const addNote = () => {
    const note = parseFloat(inputValue);
    
    if (!isNaN(note) && note >= 0 && note <= 20) {
      setNotes([...notes, note]);
      setInputValue('');
    } else {
      alert('Veuillez entrer une note valide entre 0 et 20');
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNote();
    }
  };

  return (
    <div className="note-manager">
      <h2>Note Manager</h2>
      
      <div className="input-section">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Entrez une note (0-20)"
          min="0"
          max="20"
          step="0.5"
          className="note-input"
        />
        <button onClick={addNote} className="btn btn-add">
          Ajouter
        </button>
      </div>

      <div className="average-section">
        <span className="average-label">Moyenne :</span>
        <span className="average-value">{calculateAverage()}</span>
      </div>

      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            <span className="note-value">{note}</span>
            <button 
              onClick={() => deleteNote(index)} 
              className="btn btn-delete"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      {notes.length === 0 && (
        <p className="empty-message">Aucune note enregistrée</p>
      )}
    </div>
  );
};

export default NoteManager;
