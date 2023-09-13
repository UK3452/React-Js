import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found!!`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function searchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  //   console.log(results);
  const content = (
    <main className="bg-slate-600 p-2 md:flex-row top-0 drop-shadow-x1">
      <div className="flex flex-row p-2 justify-center text-2xl mb-2 ml-5 dark:text-white">
        <h2 className="">{"You Searched for "}</h2>
        <b>&nbsp;{`${searchTerm}`}</b>
        <h2>{`, here are your Results...`}</h2>
      </div>
      <div className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
        {results ? (
          Object.values(results).map((result) => {
            return <Item key={result.pageid} result={result} />;
          })
        ) : (
          <h2 className="p-2 text-xl">{`${searchTerm} Not Found!!`}</h2>
        )}
      </div>
    </main>
  );

  return content;
}
