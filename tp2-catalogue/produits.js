const produits = [
    {id:1, nom: 'Clavier', categorie: 'accessoires', prix: 120, stock: 5},
    {id:2, nom: 'Souris', categorie: 'accessoires', prix: 80, stock: 8},
    {id:3, nom: 'Ecran', categorie: 'informatique', prix: 900, stock: 0},
    {id:4, nom: 'Casque', categorie: 'accessoires', prix: 240, stock: 3}
];
console.log(produits);

for ( const p of produits) {
    console.log(p.nom, p.prix);
    
}

const disponibles = produits.filter((p) => p.stock > 0);
console.log('Produits disponibles :', disponibles.length);

const valeurTotale = produits.reduce((somme, p) => {
  return somme + (p.prix * p.stock);
}, 0);

console.log('Valeur du stock :', valeurTotale, 'DH');

  

   if (disponibles.length === 0) {
      console.log('Aucun produit disponible');
      
    } else {
  const moinsCher = disponibles.reduce((min, p) => {
    
    return p.prix < min.prix ? p : min;
  }
  );
console.log(`le moins cher : ${moinsCher.nom}- ${moinsCher.prix}`);
}
const lignes = produits.map((p) => {
  return `${p.nom} - ${p.prix} MAD - ${p.stock} unités`
}
);
for( ligne of lignes){
  console.log(ligne);
  
}
function estValide(produit) {
  return Number.isFinite(produit.prix) && Number.isFinite(produit.stock)
   && produit.prix >= 0 && produit.stock >= 0 ;
}
console.log(estValide({nom: 'Clavier', categorie: 'accessoires', prix: 120, stock: 5}));
console.log( estValide({nom: 'Souris', categorie: 'accessoires', prix: 80, stock:8}));



  
  





