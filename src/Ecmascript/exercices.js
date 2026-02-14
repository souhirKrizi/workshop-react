// Exercice 1 : Trouver le mot le plus long
const findLongestWord = (words) => {
  const [first, ...rest] = words; 
  
  const wordsWithLength = words.map(mot => ({
    mot,
    longueur: mot.length
  }));

  const longest = wordsWithLength.reduce((max, current) => {
    return current.longueur > max.longueur ? current : max;
  }, wordsWithLength[0]);

  return `${longest.mot} (longueur: ${longest.longueur})`;
};

// Exercice 2 : Compter les occurrences
const compterOccurrences = (tableauDeTableaux) => {
  return tableauDeTableaux
    .flat()
    .reduce((acc, mot) => {
      acc[mot] = (acc[mot] || 0) + 1;
      return acc;
    }, {});
};

// Exercice 3 : Total des notes avec bonus
const calculerTotalAvecBonus = (eleves) => {
  return eleves
    .map(el => ({
      ...el,
      noteFinale: el.note < 50 ? el.note + 15 : el.note
    }))
    .filter(el => el.noteFinale > 50)
    .reduce((total, el) => total + el.noteFinale, 0);
};

// Exemple d'utilisation Exercice 1
const mots = ["chat", "chien", "éléphant", "souris"];
console.log("Exercice 1:", findLongestWord(mots));

// Exemple d'utilisation Exercice 2
const input = [
  ["kiwi", "banane", "pomme"],
  ["kiwi", "fraise", "banane"],
  ["pomme", "pomme"]
];
console.log("Exercice 2:", compterOccurrences(input));

// Exemple d'utilisation Exercice 3
const notes = [
  { nom: "bella", note: 45 },
  { nom: "sara", note: 72 },
  { nom: "haroun", note: 38 },
  { nom: "lara", note: 65 }
];
console.log("Exercice 3:", calculerTotalAvecBonus(notes));

// Export pour pouvoir utiliser dans d'autres fichiers si nécessaire
export {
  findLongestWord,
  compterOccurrences,
  calculerTotalAvecBonus
};
