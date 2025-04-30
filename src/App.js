import { useState } from "react";
import "./App.css";
import menus from "./data";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";

const allCategories = ["All", ...new Set(menus.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(menus);
  const [catogories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === "All") {
      setMenu(menus);
      return;
    }

    setMenu(menus.filter((menu) => menu.category === category));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline">
            <Categories category={catogories} filterMenu={filterMenu} />
            <Menu menu={menu} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
