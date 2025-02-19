import React, { useState } from "react";
import { X } from "lucide-react";
interface ExpandableImageProps {
  src: string;
  alt: string;
}
const ExpandableImage = ({ src, alt }: ExpandableImageProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {/* Mobile Expanded View */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] sm:hidden flex items-center justify-center"
          onClick={handleToggle}
        >
          <div
            className="relative w-[90%] max-h-[90%] bg-white rounded-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleToggle}
              className="absolute -right-3 -top-3 p-2 bg-white rounded-full hover:bg-gray-100 "
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
            <p className="text-center mt-3 text-gray-700 font-medium">{alt}</p>
          </div>
        </div>
      )}

      {/* Normal Image View */}
      <div
        className="w-full cursor-pointer transition-transform duration-200 active:scale-95 sm:active:scale-100"
        onClick={() => {
          if (window.innerWidth < 640) {
            // Only trigger on mobile
            handleToggle();
          }
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg  object-fill"
        />
      </div>
    </>
  );
};
export default ExpandableImage;
