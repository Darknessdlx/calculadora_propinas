import * as React from "react";

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

interface TipPercentajeFormProps {
    setTip: React.Dispatch<React.SetStateAction<number>>;
    tip: number;
}

export const TipPercentajeForm = ({ setTip, tip }: TipPercentajeFormProps) => {
    return (
        <div>
            <h2 className={'font-black text-2xl'}>Porcentaje de propina</h2>

            <form>
                {tipOptions.map(tipOption => (
                    <div className={'flex gap-2'} key={tipOption.id}>
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type={'radio'}
                            name={'tip'}
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tip === tipOption.value}
                        />

                    </div>
                ))}
            </form>
        </div>
    );
};
