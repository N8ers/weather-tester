import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
        $(document).ready(function(){
  $('#submitWeather').click(function(){
  var city = $('#city').val();
  if(city != ''){
    $.ajax({
      url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=a106239c326e4b268a05bd6c1d2f755d',
      type: "GET",
      dataType: "jsonp",
      success: function(data){
        var widget = show(data);
          $("#show").html(widget);
          $("#city").val('');
    }
    });
  } else {
    $("error").html('field cannot be empty');
  }
});
});

function show(data){
  return "<h3>Weather: "+ data.weather[0].main +"</h3>" +
         "<h3>Weather: "+ data.weather[0].description +"</h3>";
}

        </div>

      </div>



    );
  }
}

export default App;
