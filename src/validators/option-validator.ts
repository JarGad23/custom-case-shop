// bg-zinc-950 border-zinc-950
// bg-blue-950 border-blue-950
// bg-rose-950 border-rose-950
// bg-yellow-400 border-yellow-400
// bg-lime-500 border-lime-500

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-950" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "Yellow", value: "yellow", tw: "yellow-500" },
  { label: "Green", value: "green", tw: "lime-500" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
  ],
} as const;
