import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { getDataProd, getDataProdById } from "../api/production";

export async function getStaticPaths() {
  const data = getDataProd();
  const crops = await data;
  const paths = crops.map((crop, index) => ({
    params: { crop_id: (index + 1).toString() },
  }));
  return {
    paths,
    fallback: false, // or true/ 'blocking' if you want to enable dynamic paths
  };
}

export async function getStaticProps({ params }) {
  const data = await getDataProdById(params.crop_id);
  if (!data) {
    return {
      notFound: true, // Return 404 if crop not found
    };
  }
  return {
    props: {
      crop: data,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default function CropDetails({ crop }) {
  const { cultivo_transitorio, periodo, a_o, ...details } = crop;
  return (
    <div className="container px-4 mx-auto">
      <div className="mx-auto p-6 pb-1 border bg-white rounded-md shadow-dashboard">
        <div className="flex flex-wrap items-center justify-between mb-1 -m-2">
          <div className="w-auto p-2">
            <h2 className="text-lg font-semibold text-coolGray-900">
              {cultivo_transitorio}
            </h2>
            <p className="text-xs text-coolGray-500 font-medium">
              {periodo} - {a_o}
            </p>
          </div>
          <div className="w-auto p-2"></div>
        </div>

        <div className="flex flex-wrap">
          {Object.entries(details).map(([key, value], idx, arr) => (
            <div
              key={key}
              className={`w-full ${
                idx !== arr.length - 1 ? "border-b border-coolGray-100" : ""
              }`}
            >
              <div className="flex flex-wrap items-center justify-between py-4 -m-2">
                <div className="w-auto p-2">
                  <div className="flex flex-wrap items-center -m-2">
                    <div className="w-auto p-2">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-50 text-green-500 rounded-md">
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h2 className="text-sm font-medium text-coolGray-900">
                        {key
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <p className="text-xs text-coolGray-500 font-medium">
                    {value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
