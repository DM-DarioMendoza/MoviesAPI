// agregamos lalibreria axios
const apiAxios = axios.create({
    baseURL: 'https://api.themoviedb.org/3/', // se agrega la base de la URL que se va a ingresar en cada peticion de la api
    headers: {
      'Content-Type': 'application/json;charset=utf-8',// le decimos que la respuesta siepre va a ser en json
    },
    params: {
      'api_key': API_KEY, // agregamos un pametro con la instacia 'api_key' para nuesta llave secreta
    },
  });


async function getTrendingMoviesPreview(){

    const { data } = await apiAxios('trending/movie/day');// directamente traemos url del apiAxios + 'trending/movie/day' + apy_key
    const movies = data.results; //creamos una variable para ver los resultados de esa data

    // se comenta para pasarlo a axios
    //const res= await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY); // se pone la ruta del API que se va a consumir
    //const data = await res.json(); // le decimos que la data va ser de tipo json

    movies.forEach(movie => { //vamos a hacer una interaccion por cada pelicula  con forEach

     const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList') //selecciona el elemento que traiga #trendingPreview y que traiga la clase trendingPreview-movieList

     const movieContainer= document.createElement('div'); // creamos el div
     movieContainer.classList.add('movie-container'); // creamos la classe movie-container

     const movieImg = document.createElement('img'); // creamos la imagen y se le tiene que agregarmas propiedades
     movieImg.classList.add('movie-img'); // creamos la classe movie-img
     movieImg.setAttribute('alt', movie.title);// agregar el nombre de la pelicula al alt
     movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path,); // se le agrega al src la url base + el poster del API

     movieContainer.appendChild(movieImg);//llamar mi movieContainer y agregarle movieImg
     trendingPreviewMoviesContainer.appendChild(movieContainer); //llamar a trendingPreviewMoviesContainer y agregarle movieContainer
 });
}

  getTrendingMoviesPreview();// mandamos a llamar la función

  async function getCategoriesPreview(){

    const { data } = await apiAxios('genre/movie/list');// directamente traemos url del apiAxios + 'genre/movie/list' + apy_key

        // se comenta para pasarlo a axios
    // const res= await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY); // se pone la ruta del API que se va a consumir
    // const data = await res.json(); // le decimos que la data va ser de tipo json

    const categorias = data.genres; //creamos una variable para ver los 'genres' generos de esa data

    categorias.forEach(categoria => { //vamos a hacer una interaccion por cada categoria  con forEach

        const PreviewCategoriasContainer = document.querySelector('#categoriesPreview .categoriesPreview-list') //selecciona el elemento que traiga #categoriesPreview y que traiga la classe categoriesPreview-list

        const CategoryContainer= document.createElement('div'); // creamos el div
        CategoryContainer.classList.add('category-container'); // creamos la classe category-container

        const CategoryTitle = document.createElement('h3'); // creamos la propiedad para el texto <h3>
        CategoryTitle.classList.add('category-title'); // creamos la classe category-title
        CategoryTitle.setAttribute('id', 'id' + categoria.id);// agregar el <id> del genero html, 'id' agrega el id de .css, agrega la categoria id de la data
        const CategoryTitleTex = document.createTextNode(categoria.name); // creamos el texto del titulo de la data

        CategoryTitle.appendChild(CategoryTitleTex); // insertamos a CategoryTitle el CategoryTitleTex
        CategoryContainer.appendChild(CategoryTitle); // insertamos a CategoryContainer el CategoryTitle
        PreviewCategoriasContainer.appendChild(CategoryContainer); // insertamos PreviewCategoriasContainer el CategoryContainer
    });
   }

   getCategoriesPreview(); // mandamos a llamar la función