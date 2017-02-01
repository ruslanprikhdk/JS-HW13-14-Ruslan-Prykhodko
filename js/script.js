'use strict';	

var obj = {
title: "Тест на проверку знаний",
question1: "1. Какая планета Солнечной Системы ближе всего к Солнцу?",
set1:{
    answer1: "Плутон",
    answer2: "Меркурий",
    answer3: "Венера"},
  question2:'2. Кто автор Великих реформ 1860х в Российской Империи?',
  set2:{
    answer1:'Николай II',
    answer2:'Александр II',
    answer3:'Александр III'},
  question3:'3. Какой город является столицей государства Бангладеш?',
  set3:{
    answer1:'Манила',
    answer2:'Джакарта',
    answer3:'Дакка'},
};


localStorage.setItem('questionnaire', JSON.stringify(obj));

var test = localStorage.getItem('questionnaire');

var test2 = JSON.parse(test);


$(function () {
  
  var html = $('#test').html();
     
  var content = tmpl(html, test2);   

  $('body').append(content);
  
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



