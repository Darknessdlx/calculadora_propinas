import type {OrderItem} from "../types";
import {useMemo} from "react";
import {formartCurrency} from "../helpers";

interface OrderTotalsProps {
    order: OrderItem[];
}

export const OrderTotals = ({order}: OrderTotalsProps) => {

    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0)
    , [order])

    return (
        <>
            <div className={'space-y-3'}>
                <h2 className={'font-black text-2xl'}>Totales y propina:</h2>
                <p>Subtotal a pagar: {''}<span className={'font-bold'}>{formartCurrency(subTotalAmount)}</span></p>
                <p>Propina: {''}<span className={'font-bold'}> $0</span></p>
                <p>Total a pagar: {''}<span className={'font-bold'}> $0</span></p>

            </div>

            <button>


            </button>
        </>
    );
};
