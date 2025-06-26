import AgroProdCard from "@/components/AgroProdCard";
import Head from "next/head";
import { getDataProd } from "@/pages/api/production";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

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
      <main className="mx-auto ">
        <h1 className="text-2xl font-bold mb-4 text-center">
          <FontAwesomeIcon
            icon={faChartPie}
            className="text-green-700 me-1.5"
          />
          Agro Production Records
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {crops.map((crop) => (
            <AgroProdCard key={crop.id} crop={crop} />
          ))}
        </div>
      </main>
    </>
  );
}
