
// Генерация случайного 12-значного числа
function generateRandomNumber() {
  const randomNum = Math.floor(100000000000 + Math.random() * 900000000000);
  document.getElementById('series').innerHTML = `QR${randomNum}`;
}

// Вызов функции для генерации и отображения числа
generateRandomNumber();

// Генерация случайного 16-значного числа
function generateRandomNumber16() {
  const randomNum16 = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
  document.getElementById('number').innerHTML = randomNum16;
}

// Вызов функции для генерации и отображения числа
generateRandomNumber16();


// Функция для получения значения из localStorage
function displayValue() {
  let tg = window.Telegram.WebApp;
  let userId;

  try {
      userId = tg.initDataUnsafe.user.id;
  } catch (error) {
      console.error(error); // Выводим информацию об ошибке
  }

  if (!userId) {
      let value = localStorage.getItem("myValue");
      userId = value; // Присваиваем значение переменной userId
  }

  console.log(userId); // Выводим значение в консоль (для демонстрации)
  
  

const proxyUrl = 'https://super-sup.ru:8443/';
const fakeParam = Date.now(); // создание фиктивного параметра с текущим временем в миллисекундах
const nspk = 'https://api.puzzlebot.top/api?token=nc3Pdg0Rohfcy19kXzZrlvgN7FkWnbr6&method=getVariableValue&variable=nspk&user_id=';
const fullall_1 = (nspk + userId)

fetch(proxyUrl + fullall_1 + '?fakeParam=' + fakeParam)
.then(response => response.json())
.then(data => {
  let variables = data.data.split(' ; ');
  let bus_number = variables[0];
  let timerurl = variables [1];
  let unixurl = variables[2];

  // Вставляем  url = variables[0] в id=bus
  document.getElementById('bus').innerHTML = bus_number;

  // Получаем строку времени в формате "21:22:22"
  var timeString = timerurl;

// Разделяем строку времени на компоненты (часы, минуты и секунды)
var timeComponents = timeString.split(':');

    // Получаем часы и минуты
    var hours = timeComponents[0];
    var minutes = timeComponents[1];

    // Формируем новую строку времени без секунд
    var formattedTime = hours + ':' + minutes;
    console.log(formattedTime);
    
    // Получаем текущую дату
    const currentDate = new Date();
    // Форматируем дату в строку в нужном формате
    const formattedDay = currentDate.getDate().toString().padStart(2, '0');
    const formattedMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const formattedYear = currentDate.getFullYear().toString();
    const formattedDate = `${formattedDay}.${formattedMonth}.${formattedYear} `;
    const formattedTimee = formattedTime;
    // Обновляем содержимое элемента с идентификатором "date_time"
    
    document.getElementById('date_time').innerHTML = `${formattedDate} ${formattedTimee}`;

    var timerElement = document.getElementById("timer");
    var startDate;
     // Создаем объект Date из полученного значения
     startDate = new Date(unixurl * 1000);

     // Обновляем таймер сразу после получения даты
     updateTimer();
     
     // Обновляем таймер каждую секунду после получения даты
     setInterval(updateTimer, 1000);
      // Функция для обновления секундомера
    function updateTimer() {
      // Вычисляем разницу между текущей датой и начальной датой
      var diff = new Date() - startDate;

      // Преобразуем разницу в формат "чч:мм:сс"
      var hours = Math.floor(diff / 3600000);
      var minutes = Math.floor((diff - hours * 3600000) / 60000);
      var seconds = Math.floor((diff - hours * 3600000 - minutes * 60000) / 1000);
      var formattedTime = 
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');

      // Отображаем секундомер на странице
      timerElement.innerText = formattedTime;
    }
      })
      .catch(error => {
          console.error('Fetch error:', error);
  if (!document.getElementById("inputValue").value) {
      container.classList.replace('hidden', 'block');
      fon.classList.replace('hidden', 'block');
  } else {
      document.getElementById("inputValue").value = "неверный id";
      container.classList.replace('hidden', 'block');
      fon.classList.replace('hidden', 'block');
  }
      })
}

const container = document.querySelector('.container');
const fon = document.querySelector('.fon');


function saveData() {
  var value = document.getElementById("inputValue").value;
      localStorage.setItem("myValue", value);
      hideContainer();
      displayValue();
}
function hideContainer() {   
 container.classList.replace('block', 'hidden');
 fon.classList.replace('block', 'hidden');
}

window.onload = function() {
  generateRandomNumber();
  displayValue();
}