import { twMerge } from "tailwind-merge";

export default function PricingCard({ card }: any) {
  return (
    <div
      className={twMerge(
        "border border-borderColor py-6 px-8 flex flex-col justify-between",
        card?.classes?.mainDiv
      )}
    >
      <div className="flex items-center justify-between">
        <p className={twMerge("font-semibold text-title text-lg leading-8",card.popular ? "text-purple" : "")}>
          {card.title}
        </p>
        {card.popular ? <p className=" text-purple font-semibold text-xs bg-purple/10 px-3 py-1.5 rounded-full ">Most Popular</p> : null}
      </div>

      <p className="text-normal text-sm">{card.desc}</p>
      <p>
        <span className="text-title text-4xl font-bold">{card.price}</span>{" "}
        <span>/month</span>
      </p>
      <ul className="flex flex-col gap-3">
        {card?.list?.map((l: any, i: number) => (
          <li
            className="text-normal text-[14px] flex  items-center gap-2"
            key={i}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#4f46ff"
              aria-hidden="true"
              className="w-4 h-4 !text-purple-600"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {l.name}
          </li>
        ))}
      </ul>
      <button className="border border-borderColor text-sm py-2 rounded-lg text-purple">
        Buy Plan
      </button>
    </div>
  );
}
