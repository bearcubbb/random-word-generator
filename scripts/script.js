// Создаем переменную alphabet с алфавитом
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Генерируем четыре случайных индекса
const idx1 = Math.floor(Math.random() * alphabet.length);
const idx2 = Math.floor(Math.random() * alphabet.length);
const idx3 = Math.floor(Math.random() * alphabet.length);
const idx4 = Math.floor(Math.random() * alphabet.length);

// Формируем случайное слово из символов с полученными индексами
let randomWord = alphabet[idx1] + alphabet[idx2] + alphabet[idx3] + alphabet[idx4];

// Выводим случайное слово на экран
console.log(randomWord);

const parentElement = document.getElementById('randomWordDisplay');

const newElement = document.createElement('p');
newElement.textContent = randomWord;

parentElement.append(newElement);