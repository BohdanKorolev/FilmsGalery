/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Film.js":
/*!************************!*\
  !*** ./src/js/Film.js ***!
  \************************/
/*! exports provided: Film */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return Film; });
class Film {
    constructor(film) {
      this.film = film;
      this.favorite = false;
    }
    FilmView(){
        //    <div class="film">
        //         <div class="film__img" style="background-image: url(${this.film.img})"></div>
        //         <div class="film__info">
        //             <div class="film__name">${this.film.name}</div>
        //             <div class="film__year">${this.film.year}</div>
        //             <div class="film__description">${this.film.description}</div>
        //             <div class="film__genres">${this.FilmGenres()}</div>
        //         </div>
        //         <div class="film__modal-show">
        //             <button class="film__modal-button" data-target-modal-number="${this.film.id}">more...</button>
        //         </div>
        //         <div class="material-icons film__favor favor" data-target-star-number="${this.film.id}">
        //             ${this.favorite ? 'star' : 'star_outline'}
        //         </div>
        //   </div>
        let filmElement = document.createElement('div'),
            star = document.createElement('div'),
            modalButton = document.createElement('button');

        modalButton.classList.add('film__modal-button');
        modalButton.innerText = 'more...';
        modalButton.addEventListener('click',() => {
            document.body.append(this.ModaViewl());
            document.body.style.overflowY = 'hidden';
        });

        star.classList.add('material-icons','film__favor','favor');
        star.setAttribute('data-target-star-number',this.film.id);
        star.innerText = (this.favorite) ? 'star' : 'star_outline';
        star.addEventListener('click',() => {
            this.favorite = !this.favorite;
        })

        filmElement.className = 'film';
        filmElement.innerHTML = `
                <div class="film__img" style="background-image: url(${this.film.img})"></div>
                <div class="film__info">
                    <div class="film__name">${this.film.name}</div>
                    <div class="film__year">${this.film.year}</div>
                    <div class="film__description">${this.film.description}</div>
                    <div class="film__genres">${this.FilmGenres()}</div>
                </div>`;
        filmElement.append(modalButton);
        filmElement.append(star);
        return filmElement;
    };
    ModaViewl(){
        // <div class="modal-wrapper">
        //     <div class="modal-window">
        //         <div class="modal-window__public">
        //             <div class="modal-window__img film__img" style="background-image: url(${this.film.img})"></div>
        //             <div class="modal-window__star-year">
        //                 <div class="modal-window__star favor material-icons">${this.favorite ? 'star' : 'star_outline'}</div>
        //                 <div class="modal-window__year">${this.film.year}</div>
        //             </div>
        //             <div class="modal-window__genres">${this.FilmGenres()}</div>
        //         </div>
        //         <div class="modal-window__details">
        //             <div class="modal-window__name film__name">${this.film.name}</div>
        //             <div class="modal-window__description">${this.film.description}</div>
        //             <div class="modal-window__director">Director: ${this.film.director}</div>
        //             <div class="modal-window__starring">${this.FilmStarring()}</div>
        //         </div>
        //         <div class="modal-window__close favor material-icons">close</div>
        //     </div>
        // </div>
        let modalWrapper = document.createElement('div'),
            modalWindow = document.createElement('div'),
            modalClose = document.createElement('div');

        modalWrapper.className = 'modal-wrapper';
        modalWindow.className = 'modal-window';

        modalClose.classList.add('modal-window__close','favor','material-icons');
        modalClose.innerText = 'close';
        modalClose.addEventListener('click',function(){
            modalWrapper.remove();
            document.body.style.overflowY = 'scroll';
        });

        modalWindow.innerHTML = `
                <div class="modal-window__public">
                    <div class="modal-window__img film__img" style="background-image: url(${this.film.img})"></div>
                    <div class="modal-window__star-year">
                        <div class="modal-window__star favor material-icons">${this.favorite ? 'star' : 'star_outline'}</div>
                        <div class="modal-window__year">${this.film.year}</div>
                    </div>
                    <div class="modal-window__genres">${this.FilmGenres()}</div>
                </div>
                <div class="modal-window__details">
                    <div class="modal-window__name film__name">${this.film.name}</div>
                    <div class="modal-window__description">${this.film.description}</div>
                    <div class="modal-window__director">Director: ${this.film.director}</div>
                    <div class="modal-window__starring">${this.FilmStarring()}</div>
                </div>`;
        modalWindow.append(modalClose);
        modalWrapper.append(modalWindow);
        return modalWrapper;
    }
    FilmGenres(){
        let genres = '';
        for (const genre of this.film.genres) {
            genres += `<div class="film__genre">${genre}</div>`;
        }
        return genres;
    };
    FilmStarring(){
        let starring = '';
        for (const star of this.film.starring) {
            starring += `<div class="film__star">${star}</div>`;
        }
        return starring;
    };
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Film__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Film */ "./src/js/Film.js");


let app = document.getElementById('app'),
    films = [],
    filters = [],
    filterButton = document.getElementById('filter-button'),
    filter = document.getElementById('genre-select'),
    favors = JSON.parse(localStorage.getItem('favors')) != null ? JSON.parse(localStorage.getItem('favors')) : [],
    favorsList = document.getElementById('favor-list'),
    galeryView = document.getElementById('galery-view'),
    listView = document.getElementById('list-view');


window.addEventListener('load', () => {
    galeryView.addEventListener('click', (e) => {
        if (!app.classList.contains('active-view-type')) {
            e.target.classList.add('active-view-type');
            listView.classList.remove('active-view-type');
            app.setAttribute('data-view','galery')
        }
    });
    listView.addEventListener('click', (e) => {
        if (!app.classList.contains('active-view-type')) {
            e.target.classList.add('active-view-type');
            galeryView.classList.remove('active-view-type');
            app.setAttribute('data-view','list');
        }
    });
    filterButton.addEventListener('click',FilteredViev);
    fetch('http://my-json-server.typicode.com/moviedb-tech/movies/list')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (const film of data) {
                films.push(new _Film__WEBPACK_IMPORTED_MODULE_0__["Film"](film));
            }
            films.forEach(film => {
                if(favors != [] && favors.includes(film.film.name)){
                    film.favorite = true;
                }
                films.forEach(film => {
                    for (const genre of film.film.genres) {
                        if (!filters.includes(genre) && !filters.includes(genre.toLowerCase())) {
                            filters.push(genre);
                        }
                    }
                })
            });
            SetFilters();
            FilteredViev();
        });
});

function FilteredViev() {
    ShowFavors();
    app.innerHTML = '';
    if(filter.value == '0'){
        for (const film of films.values()) {
            // newContent += film.FilmView();
            app.append(film.FilmView());
        }
        // app.innerHTML = newContent;
    }else {
        let filteredFilms = films.filter(item => {return(item.film.genres.includes(filter.value) || item.film.genres.includes(filter.value.toLocaleLowerCase()))});
        for (const filteredFilm of filteredFilms) {
            app.append(filteredFilm.FilmView());
        }
        // app.innerHTML = newContent;
    }
    StarsInit();
    localStorage.setItem('favors',JSON.stringify(favors));
}

function RemoveFavor(el){
    favors.splice(favors.indexOf(el.parentNode.innerText.substr(el.parentNode.innerText.indexOf('\n') + 1)),1);
    el.parentNode.remove();
    for (const film of films) {
        if (!favors.includes(film.film.name)) {
            film.favorite = false;
        }
    }
    FilteredViev()
}

function ShowFavors() {
    favorsList.innerHTML = '';
    if (favors.length != 0) {
        for (const favor of favors) {
            let remove = document.createElement('span');
            remove.classList.add('material-icons','remove');
            remove.innerText = 'close';
            remove.addEventListener('click',function(){
                RemoveFavor(this)
            })
            let favorListItem = document.createElement('li');
            favorListItem.append(remove);
            favorListItem.append(favor);
            favorsList.append(favorListItem);
        }
    }
}

function SetFilters() {
    filters.forEach(value => {
        let option = document.createElement('option');
        option.value = value.charAt(0).toUpperCase() + value.slice(1);
        option.textContent = value.charAt(0).toUpperCase() + value.slice(1);
        filter.append(option);
    })
}

function StarsInit(){
    let favorStar = document.getElementsByClassName('favor');
    for (const star of favorStar) {
        star.addEventListener('click',function(){
            AddToFavor(this);
        });
    }
}

function AddToFavor(el){
    let num = Number(el.dataset.targetStarNumber);
    if (!favors.includes(films[num - 1].film.name)) {
        favors.push(films[num-1].film.name);
        // films[num-1].favorite = true;
        ShowFavors();
        FilteredViev();
    }
}

// function ModalsButtonInit() {
//     let modalButton = document.getElementsByClassName('film__modal-button');
//     for (const button of modalButton) {
//         button.addEventListener('click',function(e){
//             // let body = document.getElementsByTagName('body');
//             document.body.innerHTML += (films[Number(e.target.dataset.targetModalNumber) - 1].ShowModal())
//             document.body.style.overflowY='hidden';
//             let closeModal = document.getElementsByClassName('modal-window__close');
//             closeModal[0].addEventListener('click',function(){
//                 let modal = document.getElementsByClassName('modal-wrapper');
//                 modal[0].remove();
//                 document.body.style.overflowY='scroll';
//             })
//         })
//     }
// }
//
// function CreateModal(e) {
//     document.body.innerHTML = (films[Number(e.target.dataset.targetModalNumber)-1].ShowModal()) + document.body.innerHTML;
//     document.body.style.overflowY = 'hidden';
// }

// function CloseModal() {
//     let modal = document.getElementsByClassName('modal-wrapper');
//     modal[0].remove();
//     document.body.style.overflowY = 'scroll';
// }


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map