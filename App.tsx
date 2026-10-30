import { View, Text, StyleSheet } from 'react-native';

const produits = [
    {id:1, nom: 'Clavier', categorie: 'accessoires', prix: 120, stock: 5},
    {id:2, nom: 'Souris', categorie: 'accessoires', prix: 80, stock: 8},
    {id:3, nom: 'Ecran', categorie: 'informatique', prix: 900, stock: 0},
    {id:4, nom: 'Casque', categorie: 'accessoires', prix: 240, stock: 3}
];
const disponibles = produits.filter((p) => p.stock > 0);
 const valeurTotale = produits.reduce((somme, p) => {
  return somme + (p.prix * p.stock);
}, 0);
export default function App() {
return (
<View style={styles.ecran}>
<Text style={styles.titre}>Produits d'un catalougue</Text>

<Text style={styles.info}>Nombre disponibles : {disponibles.length}</Text>
<Text style={styles.info}>Valeur totale du stock : {valeurTotale} MAD</Text>

</View>
);
}
const styles = StyleSheet.create({

ecran: { flex: 1, justifyContent: 'center', padding:26, 
backgroundColor: '#F2F7FD' },
titre: { fontSize: 26, fontWeight: 'bold', color: '#00235C',
marginBottom: 20 },
info: { fontSize: 19, marginBottom: 12, color: '#003796' },

});


