const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-15',
    value: 0.15,
    label: '15%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
];

interface Props {
  setTipPercentage: (tip: number) => void;
}

export const TipPercentage = ({ setTipPercentage }: Props) => {
  return (
    <div>
      <h3 className="font-bold text-2xl border-b-2 border-gray-200 pb-1">
        Tip
      </h3>

      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-1">
            <label htmlFor="">{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={(e) => setTipPercentage(+e.target.value)}
              className="cursor-pointer accent-stone-600"
            />
          </div>
        ))}
      </form>
    </div>
  );
};
