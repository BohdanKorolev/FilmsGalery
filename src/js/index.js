import { Film } from "./Film";

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
                films.push(new Film(film));
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
