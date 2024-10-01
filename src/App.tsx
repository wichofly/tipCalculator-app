import { MenuItems } from './components/MenuItems';
import { menuItems } from './data/db';
import { useOrder } from './hooks/useOrder';

function App() {
  const { addItem } = useOrder();

  return (
    <>
      <header className="bg-gray-600 py-5">
        <h1 className="text-3xl font-bold text-white text-center">
          Tip and Consumption Calculator
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-bold">Menu</h2>
          <div className="space-y-2 mt-5">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-4xl font-bold">Consume</h2>
        </div>
      </main>
    </>
  );
}

export default App;
