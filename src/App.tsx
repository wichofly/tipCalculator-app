import { MenuItems } from './components/MenuItems';
import { OrderContents } from './components/OrderContents';
import { menuItems } from './data/db';
import { useOrder } from './hooks/useOrder';

function App() {
  const { order, addItem } = useOrder();

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

          <div className="space-y-3 mt-5">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 space-y-10">
          <OrderContents order={order} />
        </div>
      </main>
    </>
  );
}

export default App;
