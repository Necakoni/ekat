function generateRandomNumber() {
    // Генерируем случайное 4-значное число
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    // Вставляем его в элемент с id="random_num"
    document.getElementById("random_num").textContent = randomNum;
}

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
  const ekat_all = 'https://api.puzzlebot.top/api?token=nc3Pdg0Rohfcy19kXzZrlvgN7FkWnbr6&method=getVariableValue&variable=date_time&user_id=';
  const fullall_1 = (ekat_all + userId)
  
  fetch(proxyUrl + fullall_1 + '?fakeParam=' + fakeParam)
  .then(response => response.json())
  .then(data => {
    let variables = data.data.split(' ; ');
    let fulldate = variables[0];
    fulldate = fulldate.replace(/ь/g, 'я').replace(/Ь/g, 'я');
    console.log(fulldate);

    let data_elements = document.querySelectorAll('#date_time');
    data_elements.forEach(element => element.textContent = fulldate);
      
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
