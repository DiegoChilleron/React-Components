import { Link } from 'react-router-dom';
import { Card } from './Card';


export const ListSection = ({ title, description, bgColors, lastThreeData }) => {

    return (

        <article className={`p-5 md:p-10 my-20 rounded-3xl bg-gradient-120 ${bgColors} from-75% to-75%`}>
            <h3 className="text-white">{title}</h3>
            <h4 className="text-white">{description}</h4>
            <div id={title} className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {lastThreeData.map(item => (
                    <Card key={item.videoId} title={item.title} videoId={item.videoId} thumbnail={item.thumbnail} />
                ))}
            </div>
            <div className="flex justify-end">
                <Link to="portfolio"
                    className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-gray-200 border-2 border-gray-200 rounded-full hover:text-white group hover:bg-gray-50">
                    <span
                        className="absolute left-0 block w-full h-0 transition-all bg-gray-800 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span
                        className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative">Ver más...</span>
                </Link>
            </div>

        </article>


    );
};


