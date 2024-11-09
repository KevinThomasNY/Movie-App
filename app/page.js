import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } } // Set this to "no-store" for no caching at all
  );
  const res = await data.json();

  return (
    <div className="container mx-auto">
      <div className="grid gap-12 lg:gap-10 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {res.results?.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}
