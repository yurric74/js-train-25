//Завдання 1

// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

async function getData() {
try {// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
const data = await fetchFakeData();// Використовуємо try для обробки помилок
console.log(data);} // Використовуємо await для очікування виконання Promise.
// Дані виводимо в консоль після отримання їх з Promise.
catch(error) {console.error(error);}}// Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.

// Розкоментуйте після виконання завданння
// console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
 getData();

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}
async function logRandomNumberAfterSeconds(seconds) {
// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
try {// Використовуємо try для обробки помилок
  const randomNumber = await getRandomNumberAfterSeconds(seconds);
  console.log(randomNumber);}
// Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
// В функцію потрібно передати в seconds в якості аргументу
// Результат виконання функції присвоюється константі randomNumber.
// Виводимо отримане випадкове число в консоль
// Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
catch (error) {console.error(error);}}
// Розкоментуйте після виконання завданння
 console.log("Завдання: 2 ==============================");
 logRandomNumberAfterSeconds();

//Завдання 3
async function getDataFromUrl(url) {// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
  try {// Використовуємо try для обробки помилок
    const response = await fetch(url);
// Використовуємо fetch для відправки GET-запиту на вказаний URL
if (!response.ok) {
  throw new Error(`Помилка при запиті: ${response.status}`);}
// Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль
const data = await response.json();
// Конвертуємо відповідь у формат JSON
console.log(data);}
// Виводимо дані в консоль
// Виводимо помилки в консоль якщо вони є
catch (error) {
  console.error(error);}}
// Розкоментуйте після виконання завданння
 console.log("Завдання: 3 ==============================");
 getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
async function postDataWithAuth(url, data, authToken) {
  try {
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
// Використовуємо try для обробки помилок
const response = await fetch(url, {
  method: 'POST',
  headers: {'Content-Type': 'application/json',
  'Authorization': `Bearer ${authToken}`,},
  body: JSON.stringify(data),});
// Використовуємо fetch для відправки POST-запиту на вказаний URL
// Вказуємо метод запиту POST в конфігурацію параметрів запиту
// Вказуємо заголовок (header) "Content-Type" зі значенням "application/json"

// Вказуємо заголовок Authorization в який передаємо authToken
// Передаємо дані data в body, які перед цим перетворились в JSON
if (!response.ok) {
  throw new Error(`Помилка при запиті: ${response.status}`);}
// Перевіряємо через властивість ok, чи є відповідь вдалою
const responseData = await response.json();
// Конвертуємо відповідь у формат JSON
console.log(responseData);}
catch (error) {
// Виводимо відповідь в консоль
// Виводимо помилки в консоль якщо вони є
console.error(error);}}
// Розкоментуйте після виконання завданння
 console.log("Завдання: 4 ==============================");
postDataWithAuth(
   "https://petstore.swagger.io/v2/store/order",
   {
     id: 0,
     petId: 0,
     quantity: 0,
     shipDate: "2023-07-23T19:28:06.229Z",
     status: "placed",
     complete: true,
   },
   "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
 );

//Завдання 5
async function* asyncGenerator() {
  let i = 0;
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i++;}}
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
// Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
// Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
// Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
// Віддаємо значення лічильника та збільшуємо його на один

// Використовуємо асинхронний генератор та записуємо його значення в константу gen
async function printFiveItems() {
  const gen = asyncGenerator();
// Створюємо асинхрону функцію printFiveItems
for await (const value of gen) {
  console.log(value);
// Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
if (value === 4) break;}}// Перебираємо значення gen
// Виводимо в консоль поточне значення
// Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).

// Розкоментуйте після виконання завданння
 console.log("Завдання: 5 ==============================");
 printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}
async function* gatherData() {
  try {
    const dbData = await getDataFromDB();
    yield dbData;

    const apiData = await getDataFromAPI();
    yield apiData;

    const cacheData = await getDataFromCache();
    yield cacheData;
  } catch (error) {
    console.error("Помилка: " + error);
  }
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
// Використовуємо try для обробки помилок
// Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
// Результат роботи функції зберігаємо у змінну dbData

// yield використовується для того, щоб повернути значення dbData

// Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData

// І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
// Виводимо помилки в консоль якщо вони є
async function displayData() {
  const dataGenerator = gatherData();
  for await (const data of dataGenerator) {
// Створюємо асинхрону функцію displayData
// Створюємо екземпляр генератора gatherData
// Три рази виводимо виводимо поточне значення генератора в консоль
console.log(data);}}
// Розкоментуйте після виконання завданння
 console.log("Завдання: 6 ==============================");

 displayData();

//Завдання 7
function* countdownGenerator(start) {
  let count = start;

  while (count >= 0) {
    yield count;
    count--;}}
    
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
// Ініціюємо лічильник змінну count зі стартовим значенням параметра start

// Цикл, що триває доки лічильник більший або рівний 0
// Використовуємо ключове слово yield, щоб повернути поточне значення лічильника

// Зменшуємо лічильник на 1

 console.log("Завдання: 7 ==============================");
 const countdown = countdownGenerator(5);
    let nextValue = countdown.next();
// Створюємо екземпляр генератора countdown з лічильниковм 5
while (!nextValue.done) {
  console.log(nextValue.value);
// Запускаємо генератор та отримуємо перше значення яку записуємо в змінну nextValue
// Цикл while, що виводить значення з генератора, та працює поки не є генератор вичерпаним.
// Якщо властивість done == false, генератор ще має значення для повернення.
nextValue = countdown.next();}
// Виводимо поточне значення
// Отримуємо наступне значення з генератора
