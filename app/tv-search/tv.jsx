import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-base font-bold">{title}</h1>
      <h2 className="text-sm text-gray-700">{release_date}</h2>
      <Link href={`/tv/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={500}
          height={800}
          alt={title}
          className="w-full"
        />
      </Link>
    </div>
  );
}
