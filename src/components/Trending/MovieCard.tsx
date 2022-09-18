import { BiTime } from "react-icons/bi";
import { Movie } from './moviesData';

export interface MovieCardProps {
    movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <div className='bg-primary rounded-md shadow-md shadow-primary relative overflow-hidden hover:shadow-lg hover:shadow-primary'>
            <img src={movie.src} className="w-full" alt='' />
            <div className='p-4 text-white'>
                <h4>{movie.title}</h4>
                <p>{movie.main}</p>
            </div>
            <div className='absolute flex justify-between items-center bg-cyan-50 rounded-md top-2 left-2 p-2 min-w-[25%]'>
                <BiTime />
                <p>{movie.runtime}</p>
            </div>
        </div>
    );
}
