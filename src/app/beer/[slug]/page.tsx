import { nodes } from "@/app/models/node";
import { redirect } from "next/navigation";

export type BeerPageProps = { params: { slug: string } };

export default function Page({ params }: BeerPageProps) {
  const node = nodes.find((node) => node.slug === params.slug);
  if (!node) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-24 h-screen place-items-center justify-center">
      <div className="w-1/2 flex flex-row justify-center">
        {node.parents?.length ? (
          node.parents.map((parent) => (
            <div className="basis-1/4 text-center" key={parent}>
              <a className="text-middle align-middle" href={`/beer/${parent}`}>
                {parent}
              </a>
            </div>
          ))
        ) : (
          <div className="basis-1/4 text-center">
            <a className="text-middle align-middle" href={`/`}>
              Le tour du monde de la bière
            </a>
          </div>
        )}
      </div>

      <div className="w-1/2 h-1/3">
        <h1 className="text-6xl">{node.title}</h1>
        <p>{node.description}</p>
        <div></div>
      </div>

      <div className="w-1/2 flex flex-row justify-center">
        {node.children?.length &&
          node.children?.map((parent) => (
            <div className="basis-1/4 text-center" key={parent}>
              <a href={`/beer/${parent}`}>{parent}</a>
            </div>
          ))}
      </div>
    </div>
  );
}
