import React from "react";

const ImageCard = ({ imageData, setImageModal }) => {
    return (
        <figure className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => setImageModal(imageData)}
        >

            {/* Image */}
            <img
                src={imageData?.image}
                alt={imageData?.title || "gallery image"}
                loading="lazy"
                className="w-full h-52 object-cover transition duration-300 group-hover:scale-105"
            />

            {/* Overlay (hover pe dikhega) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">

                {/* Caption */}
                <figcaption className="text-white text-sm p-3">
                    {imageData?.title}
                </figcaption>

            </div>

        </figure>
    );
};

export default ImageCard;