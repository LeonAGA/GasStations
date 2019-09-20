
const ui = new UI();

document.addEventListener('DOMContentLoaded', () =>{
    
    ui.showGasStations();

});

  //Browser
  const browser = document.querySelector('#search input');
  browser.addEventListener('input', ()=>{

    if(browser.value.length > 5){

        ui.filterResults(browser.value);
    }else{
        ui.showGasStations();
    }

  })
