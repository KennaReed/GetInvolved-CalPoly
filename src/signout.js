import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Signout() {
  localStorage.clear();
  document.location.reload();
}

export default Signout;
