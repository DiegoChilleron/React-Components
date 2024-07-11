import { useRef, useEffect } from 'react';

export const openDialog = (videoId) => {
    const popup = document.getElementById('video-popup');
    const iframe = document.getElementById('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    document.body.classList.add('overflow-hidden');
    popup.showModal();
};

export const closeDialog = () => {
    const popup = document.getElementById('video-popup');
    const iframe = document.getElementById('iframe');
    iframe.src = '';
    document.body.classList.remove('overflow-hidden');
    popup.close();
};

export const DialogYouTube = () => {
    const closeButtonRef = useRef(null);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target === popupRef.current) {
                closeDialog();
            }
        };

        const closeButton = closeButtonRef.current;
        const popup = popupRef.current;

        closeButton.addEventListener('click', closeDialog);
        popup.addEventListener('click', handleClickOutside, { passive: true });

        return () => {
            closeButton.removeEventListener('click', closeDialog);
            popup.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const preventTouchMove = (e) => {
            e.preventDefault();
        };

        const popup = popupRef.current;

        if (popup) {
            popup.addEventListener('touchmove', preventTouchMove, { passive: false });

            return () => {
                popup.removeEventListener('touchmove', preventTouchMove);
            };
        }
    }, []);

    return (
        <dialog id="video-popup"
            ref={popupRef}
            className="bg-white/60 dark:bg-black/60 backdrop-blur-md rounded p-2 md:p-4 border-2 w-full md:9/12 lg:w-7/12 h-fit text-gray-800 dark:text-white">
            <button id="close-popup" ref={closeButtonRef} className="text-right pb-2">Cerrar</button>

            <iframe src="" id="iframe" className="aspect-video w-full h-full bg-black rounded" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </dialog>
    )
}
