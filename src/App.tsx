import { useReducer } from 'react';
import Footer from './components/Footer';
import { MenuItems } from './components/MenuItems';
import { OrderContents } from './components/OrderContents';
import { OrderTotals } from './components/OrderTotals';
import { ShowIfOrderExists } from './components/ShowIfOrderExists';
import { TipPercentage } from './components/TipPercentage';
import { menuItems } from './data/db';
import { initialState, orderReducer } from './reducers/orderReducer';

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-slate-700 py-5">
        <h1 className="text-3xl font-bold text-white text-center">
          Tip and Consumption Calculator
        </h1>
      </header>

      <div className="bg-slate-50">
        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
          <div className="p-5">
            <h2 className="text-4xl font-bold">Menu</h2>

            <div className="space-y-3 mt-5">
              {menuItems.map((item) => (
                <MenuItems key={item.id} item={item} dispatch={dispatch} />
              ))}
            </div>
          </div>

          <div className="border border-dashed rounded-md border-slate-300 p-5 space-y-10">
            <ShowIfOrderExists order={state.order}>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPercentage tip={state.tip} dispatch={dispatch} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </ShowIfOrderExists>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
