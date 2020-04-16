!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);class n{constructor(e){this.film=e,this.favorite=!1}FilmView(){let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("button");return i.classList.add("film__modal-button"),i.innerText="more...",i.addEventListener("click",()=>{document.body.append(this.ModaViewl()),document.body.style.overflowY="hidden"}),t.classList.add("material-icons","film__favor","favor"),t.setAttribute("data-target-star-number",this.film.id),t.innerText=this.favorite?"star":"star_outline",t.addEventListener("click",()=>{this.favorite=!this.favorite}),e.className="film",e.innerHTML=`\n                <div class="film__img" style="background-image: url(${this.film.img})"></div>\n                <div class="film__info">\n                    <div class="film__name">${this.film.name}</div>\n                    <div class="film__year">${this.film.year}</div>\n                    <div class="film__description">${this.film.description}</div>\n                    <div class="film__genres">${this.FilmGenres()}</div>\n                </div>`,e.append(i),e.append(t),e}ModaViewl(){let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div");return e.className="modal-wrapper",t.className="modal-window",i.classList.add("modal-window__close","favor","material-icons"),i.innerText="close",i.addEventListener("click",(function(){e.remove(),document.body.style.overflowY="scroll"})),t.innerHTML=`\n                <div class="modal-window__public">\n                    <div class="modal-window__img film__img" style="background-image: url(${this.film.img})"></div>\n                    <div class="modal-window__star-year">\n                        <div class="modal-window__star favor material-icons">${this.favorite?"star":"star_outline"}</div>\n                        <div class="modal-window__year">${this.film.year}</div>\n                    </div>\n                    <div class="modal-window__genres">${this.FilmGenres()}</div>\n                </div>\n                <div class="modal-window__details">\n                    <div class="modal-window__name film__name">${this.film.name}</div>\n                    <div class="modal-window__description">${this.film.description}</div>\n                    <div class="modal-window__director">Director: ${this.film.director}</div>\n                    <div class="modal-window__starring">${this.FilmStarring()}</div>\n                </div>`,t.append(i),e.append(t),e}FilmGenres(){let e="";for(const t of this.film.genres)e+=`<div class="film__genre">${t}</div>`;return e}FilmStarring(){let e="";for(const t of this.film.starring)e+=`<div class="film__star">${t}</div>`;return e}}function s(){if(a(),app.innerHTML="","0"==filter.value)for(const e of films.values())app.append(e.FilmView());else{let e=films.filter(e=>e.film.genres.includes(filter.value)||e.film.genres.includes(filter.value.toLocaleLowerCase()));for(const t of e)app.append(t.FilmView())}!function(){let e=document.getElementsByClassName("favor");for(const t of e)t.addEventListener("click",(function(){l(this)}))}(),localStorage.setItem("favors",JSON.stringify(favors))}function a(){if(favorsList.innerHTML="",0!=favors.length)for(const e of favors){let t=document.createElement("span");t.classList.add("material-icons","remove"),t.innerText="close",t.addEventListener("click",(function(){r(this)}));let i=document.createElement("li");i.append(t),i.append(e),favorsList.append(i)}}function r(e){favors.splice(favors.indexOf(e.parentNode.innerText.substr(e.parentNode.innerText.indexOf("\n")+1)),1),e.parentNode.remove();for(const e of films)favors.includes(e.film.name)||(e.favorite=!1);s()}function o(){filters.forEach(e=>{let t=document.createElement("option");t.value=e.charAt(0).toUpperCase()+e.slice(1),t.textContent=e.charAt(0).toUpperCase()+e.slice(1),filter.append(t)})}function l(e){let t=Number(e.dataset.targetStarNumber);favors.includes(films[t-1].film.name)||(favors.push(films[t-1].film.name),a(),s())}window.addEventListener("load",()=>{let e=document.getElementById("app"),t=[],i=[],a=document.getElementById("filter-button"),r=(document.getElementById("genre-select"),null!=JSON.parse(localStorage.getItem("favors"))?JSON.parse(localStorage.getItem("favors")):[]),l=(document.getElementById("favor-list"),document.getElementById("galery-view")),d=document.getElementById("list-view");l.addEventListener("click",t=>{e.classList.contains("active-view-type")||(t.target.classList.add("active-view-type"),d.classList.remove("active-view-type"),e.setAttribute("data-view","galery"))}),d.addEventListener("click",t=>{e.classList.contains("active-view-type")||(t.target.classList.add("active-view-type"),l.classList.remove("active-view-type"),e.setAttribute("data-view","list"))}),a.addEventListener("click",s),fetch("http://my-json-server.typicode.com/moviedb-tech/movies/list").then(e=>e.json()).then(e=>{for(const i of e)t.push(new n(i));t.forEach(e=>{r!=[]&&r.includes(e.film.name)&&(e.favorite=!0),t.forEach(e=>{for(const t of e.film.genres)i.includes(t)||i.includes(t.toLowerCase())||i.push(t)})}),o(),s()})})}]);