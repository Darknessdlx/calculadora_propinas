import type {MenuItem} from "../types";

interface Props {
    item: MenuItem
    addItem: (item: MenuItem) => void;
}

export const MenuItem = ({item, addItem}: Props) => {
    return (
        <button className={'border-2 border-teal-400 hover:bg-teal-200 w-full p-3 rounded-lg flex justify-between mb-5'}
        onClick={ () => addItem(item)}
        >
            <p>{item.name}</p>
            <p className={'font-black'}>${item.price}</p>
        </button>
    );
};
