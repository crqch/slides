export const code3 = {
	intro: [
		{
			html: `<h1 id="target">Hello!</h1>

<script>
  // JavaScript to język skryptowy.
  // W przeglądarce kod wpisujemy wewnątrz tagu <script>.
</script>`,
			css: ``
		},
		{
			html: `<h1 id="target">Hello!</h1>

<script>
  // document to obiekt reprezentujący całą stronę (DOM)
  const el = document.getElementById('target');

  // Zmieniamy tekst wewnątrz elementu
  el.innerText = 'Witaj Świecie!';
</script>`,
			css: ``
		}
	],
	variables: [
		{
			html: `<h1 id="res">...</h1>

<script>
  // const - stała (nie można zmienić przypisania)
  // let - zmienna (można zmieniać wartość)
  const imie = "Michał";
  let wiek = 20;

  const el = document.getElementById('res');
  // Łączenie stringów za pomocą operatora +
  el.innerText = imie + " ma " + wiek + " lat";
</script>`,
			css: ``
		},
		{
			html: `<h1 id="res">...</h1>

<script>
  const imie = "Michał";
  const wiek = 20;

  // Template Literals (Backtick \`)
  // Pozwalają na wstawianie nie tylko zmiennych, ale dowolnego kodu JS w \${}
  document.getElementById('res').innerText = \`\${imie} ma \${wiek} lat\`;
</script>`,
			css: ``
		},
		{
			html: `<h1 id="res">...</h1>

<script>
  const cena = 100;
  const podatek = 0.23;

  // Wewnątrz \${} można wykonywać dowolne operacje matematyczne i logiczne
  document.getElementById('res').innerText = \`Cena brutto: \${cena * (1 + podatek)} PLN\`;
</script>`,
			css: ``
		},
		{
			html: `<h1 id="res">...</h1>

<script>
  const imie = "michał";

  // Można wywoływać metody na obiektach/stringach
  document.getElementById('res').innerText = \`Witaj, \${imie.toUpperCase()}!\`;
</script>`,
			css: ``
		},
		{
			html: `<h1 id="res">...</h1>

<script>
  // Typy proste: string, number, boolean (true/false)
  const czyPrawda = true;
  const liczba = 42.5; // Wszystkie liczby to typ "number"

  document.getElementById('res').innerText = \`Typ czyPrawda: \${typeof czyPrawda}\`;
</script>`,
			css: ``
		},
		{
			html: `<ul id="list"></ul>

<script>
  // Tablice (Arrays) - indeksowane od 0
  const owoce = ["Jabłko", "Banan", "Wiśnia"];

  // Pobieramy element listy
  const list = document.getElementById('list');

  // Wstawiamy pierwszy element tablicy
  list.innerHTML = \`<li>\${owoce[0]}</li>\`;
</script>`,
			css: ``
		},
		{
			html: `<pre id="out"></pre>

<script>
  // Obiekty (Objects) - klucz: wartość
  const student = {
    imie: "Jan",
    nazwisko: "Kowalski",
    rok: 2
  };

  // Dostęp przez kropkę
  document.getElementById('out').innerText = \`Student: \${student.imie} \${student.nazwisko}\`;
</script>`,
			css: ``
		},
		{
			html: `<h1 id="res">...</h1>

<script>
  // Funkcje (Functions)
  // Pozwalają na wielokrotne użycie tego samego kodu
  function ustawTekst(nowyTekst) {
    const el = document.getElementById('res');
    el.innerText = nowyTekst;
  }

  ustawTekst("Tekst ustawiony przez funkcję!");
</script>`,
			css: ``
		},
		{
			html: `<h1 id="res">...</h1>

<script>
  // Przykład funkcji pomocniczej (utility function)
  const updateContent = (text) => {
    document.getElementById('res').innerText = text;
  };

  updateContent("Zmieniono zawartość przez funkcję strzałkową");
</script>`,
			css: ``
		},
		{
			html: `<h1 id="res">...</h1>

<script>
  const updateContent = (text) => {
    document.getElementById('res').innerText = text;
  };

  // Operacje matematyczne
  let x = 10;
  x = x ** 2; // Potęgowanie (10^2)

  const wynik = (x + 50) / 3;

  updateContent(\`Wynik: \${wynik}\`);
</script>`,
			css: ``
		},
		{
			html: `<h1 id="res">...</h1>

<script>
  const updateContent = (text) => {
    document.getElementById('res').innerText = text;
  };

  // Warunki (if/else)
  const godzina = new Date().getHours();
  let powitanie;

  if (godzina < 12) {
    powitanie = "Dzień dobry";
  } else {
    powitanie = "Dobry wieczór";
  }

  // Użycie warunku wewnątrz template literal (ternary operator)
  updateContent(\`\${powitanie}, teraz jest \${godzina < 18 ? 'dzień' : 'wieczór'}\`);
</script>`,
			css: ``
		}
	]
};
