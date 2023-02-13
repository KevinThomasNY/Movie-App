import TV from "./tv";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div className="container mx-auto">
      <div className="grid gap-12 lg:gap-10 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {res.results?.map((movie) => {
          return (
            <TV
              key={movie.id}
              id={movie.id}
              title={movie.name}
              poster_path={movie.poster_path}
              release_date={movie.first_air_date}
            />
          );
        })}
      </div>
    </div>
  );
}
