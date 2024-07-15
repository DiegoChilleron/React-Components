import { useState } from 'react';
import { motion } from 'framer-motion';

import CloseIcon from '/src/img/CloseIcon.svg';
import img_01 from '/src/img/photos/img_01.webp';
import img_01_small from '/src/img/photos/img_01_small.webp';
import img_02 from '/src/img/photos/img_02.webp';
import img_02_small from '/src/img/photos/img_02_small.webp';
import img_03 from '/src/img/photos/img_03.webp';
import img_03_small from '/src/img/photos/img_03_small.webp';
import img_04 from '/src/img/photos/img_04.webp';
import img_04_small from '/src/img/photos/img_04_small.webp';
import img_05 from '/src/img/photos/img_05.webp';
import img_05_small from '/src/img/photos/img_05_small.webp';
import img_06 from '/src/img/photos/img_06.webp';
import img_06_small from '/src/img/photos/img_06_small.webp';
import img_07 from '/src/img/photos/img_07.webp';
import img_07_small from '/src/img/photos/img_07_small.webp';
import img_08 from '/src/img/photos/img_08.webp';
import img_08_small from '/src/img/photos/img_08_small.webp';
import img_09 from '/src/img/photos/img_09.webp';
import img_09_small from '/src/img/photos/img_09_small.webp';
import img_10 from '/src/img/photos/img_10.webp';
import img_10_small from '/src/img/photos/img_10_small.webp';
import img_11 from '/src/img/photos/img_11.webp';
import img_11_small from '/src/img/photos/img_11_small.webp';

export const ImageGallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: img_01,
            imgSrcSmall: img_01_small,
        },
        {
            id: 2,
            imgSrc: img_02,
            imgSrcSmall: img_02_small,
        },
        {
            id: 10,
            imgSrc: img_10,
            imgSrcSmall: img_10_small,
        },
        {
            id: 11,
            imgSrc: img_11,
            imgSrcSmall: img_11_small,
        },
        {
            id: 3,
            imgSrc: img_03,
            imgSrcSmall: img_03_small,
        },
        {
            id: 7,
            imgSrc: img_07,
            imgSrcSmall: img_07_small,
        },
        {
            id: 4,
            imgSrc: img_04,
            imgSrcSmall: img_04_small,
        },
        {
            id: 5,
            imgSrc: img_05,
            imgSrcSmall: img_05_small,
        },
        {
            id: 6,
            imgSrc: img_06,
            imgSrcSmall: img_06_small,
        },

        {
            id: 8,
            imgSrc: img_08,
            imgSrcSmall: img_08_small,
        },
        {
            id: 9,
            imgSrc: img_09,
            imgSrcSmall: img_09_small,
        },

    ];

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }} transition={{ duration: 2 }} whileInView={{ opacity: 100 }} viewport={{ once: true }}
            className=" bg-blue py-20" id="galeria">
            <h2>GALERÍA DE IMAGENES</h2>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} className="w-auto max-w-full h-auto max-h-full block m-auto" />
                <img src={CloseIcon} onClick={() => setModel(false)} className="fixed top-5 right-5 w-14 h-14 cursor-pointer" />
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 w-full mx-auto bg-blue p-[4vw]">


                {data.map((item, index) => (
                    <div className="transition-all duration-300 cursor-pointer mb-4" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img
                            srcSet={`${item.imgSrcSmall} 480w, ${item.imgSrc} 1080w`}
                            sizes="(max-width: 720px) 480px, 1080px"
                            src={item.imgSrc}
                            className="w-full rounded-md hover:brightness-75 hover:shadow-xl"
                            alt={`Imagen de la galería ${index}`}
                        />
                    </div>
                ))}
            </div>
        </motion.section>
    );
};
