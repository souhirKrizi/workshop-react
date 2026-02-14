import React, { useState } from 'react';
import './ListManager.css';

function ListManager({ initialItems = [], placeholder = "Entrez un nouveau élément" }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="list-manager-container">
      <h2>Liste :</h2>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div className="input-section">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <button onClick={addItem}>Ajouter</button>
      </div>
    </div>
  );
}

export default ListManager;
