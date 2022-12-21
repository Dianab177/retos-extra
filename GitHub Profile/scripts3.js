function gitUserInfo(response) {
    let repositorioGits = reponse.data.repos_url;
  
    let repoGitsDisplay = document.querySelectorAll("#gitsRepo");
  
    let forecastHtml = `<div class="row d-flex justify-content-center" id="row-forecast">`;
    forecast.forEach(function (forecastDaily, index) {
      if (index < 5) {
        forecastHtml =
          forecastHtml +
          `
        <div class="col-2 ">
        <div class="date-forecast">${formatDaysForecast(forecastDaily.dt)}</div>
        <img src="http://openweathermap.org/img/wn/${
          forecastDaily.weather[0].icon}@2x.png"
         alt=""
         width="36"/>
        <div class="degrees-forecast">
        <samp class="max-temp-forecast">${Math.round(
          forecastDaily.temp.max
        )}º</samp>
        <samp class="min-temp-forecast">${Math.round(
          forecastDaily.temp.min
        )}º</samp>
       </div>
       </div>`;
      }
    });
  
    forecastHtml = forecastHtml + `</div>`;
    forecastDisplay.innerHTML = forecastHtml;
  }
  function searchGithubUsers(data) {
    let apiUrl = `https://api.github.com/users/diana177`;
    console.log(apiUrl);
    axios.get(apiUrl).then(gitsRepo);
}
  gitUserInfo(Dianab177);