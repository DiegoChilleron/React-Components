
import listado_json from '#YOUR_JSON_FILE#';
import listado_json_02 from '#YOUR_JSON_FILE#';
import listado_json_03 from '#YOUR_JSON_FILE#';

import { ListSection } from './ListSection'

const videoSections = [

    {
        title: '#YOUR_TITLE#',
        description: '#YOUR_DESCRIPTION#',
        bgColors: ' from-[#2B2A38] to-[#BD233D]',
        lastThreeData: listado_json.slice(0, 3), //last 3 videos
    },
    {
        title: '#YOUR_TITLE#',
        description: '#YOUR_DESCRIPTION#',
        bgColors: ' from-[#2B2A38] to-[#BD233D]',
        lastThreeData: listado_json_02.slice(0, 3), //last 3 videos
    },
    {
        title: '#YOUR_TITLE#',
        description: '#YOUR_DESCRIPTION#',
        bgColors: ' from-[#2B2A38] to-[#BD233D]',
        lastThreeData: listado_json_03.slice(0, 3), //last 3 videos
    },
]

export function PortfolioMultimedia() {

    return (
        <section id="portfolio" className="pt-10">
            <h2 className="md:pl-14">PORTFOLIO MULTIMEDIA</h2>
            {videoSections.map((videoSection) => (
                <ListSection
                    key={videoSection.title}
                    {...videoSection}
                    />
            ))}
        </section>
    );
}

