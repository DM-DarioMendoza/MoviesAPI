window.addEventListener('DOMContentLoaded', navigator, false);// carga el contenido al cargar la pagina
window.addEventListener('hashchange', navigator, false); // sirve para escuchar la petición

function navigator() {
  console.log({ location });
  
  if (location.hash.startsWith('#trends')) { // el if sirve para preguntar si estamos en #trends
    trendsPage(); // si entra a #trends manda a llamar la funcion trendsPage()
  } else if (location.hash.startsWith('#search=')) { // el if sirve para preguntar si estamos en search=
    searchPage(); // si entra a search= manda a llamar la funcion searchPage()
  } else if (location.hash.startsWith('#movie=')) { // el if sirve para preguntar si estamos en #movie=
    movieDetailsPage(); // si entra a movie= manda a llamar la funcion movieDetailsPage()
  } else if (location.hash.startsWith('#category=')) {  // el if sirve para preguntar si estamos en #category=
    categoriesPage(); // si entra a #category= manda a llamar la funcion categoriesPage()
  } else {
    homePage(); // si no entra a ninguno se va a home
  }
}


function homePage() {  
  console.log('Home!!');

  getTrendingMoviesPreview();
  getCategegoriesPreview();
}

function categoriesPage() {
  console.log('categories!!');
}

function movieDetailsPage() {
  console.log('Movie!!');
}

function searchPage() {
  console.log('Search!!');
}

function trendsPage() {
  console.log('TRENDS!!');
}
