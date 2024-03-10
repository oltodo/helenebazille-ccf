export const eventTypes = [
  {
    label: "Individuel",
    duration: 50,
    id: "solo",
    price: 50,
  },
  {
    label: "En couple",
    duration: 50,
    id: "duo",
    price: 60,
  },
  {
    label: "En famille",
    duration: 90,
    id: "tribe",
    price: 70,
  },
] as const;

export const locations = [
  {
    detail: "4 Rue Villeneuve,\n69440 Mornant",
    label: "Dans mon cabinet",
    id: "office",
  },
  {
    detail: "Le rendez-vous aura lieu en visio avec Google Meet",
    label: "Téléconsultation",
    id: "remote",
  },
] as const;
