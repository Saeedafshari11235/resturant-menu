import { useState } from "react";
import "./App.css";
import menus from "./data";
import Categories from "./Components/Categories";

const allCategories = ["All", ...new Set(menus.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(menus);
  const [catogories, setCategories] = useState(allCategories);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline">
            <Categories category={catogories}></Categories>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
