/*Authohr: Sanket Patil*/

console.log('This is news api project');

const apiKey = 'f15d095213ae4a9490fd32fed5ccd80d';

let topHeading = document.querySelector('#top-heading');
let business = document.querySelector('#business');
let technology = document.querySelector('#technology');
let health = document.querySelector('#health');

if (topHeading.parentNode.classList.contains('heading')) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

  xhr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.responseText);
      let articles = responseData.articles;
      let str = '';
      articles.forEach(function (element, index) {
        if (element.urlToImage === 'null') {
          this.classList.add('none');
        } else {
          let newshtml = `<div class="card">
                        <div class="card-header" id="heading${index}">
                          <h2 class="mb-0">
                            <button class="btn btn-block text-left text-dark" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                              ${element.title}
                            </button>
                          </h2>
                        </div>  
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#top-heading">
                          <div class="card" width="100%">
                            <div class="row no-gutters">
                              <div class="col-12 col-md-5 img">
                                <img src="${element.urlToImage}" class="card-img" alt="...">
                              </div>
                              <div class="col-12 col-md-7">
                                <div class="card-body">
                                  <p class="card-text">${element.description} <a href="${element.url}" titlt="Read More" target="_blank">read more</a> </p>
                                  <p class="card-text"><small class="text-muted">${element.source.name}</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`;

          str += newshtml;
        }
      });
      topHeading.innerHTML = str;
    }
  }
  xhr.send();
}

if (business.parentNode.classList.contains('business')) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`, true);

  xhr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.responseText);
      let articles = responseData.articles;
      let str = '';
      articles.forEach(function (element, index) {
        if (element.urlToImage === 'null') {
          this.classList.add('none');
        } else {
          let newshtml = `<div class="card">
                        <div class="card-header" id="heading${index}">
                          <h2 class="mb-0">
                            <button class="btn btn-block text-left text-dark" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                              ${element.title}
                            </button>
                          </h2>
                        </div>  
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#top-heading">
                          <div class="card" width="100%">
                            <div class="row no-gutters">
                              <div class="col-12 col-md-5 img">
                                <img src="${element.urlToImage}" class="card-img" alt="...">
                              </div>
                              <div class="col-12 col-md-7">
                                <div class="card-body">
                                  <p class="card-text">${element.description} <a href="${element.url}" titlt="Read More" target="_blank">read more</a> </p>
                                  <p class="card-text"><small class="text-muted">${element.source.name}</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`;

          str += newshtml;
        }
      });
      business.innerHTML = str;
    }
  }
  xhr.send();
}

if (technology.parentNode.classList.contains('technology')) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`, true);

  xhr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.responseText);
      let articles = responseData.articles;
      console.log(articles);
      let str = '';
      articles.forEach(function (element, index) {
        if (element.urlToImage === 'null') {
          this.classList.add('none');
        } else {
          let newshtml = `<div class="card">
                        <div class="card-header" id="heading${index}">
                          <h2 class="mb-0">
                            <button class="btn btn-block text-left text-dark" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                              ${element.title}
                            </button>
                          </h2>
                        </div>  
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#top-heading">
                          <div class="card" width="100%">
                            <div class="row no-gutters">
                              <div class="col-12 col-md-5 img">
                                <img src="${element.urlToImage}" class="card-img" alt="...">
                              </div>
                              <div class="col-12 col-md-7">
                                <div class="card-body">
                                  <p class="card-text">${element.description} <a href="${element.url}" titlt="Read More" target="_blank">read more</a> </p>
                                  <p class="card-text"><small class="text-muted">${element.source.name}</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`;

          str += newshtml;
        }
      });
      technology.innerHTML = str;
    }
  }
  xhr.send();
}

if (health.parentNode.classList.contains('health')) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`, true);

  xhr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.responseText);
      let articles = responseData.articles;
      console.log(articles);
      let str = '';
      articles.forEach(function (element, index) {
        if (element.urlToImage === 'null') {
          this.classList.add('none');
        } else {
          let newshtml = `<div class="card">
                        <div class="card-header" id="heading${index}">
                          <h2 class="mb-0">
                            <button class="btn btn-block text-left text-dark" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                              ${element.title}
                            </button>
                          </h2>
                        </div>  
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#top-heading">
                          <div class="card" width="100%">
                            <div class="row no-gutters">
                              <div class="col-12 col-md-5 img">
                                <img src="${element.urlToImage}" class="card-img" alt="...">
                              </div>
                              <div class="col-12 col-md-7">
                                <div class="card-body">
                                  <p class="card-text">${element.description} <a href="${element.url}" titlt="Read More" target="_blank">read more</a> </p>
                                  <p class="card-text"><small class="text-muted">${element.source.name}</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`;

          str += newshtml;
        }
      });
      health.innerHTML = str;
    }
  }
  xhr.send();
}
