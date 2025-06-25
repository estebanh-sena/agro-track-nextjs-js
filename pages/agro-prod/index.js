import AgroProdCard from "@/components/AgroProdCard";
import Head from "next/head";
import { getDataProd } from "@/pages/api/production";

export async function getStaticProps(params) {
  const data = await getDataProd();
  const crops = data.map((crop, index) => ({
    id: index + 1,
    ...crop,
  }));
  return {
    props: {
      crops,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default function AgroProdPage({ crops }) {
  return (
    <>
      <Head>
        <title> AgroTraking | Production </title>
      </Head>
      <main className="flex-1 max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4"> Agro Production Records</h1>
        <ul className="space-y-4">
          {crops.map((crop) => (
            <AgroProdCard key={crop.id} crop={crop} />
          ))}
        </ul>
      </main>
    </>
  );
}
