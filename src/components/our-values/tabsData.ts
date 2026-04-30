export type TabItem = {
  key: "mission" | "focus" | "solution";
  label: string;
  image: string;
  title: string;
  body: string;
};

export const tabs: TabItem[] = [
  {
    key: "mission",
    label: "mission",
    image: "/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png",
    title:
      "Our mission is to transform supply chain efficiency and engagement by leveraging blockchain technology to enhance transparency, collaboration, and customer loyalty.",
    body:
      "From raw materials to recycling, we empower businesses to optimize workflows, build stronger brand connections, and deliver sustainable value to every stakeholder in the chain.",
  },
  {
    key: "focus",
    label: "focus",
    image: "/lovable-uploads/5f3a96ab-793d-4332-8f53-403309de85cf.png",
    title:
      "Our focus is on helping companies stay ahead of evolving regulations while ensuring a tangible return on investment.",
    body:
      "We guide organizations in targeting and engaging the right audiences (from legislators to end consumers) across both B2B and B2C environments. By employing a progressive, future-proof approach, we enable companies to meet (and exceed) their sustainability goals without compromising budgets or growth.",
  },
  {
    key: "solution",
    label: "solution",
    image: "/lovable-uploads/82288ca1-a71b-4e6d-be31-fc4db3f8778d.png",
    title: "Our platform goes beyond mere compliance.",
    body:
      "By identifying and collaborating with key partners in the value chain, we help businesses integrate a truly circular approach that aligns with European values and environmental objectives. Whether you're seeking to reduce waste, boost resource efficiency, or enhance brand loyalty, our solution puts you at the forefront of sustainable innovation today and into the future.",
  },
];
