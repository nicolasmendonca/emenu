import React from "react";
import Header from "./components/Header";
import CategoriesList from "./components/CategoriesList";

function App() {
  return (
    <div className="App">
      <Header
        title="El Taller"
        backgroundImageUrl="http://www.taller.com.ar/img/about/about-ElTaller-Cerveceria.jpg"
      />
      <CategoriesList
        categories={[
          { id: 1, name: "Entrada" },
          { id: 2, name: "Pizzas" },
          { id: 3, name: "Empanadas" },
          { id: 4, name: "Canastas" },
          { id: 5, name: "Parrilla" }
        ]}
      />
    </div>
  );
}

export default App;
