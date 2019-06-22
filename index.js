
function getDogPics(num){
    if (num < 51){
    fetch('https://dog.ceo/api/breeds/image/random/'+ num)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      // .catch(error => alert('Something is wrong.  Please try again later.'))
    }
  }
  
  function displayResults(responseJson){
    let image = responseJson.message;
      console.log(responseJson.message);
    for (let i=0; i < image.length; i++){
    $('.imageContainer').append(`<img src="${responseJson.message[i]}" class="results-img">`); 
    }
    $('.imageContainer').removeClass('hidden');
  }
  
  
  function watchForSubmit(){
  $('form').submit(event=> {
    event.preventDefault();
    let number= $('.pictureNumber').val();
      getDogPics(number);
    if (number > 50){
    console.log('Please enter number under 50')
  }
  });
  };
  
  watchForSubmit();
  
  
  