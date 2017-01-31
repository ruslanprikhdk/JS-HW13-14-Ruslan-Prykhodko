'use strict';

var obj = {
  title: 'Тест по программированию',
  question1:'1. Вопрос №1',
  set1:{
    answer1:'Вариант ответа №1',
    answer2:'Вариант ответа №2',
    answer3:'Вариант ответа №3'},
  question2:'2. Вопрос №2',
  set2:{
    answer1:'Вариант ответа №1',
    answer2:'Вариант ответа №2',
    answer3:'Вариант ответа №3'},
  question3:'3. Вопрос №3',
  set3:{
    answer1:'Вариант ответа №1',
    answer2:'Вариант ответа №2',
    answer3:'Вариант ответа №3'},
  button:'Проверить мои результаты'
};

localStorage.setItem('questionnaire', JSON.stringify(obj));

var test = localStorage.getItem('questionnaire');

var test2 = JSON.parse(test);

var wrapper = $('#checking');

function createH1(text) {
  var h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode(text));
  return h1;
}

function createDiv(text) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div;
}

function createForm(text1, text2, text3) {
  var form = document.createElement('form');
  var label = document.createElement('label');
  var input = document.createElement('input');
  input.type = 'radio';
  input.name = 'radioName';
  label.appendChild(input);
  label.appendChild(document.createTextNode(text1));
  form.appendChild(label);
  var label = document.createElement('label');
  var input = document.createElement('input');
  input.type = 'radio';
  input.name = 'radioName';
  label.appendChild(input);
  label.appendChild(document.createTextNode(text2));
  form.appendChild(label);
  var label = document.createElement('label');
  var input = document.createElement('input');
  input.type = 'radio';
  input.name = 'radioName';
  label.appendChild(input);
  label.appendChild(document.createTextNode(text3));
  form.appendChild(label);
  return form;
}

function createButton(text) {
  var form = document.createElement('form');
  var button = document.createElement('input');
  button.type = 'button';
  button.name = 'name2';
  button.value = (text);
  form.appendChild(button);
  return form;
}

var elements = [
  createH1(test2.title),
  createDiv(test2.question1),
  createForm(test2.set1.answer1, test2.set1.answer2, test2.set1.answer3),
  createDiv(test2.question2),
  createForm(test2.set2.answer1, test2.set2.answer2, test2.set2.answer3),
  createDiv(test2.question3),
  createForm(test2.set3.answer1, test2.set3.answer2, test2.set3.answer3),
  createButton(test2.button)
];

function DOM () {
  for(var i = 0; i < elements.length; i++) {
  wrapper.append(elements[i]);
  }
}

DOM ()

$(function () {

  var $tmpl = $('#checking').html();

  $('body').append($tmpl);

});

$(function () {
  $('input[type = "button"]').click(function(event) {
    event.preventDefault();
    $('#overlay').stop().fadeIn(400,
      function() {
        $('#modal_form')
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
    });
  });
  $('#modal_close').click(function () {
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('#overlay').stop().fadeOut(400);
          $('.q1_result').empty();
          $('.q2_result').empty();
          $('.q3_result').empty();
          $('.test_summary').empty();
          $('input[name=radioName]').prop('checked', false);
          var $res1 = "Ответ не указан!";
          $('.q1_result').append($res1);
          var $res2 = "Ответ не указан!";
          $('.q2_result').append($res2);
          var $res3 = "Ответ не указан!";
          $('.q3_result').append($res3);
        }
       );
   });
});

$(function () {
  $('form:nth-of-type(1) label:nth-of-type(1) input').attr('value','1');
  $('form:nth-of-type(1) label:nth-of-type(2) input').attr('value','2');
  $('form:nth-of-type(1) label:nth-of-type(3) input').attr('value','3');
  $('form:nth-of-type(2) label:nth-of-type(1) input').attr('value','4');
  $('form:nth-of-type(2) label:nth-of-type(2) input').attr('value','5');
  $('form:nth-of-type(2) label:nth-of-type(3) input').attr('value','6');
  $('form:nth-of-type(3) label:nth-of-type(1) input').attr('value','7');
  $('form:nth-of-type(3) label:nth-of-type(2) input').attr('value','8');
  $('form:nth-of-type(3) label:nth-of-type(3) input').attr('value','9');

});

$(function () {

  var $res1 = "Ответ не указан!";
  $('.q1_result').append($res1);
  var $res2 = "Ответ не указан!";
  $('.q2_result').append($res2);
  var $res3 = "Ответ не указан!";
  $('.q3_result').append($res3);

  $('form:nth-of-type(1)').on('change', function() {
    
    if ($('input[name=radioName]:checked', 'form:nth-of-type(1)').val() == 1) {
      $('.q1_result').empty();
      $res1 = "Ответ правильный!";
      $('.q1_result').append($res1);
    } else {
      $('.q1_result').empty();
      $res1 = "К сожалению, ответ неверный";
      $('.q1_result').append($res1);
      }     
  });

  $('form:nth-of-type(2)').on('change', function() {
    
    if ($('input[name=radioName]:checked', 'form:nth-of-type(2)').val() == 5) {
      $('.q2_result').empty();
      $res2 = "Ответ правильный!";
      $('.q2_result').append($res2);
    } else {
      $('.q2_result').empty();
      $res2 = "К сожалению, ответ неверный";
      $('.q2_result').append($res2);
      }
  });

  $('form:nth-of-type(3)').on('change', function() {
    
    if ($('input[name=radioName]:checked', 'form:nth-of-type(3)').val() == 9) {
      $('.q3_result').empty();
      $res3 = "Ответ правильный!";
      $('.q3_result').append($res3);
    } else {
      $('.q3_result').empty();
      $res3 = "К сожалению, ответ неверный";
      $('.q3_result').append($res3);
      }
  });

  $('input[type = "button"]').click(function() {

    var $final_res;

    if ($('input[name=radioName]:checked', 'form:nth-of-type(1)').val() == 1) {
      if ($('input[name=radioName]:checked', 'form:nth-of-type(2)').val() == 5) {
        if ($('input[name=radioName]:checked', 'form:nth-of-type(3)').val() == 9) {
          $final_res = "Поздравляем, тест пройден!" }
        else { $final_res = "К сожалению, Вы не прошли тест" };
      } else { $final_res = "К сожалению, Вы не прошли тест" };
    } else { $final_res = "К сожалению, Вы не прошли тест" };    

    $('.test_summary').append($final_res);
  });

});



