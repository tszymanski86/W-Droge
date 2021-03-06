const LUGGAGE_DATA = [
  {
    category: "elektronika",
    things: [
    { name: "telefon" },
    { name: "ładowarka"},
    {
      name: "pendrive",
      inputType: "textarea",
      value: "zgrać zdjęcia",
    },
    ],
  },
  {
    category: "ubrania",
    things: [
    { name: "kurtka" },
    { name: "skarpetki",
      inputType : "number",
      value : 6,
    },
    {
      name: "majtki",
      inputType : "number",
      value: 5,
    },
    ],
  },
  {
    category: "jedzenie",
    things: [
    {
      name: "parówki",
      inputType : "number",
      value: 10,
    },
    { name: "kanapki" },
    { name: "konserwa"}
    ],
  },
  {
    category: "inne",
    things: [
    {
      name: "książka",
      inputType : "text",
      value: "Potop",
    },
    { name: "bilet" },
    { name: "dokumenty"},
    { name: "krem z filtrem"}
    ],
  },
  ];

export default LUGGAGE_DATA;