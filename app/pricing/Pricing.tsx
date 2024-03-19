import PricingCard from "./PricingCard";

const pricingCards = [
  {
    title: "Freelancer",
    desc: "The essentials to provide your best work for clients.",
    price: "$24",
    list: [
      {
        name: "5 Products",
      },
      {
        name: "Up to 1,000 subscribers",
      },
      {
        name: "Basic analytics",
      },
      {
        name: "48-hour support response time",
      },
    ],
    popular: false,
    classes: {
      mainDiv: "rounded-2xl lg:rounded-r-none lg:rounded-l-2xl  sm:max-w-[410px] h-[430px]",
    },
  },
  {
    title: "Startup",
    desc: "A plan that scales with your rapidly growing business.",
    price: "$32",
    list: [
      {
        name: "25 Products",
      },
      {
        name: "Up to 10,000 subscribers",
      },
      {
        name: "Advanced  analytics",
      },
      {
        name: "24-hour support response time",
      },
      {
        name: "Marketing automations",
      },
    ],
    popular: true,
    classes: {
      mainDiv: " rounded-2xl lg:rounded-b-none lg:rounded-t-2xl w-[410px] h-[460px]",
    },
  },
  {
    title: "Enterprise",
    desc: "Dedicated support and infrastructure for your company.",
    price: "$48",
    list: [
      {
        name: "Unlimited products",
      },
      {
        name: "Unlimited subscribers",
      },
      {
        name: "Advanced analytics",
      },
      {
        name: "1-hour, dedicated support response time",
      },
      {
        name: "Marketing automations",
      },
    ],
    popular: false,
    classes: { mainDiv: "rounded-2xl lg:rounded-l-none lg:rounded-r-2xl w-[410px] h-[430px]" },
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      
      <div className="flex items-end py-3 lg:py-0 lg:px-3 flex-col lg:flex-row gap-3 lg:gap-0">
        {pricingCards.map((card, idx) => (
          <PricingCard card={card} key={idx} />
        ))}
      </div>
    </div>
  );
}
