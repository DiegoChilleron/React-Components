import { openDialog } from './DialogYouTube';

import youtubeIcon from '/src/img/youtube-icon.svg';

export function Card({ title, videoId, thumbnail }) {

    return (

        <button className="video-card group" onClick={() => openDialog(videoId)} >

            <div className="relative  pb-[56%]">
                <img src={youtubeIcon} alt="YouTube Icon" className="youtube-icon" />
                <img src={thumbnail} alt={`Ver ${title} en YouTube`} className=" absolute rounded object-cover w-full h-full bg-black" loading="lazy" />
            </div>

            <h4 className=" px-2 truncate font-medium group-hover:text-red-700">{title}</h4>
       
        </button>

    )
}
