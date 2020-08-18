fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=ea1a86ff676d8b0f150aaaa4fdbc8990"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
