$(document).ready( function(){

  let item1Array = [];
  let item2Array = []; 
  let item1ArrayRandom = [];
  let item2ArrayRandom = [];

  $('#start').hide();

  (function handleSubmit(){
    $('#submit').click( () => {
      if($('#item1').val() === '' || $('#item2').val() === ''){
        alert('Please do not leave the fields empty')
        $('#item1').val('');
        $('#item2').val('');
      } else {
        item1Array.push($('#item1').val());
        item2Array.push($('#item2').val());
        item1ArrayRandom.push($('#item1').val());
        item2ArrayRandom.push($('#item2').val());
        
        $('.list1').append($('<li class="list1Item">').text($('#item1').val()));
        $('.list2').append($('<li class="list2Item">').text($('#item2').val()));
    
        $('#item1').val('');
        $('#item2').val('');
        $('#start').show();
      }
    })
  })();

  (function handleStart(){
    $('#start').on('click',() => {
      shuffleArray(item1ArrayRandom);
      shuffleArray(item2ArrayRandom);
      $('#inputWrap').hide();
      $('.list1').html('');
      $('.list2').html('');
      for (let i = 0; i < item1ArrayRandom.length; i++){
        let item1 = $('<li class="list1Item">').text(item1ArrayRandom[i]);

        let item2 = $('<li class="list2Item">').text(item2ArrayRandom[i]);

        $('.list1').append(item1);
        $('.list2').append(item2);

        $('#start').hide();
        
        dragAndDrop() ; 
      }
    })
  })();

  function dragAndDrop(){
    $('.list1Item').draggable();
  }

  (function handleDragging(){
    let dragItem;
    let dragItemPosition;
    $('.list1').on('mousedown', '.list1Item', function(){
      dragItem = $(this);
      $('.list2Item').droppable({
        drop: function(){
          dragItemPosition = item1Array.indexOf(dragItem.text());
          if(item2Array[dragItemPosition] === $(this).text()){
            $(this).css('opacity', '0');
            dragItem.css('opacity', '0');
          }
        }
      });
    })
  })();


  function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }






})
