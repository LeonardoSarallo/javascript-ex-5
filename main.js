var studente = {
  'nome': 'leonardo',
  'cognome': 'sarallo',
  'eta': 33,
}

for (var key in studente) {
  console.log(studente[key]);
}

var studenti = [
  {
    'nome': 'leonardo',
    'cognome': 'sarallo',
    'eta': 33,
  },
  {
    'nome': 'michele',
    'cognome': 'papagni',
    'eta': 30
  },
  {
    'nome': 'tizio',
    'cognome':'caio',
    'eta': 40
  },
];

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome);
}

var nuovoStudente = {
  'nome': prompt('inserisci il tuo nome'),
  'cognome': prompt('inserisci il tuo cognome'),
  'eta': prompt('inserisci la tua età'),
}
studenti.push(nuovoStudente)
console.log(studenti);
