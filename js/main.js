$(document).ready(function () {
  var currentFloor = 2;//
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down"); //кнопка уменльшения этажа
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats")
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем занчение текущего этажа
    $(".counter").text(currentFloor);//записывам значение этажа в счетчик спава
  });
  
  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal)
  counterUp.on("click", function () { //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { //проверяем значение этажа, оно не должно быть больше 18
      currentFloor++ //прибавляем один этаж
      usCurrenFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false}); //форматируем переменную с этажем, чтобы было 01 а не 1
      $(".counter").text(usCurrenFloor);//записывам значение этажа в счетчик спава
       floorPath.removeClass("current-floor")//удаляем активный класс у этажей
      $(`[data-floor=${usCurrenFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
    }
  });

  counterDown.on('click', function() { //отслеживаем клик по кнопке вниз
    if (currentFloor > 2) { //проверяем значение этажа, оно не должно быть меньше 2
      currentFloor--; //вычитаем один этаж
      usCurrenFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); //форматируем переменную с этажем, чтобы было 01 а не 1
      $(".counter").text(usCurrenFloor); //записывам значение этажа в счетчик спава
      floorPath.removeClass("current-floor") //удаляем активный класс у этажей
      $(`[data-floor=${usCurrenFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
    }
  });
  function toggleModal() { //функция открыть-закрыть окно
    modal.toggleClass("is-open")
  }
});