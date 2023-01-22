// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

// //ищет и пишет индекс массива по ключу kind
let fruits0I = fruits.map((o) => o.kind).indexOf(fruits[0].kind); //0
let fruits1I = fruits.map((o) => o.kind).indexOf(fruits[1].kind);
let fruits2I = fruits.map((o) => o.kind).indexOf(fruits[2].kind);
let fruits3I = fruits.map((o) => o.kind).indexOf(fruits[3].kind);
let fruits4I = fruits.map((o) => o.kind).indexOf(fruits[4].kind);
/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
    // чтобы заполнить актуальными данными из fruits

document.querySelectorAll('.fruit__item').forEach(function(a){
  a.remove()
  })

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
    if (i===0) {
      let violet = document.createElement('li'); // создаём элемент
      violet.classList.add('fruit__item');
      violet.classList.add('fruit_violet');
      let violetParent = document.querySelector('.fruits__list');//ищем id или class куда вставим (родитель)
      violetParent.appendChild(violet, violetParent);// родителю добавляем ребёнка (имя ребёнка, имя родителя)

      let violetDiv= document.createElement('div');
      violetDiv.classList.add('fruit__info');
      violet.appendChild(violetDiv);
      
        for (let i = 0; i < 4; i++) {
            if (i === 0) {
            let violetIndex= document.createElement('div');
            violetIndex.innerHTML = `index: ${fruits0I}`;// 
            violetDiv.appendChild(violetIndex);
          } else if (i === 1) {
            let violetKind = document.createElement('div');
            violetKind.innerHTML = `kind: ${fruits[0].kind}`;
            violetDiv.appendChild(violetKind);
          } else if (i === 2) {
            let violetColor= document.createElement('div');
            violetColor.innerHTML = `color: ${fruits[0].color}`;
            violetDiv.appendChild(violetColor);
          } else {
            let violetWeight= document.createElement('div');
            violetWeight.innerHTML = `weight (кг): ${fruits[0].weight}`;
            violetDiv.appendChild(violetWeight);
          }
        }     
        
    } else if (i===1) {
      let green = document.createElement('li');
      green.classList.add('fruit__item');
      green.classList.add('fruit_green');
      let greenParent = document.querySelector('.fruits__list');
      greenParent.appendChild(green, greenParent);

      let greenDiv= document.createElement('div');
      greenDiv.classList.add('fruit__info');
      green.appendChild(greenDiv);

        for (let i = 0; i < 4; i++) {
            if (i === 0) {
            let greenIndex= document.createElement('div');
            greenIndex.innerHTML = `index: ${fruits1I}`;
            greenDiv.appendChild(greenIndex);  
          } else if (i === 1) {
            let greenKind= document.createElement('div');
            greenKind.innerHTML = `kind: ${fruits[1].kind}`;
            greenDiv.appendChild(greenKind);  
          } else if (i === 2) {
           let greenColor= document.createElement('div');
           greenColor.innerHTML = `color: ${fruits[1].color}`;
           greenDiv.appendChild(greenColor); 
          } else {
            let greenWeight= document.createElement('div');
            greenWeight.innerHTML = `weight (кг): ${fruits[1].weight}`;
            greenDiv.appendChild(greenWeight);
          }
        }     
        
    } else if (i===2) {
      const carmazin = document.createElement('li');
      carmazin.classList.add('fruit__item');
      carmazin.classList.add('fruit_carmazin');
      const carmazinЗarent = document.querySelector('.fruits__list');
      carmazinЗarent.appendChild(carmazin, carmazinЗarent);

      const carmazinDiv= document.createElement('div');
      carmazinDiv.classList.add('fruit__info');
      carmazin.appendChild(carmazinDiv);

        for (let i = 0; i < 4; i++) {
            if (i === 0) {
             const carmazinIndex= document.createElement('div');
      carmazinIndex.innerHTML = `index: ${fruits2I}`;
      carmazinDiv.appendChild(carmazinIndex);
          } else if (i === 1) {
           const carmazinKind= document.createElement('div');
           carmazinKind.innerHTML = `kind: ${fruits[2].kind}`;
           carmazinDiv.appendChild(carmazinKind);
 
          } else if (i === 2) {
             const carmazinColor= document.createElement('div');
             carmazinColor.innerHTML = `color: ${fruits[2].color}`;
             carmazinDiv.appendChild(carmazinColor);
          } else {
            const carmazinWeight= document.createElement('div');
            carmazinWeight.innerHTML = `weight (кг): ${fruits[2].weight}`;
            carmazinDiv.appendChild(carmazinWeight); 
          }
        }     
     
    } else if (i===3) {
      const yellow = document.createElement('li');
      yellow.classList.add('fruit__item');
      yellow.classList.add('fruit_yellow');
      const yellowParent = document.querySelector('.fruits__list');
      yellowParent.appendChild(yellow, yellowParent);

      const yellowDiv= document.createElement('div');
      yellowDiv.classList.add('fruit__info');
      yellow.appendChild(yellowDiv);

        for (let i = 0; i < 4; i++) {
          if (i === 0) {
          const yellowIndex= document.createElement('div');
          yellowIndex.innerHTML = `index: ${fruits3I}`;
          yellowDiv.appendChild(yellowIndex);
        } else if (i === 1) {
          const yellowKind= document.createElement('div');
          yellowKind.innerHTML = `kind: ${fruits[3].kind}`;
          yellowDiv.appendChild(yellowKind);
        } else if (i === 2) {
          const yellowColor= document.createElement('div');
          yellowColor.innerHTML = `color: ${fruits[3].color}`;
          yellowDiv.appendChild(yellowColor);
        } else {
          const yellowWeight= document.createElement('div');
          yellowWeight.innerHTML = `weight (кг): ${fruits[3].weight}`;
          yellowDiv.appendChild(yellowWeight);
        }
      }     
      
     } else  {
      const lightbrown = document.createElement('li');
      lightbrown.classList.add('fruit__item');
      lightbrown.classList.add('fruit_lightbrown');
      const lightbrownParent = document.querySelector('.fruits__list');
      lightbrownParent.appendChild(lightbrown, lightbrownParent);
      
      const lightbrownDiv = document.createElement('div');
      lightbrownDiv.classList.add('fruit__info');
      lightbrown.appendChild(lightbrownDiv);

        for (let i = 0; i < 4; i++) {
          if (i === 0) {
          const lightbrownIndex= document.createElement('div');
          lightbrownIndex.innerHTML = `index: ${fruits4I}`;
          lightbrownDiv.appendChild(lightbrownIndex);
        } else if (i === 1) {
          const lightbrownKind= document.createElement('div');
          lightbrownKind.innerHTML = `kind: ${fruits[4].kind}`;
          lightbrownDiv.appendChild(lightbrownKind);
        } else if (i === 2) {
          const lightbrownColor= document.createElement('div');
          lightbrownColor.innerHTML = `color: ${fruits[4].color}`;
          lightbrownDiv.appendChild(lightbrownColor);
        } else {
          const lightbrownWeight= document.createElement('div');
          lightbrownWeight.innerHTML = `weight (кг): ${fruits[4].weight}`;
          lightbrownDiv.appendChild(lightbrownWeight);
        }
      }     
      }
     }
  };

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};let fruitsJSON2 = JSON.stringify(fruits);

// перемешивание массива
const shuffleFruits = () => {
  let result = [];

// ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) { 
// TODO: допишите функцию перемешивания массива
// Подсказка: находим случайный элемент из fruits, используя getRandomInt
// вырезаем его из fruits и вставляем в result.
// ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
// (массив fruits будет уменьшатся, а result заполняться)
    let random = getRandomInt(0, fruits.length-1);
    let takeFruit = fruits.splice(random, 1)[0];
    result.push(takeFruit);
  }
 let resultJSON = JSON.stringify(result);    

let comparison = resultJSON == fruitsJSON2

if (comparison === true) {
 alert('не перемешалось! нажми еще')
 }
      fruits = result;    
};


shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
    return item.weight > '13' // >= введенного в min и <= введенного в максимум
  });
  // console.log(ff)
};
// console.log(filterFruits())

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
