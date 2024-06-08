export interface NodePage {
  slug: string;
  title: string;
  parents?: string[];
  children?: string[];
  description: string;
}

export const nodes: NodePage[] = [
  { title: "Mixte", slug: "mixte" },
  { title: "Lactic Sour", slug: "lactic-sour", parents: ["mixte"] },
  { title: "American Sour", slug: "american-sour", parents: ["mixte"] },
  { title: "Grape ale", slug: "grape-ale", parents: ["mixte"] },
  { title: "Wild ale", slug: "wild-ale", parents: ["mixte"] },
  { title: "Spontanée", slug: "spontanee" },
  { title: "Gueuze", slug: "gueuze", parents: ["spontanee", "lambic"] },
  { title: "Lambic", slug: "lambic", parents: ["spontanee"] },
  { title: "Faro", slug: "faro", parents: ["spontanee"] },
  {
    title: "Oud Bruin",
    slug: "oud-bruin",
    parents: ["spontanee", "belgian-ale"],
  },
  { title: "Belgian-ale", slug: "belgian-ale", parents: ["ale"] },
  { title: "Lager", slug: "lager" },
  { title: "Ale", slug: "ale" },
  { title: "Pilsner", slug: "pilsner", parents: ["lager"] },
  { title: "Stout / Porter", slug: "stout-porter", parents: ["ale"] },
  { title: "Kölsch", slug: "kolsch", parents: ["lager", "ale"] },
].map((node) => ({
  ...node,
  description: `Description de la catégorie ${node.title} : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.
    `,
}));

nodes.forEach((node) => {
  const children = nodes.filter((child) => child.parents?.includes(node.slug));
  if (children.length === 0) {
    return
  }
  node.children = children.map((child) => child.slug);
});
