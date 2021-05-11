import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Signout() {
  localStorage.clear();
  document.location.replace("https://getinvolvedcalpoly.herokuapp.com/");
}

export default Signout;
