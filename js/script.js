const btn = document.querySelector('button');
const div = document.querySelector('div');
const span = document.querySelector('span');

const names = ["Max", "Gaugan", "Kira", "Saba",
    "Sonia", "Rodos", "Centek", "Rafi"
];

const prefixs = ["Wydaje mi się", "Mam wrażenie",
    "Szczerze powiedziawszy, myślę", "Szczerze uważam",
    "Na 100% twierdzę", "Jestem pewien"
];

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    div.textContent =
        `${prefixs[Math.floor(Math.random() * prefixs.length)]}, 
        że najlepsze będzie imię`;
    span.textContent = `${names[indexName]}`;

}

btn.addEventListener('click', nameGenerator)