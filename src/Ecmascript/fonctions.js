// Exercice 4 : Tableau Tab + ID auto-incrémenté
let dernierId = 0;

const Tab = [
  { nom: "Souhir", age: 25, ville: "Kébili" },
  { nom: "samar", age: 22, ville: "Gabés" }
];

// Fonction pour ajouter une personne avec un ID auto-incrémenté
const ajouterPersonne = (personne) => {
  dernierId++;
  const nouvellePersonne = {
    id: dernierId,
    ...personne
  };
  Tab.push(nouvellePersonne);
  return nouvellePersonne;
};

// Ajout d'exemples de personnes
ajouterPersonne({ nom: "Nour", age: 22, ville: "Sousse" });
ajouterPersonne({ nom: "Asma", age: 28, ville: "Monastir" });

console.log("Exercice 4: Liste des personnes avec ID");
console.log(Tab);

// Exercice 5 : Fonction de recherche par ID
export const searchById = (tableau, idRecherche) => {
  return tableau.find(item => item.id === idRecherche);
};

// Exemple d'utilisation de searchById
console.log("\nExercice 5: Recherche par ID (ID=2)");
console.log(searchById(Tab, 2));

// Export des éléments nécessaires pour les autres fichiers
export { Tab, ajouterPersonne };
