export class Film {
    constructor(film) {
      this.film = film;
      this.favorite = false;
    }
    
    FilmView(){
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