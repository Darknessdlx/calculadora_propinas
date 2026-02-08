import type {OrderItem} from "../types";
import {useCallback} from "react";
import {formartCurrency} from "../helpers";

interface OrderTotalsProps {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
}

export const OrderTotals = ({order, tip, placeOrder}: OrderTotalsProps) => {

    const subTotalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.quantity), 0)
    , [order])
    const tipAmount = useCallback(() => (subTotalAmount() * tip), [tip, order])
    const totalAmount = useCallback(() => subTotalAmount() + tipAmount(), [tip, order])

    return (
        <>
            <div className={'space-y-3'}>
                <h2 className={'font-black text-2xl'}>Totales y propina:</h2>
                <p>Subtotal a pagar: {''}<span className={'font-bold'}>{formartCurrency(subTotalAmount())}</span></p>
                <p>Propina: {''}<span className={'font-bold'}>{formartCurrency(tipAmount())}</span></p>
                <p>Total a pagar: {''}<span className={'font-bold'}>{formartCurrency(totalAmount())}</span></p>

            </div>

            <button
                className={'bg-black w-full p-3 uppercase text-white font-bold mt-10 rounded-lg disabled:opacity-10'}
                disabled={totalAmount() === 0}
                onClick={placeOrder}
            >
                guardar orden

            </button>
        </>
    );
};
