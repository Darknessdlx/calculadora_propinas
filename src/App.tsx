import {menuItems} from "./data/db.ts";
import {MenuItem} from "./components/MenuItem.tsx";
import {useOrder} from "./hooks/useOrder.ts";

function App() {

    const { addItem } = useOrder();

    return (
        <>
            <header className='bg-teal-400 py-5'>
                <h1 className={'text-center text-4xl font-black'}>Calculadora de propinas y consumo</h1>
            </header>


            <main className='max-w-7xl mx-auto py-2 bg-gray-50 grid md:grid-cols-2 gap-10'>
                <div className={'p-5'}>
                    <h2 className={'font-black text-4xl'}>Menu</h2>

                    <div className={'space-y-3 mt-5'}>
                        {menuItems.map((item) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                addItem={addItem}

                            />
                        ))}
                    </div>

                </div>

                <div>
                    <h2>Consumo</h2>

                </div>

            </main>

        </>
    )
}

export default App
