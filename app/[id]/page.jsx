import Image from "next/image";

export default async function Page({ params }) {
  const { id } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={imagePath + res.backdrop_path}
            alt=""
            width={1000}
            height={400}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {res.original_title}
            </h5>
            <p className="mb-3 font-normal text-gray-700">{res.overview}</p>
            <p className="mb-3 font-normal text-black">
              Runtime: {res.runtime} minutes
            </p>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {res.genres &&
                res.genres.length > 0 &&
                res.genres.map(function (genre) {
                  return (
                    <p
                      className="mb-3 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded "
                      style={{ marginRight: "10px" }}
                    >
                      {genre.name}
                    </p>
                  );
                })}
            </div>

            <h5 className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg">
              {res.status}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
