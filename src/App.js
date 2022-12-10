import logo from './logo.svg';
import './App.css';
import Restaurantes from './componentes/Restaurantes.js';

function App() {
  return (
    <div claaName = 'App'>
      <h1> Restaurantes </h1>
      <header>
        <nav>
            <ul class="menu">
                <li ><a href="./Pages/directory.html">Directory</a></li>
                <li><a href="index.html">Restaurant</a></li>
                <li><a href="./Pages/search.html">Search</a></li>
                <li><a href="./Pages/newRestaurant.html">New</a></li>
            </ul>
        </nav>
      </header>
      <Restaurantes 
      imagen='Restaurant_0.jpg'
      nombre='Pacifico Mar'
      direccion='Av 85 Nro 45 - 85'
      ciudad='Barranquilla'
      descripcion='Deliciosa comida de mar'
      />
      <Restaurantes 
      imagen='Restaurant_1.jpg'
      nombre='Italiano 65'
      direccion='Av. 45 Nro. 1 - 85'
      ciudad='Medellín'
      descripcion='Deliciosa comida italiana'
      />
      <Restaurantes 
      imagen='Restaurant_2.jpg'
      nombre='Fritos y Más'
      direccion='Calle 45'
      ciudad='Medellín'
      descripcion='Comida Rápida'
      />
      <Restaurantes 
      imagen='Restaurant_3.jpg'
      nombre='Pollo Frito'
      direccion='Cr 32 # 56 - 89'
      ciudad='Bogotá'
      descripcion='Lo mejor del pollo frito'
      />
    </div>
    
  );
}

export default App;
