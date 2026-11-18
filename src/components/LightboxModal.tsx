import React from 'react';
import { X, ChevronLeft, ChevronRight, Play, Film, Image as ImageIcon, School } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#29231B] border border-[#B08A3C]/40 rounded-sm overflow-hidden text-[#F7F3EA] shadow-2xl">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#B08A3C]/20 bg-[#1F1A14]">
          <div className="flex items-center gap-2 text-xs text-[#D8C18A]">
            <span className="font-semibold uppercase tracking-wider">
              {item.category === 'video' ? 'Archive Video' : item.category === 'jamia' ? 'Jamia Darul Ilmi' : 'Historical Archive'}
            </span>
            {currentIndex !== undefined && totalCount !== undefined && (
              <>
                <span className="text-stone-500">·</span>
                <span className="text-stone-300 tabular-nums">Record {currentIndex + 1} of {totalCount}</span>
              </>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white transition-colors rounded-sm"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Display Area */}
        <div className="relative bg-[#15120E] min-h-[350px] sm:min-h-[460px] flex items-center justify-center p-4 sm:p-8">
          {item.category === 'video' ? (
            /* Video Simulation Player */
            <div className="w-full max-w-2xl bg-black rounded border border-[#B08A3C]/30 overflow-hidden shadow-xl">
              <div className="relative aspect-video bg-stone-900 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#B08A3C] text-[#29231B] flex items-center justify-center shadow-lg mb-4 hover:scale-105 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium max-w-md">
                  {item.caption || "ILMI Trust Official Archival Footage"}
                </h4>
                <p className="text-xs text-stone-400 mt-2">
                  Official historical coverage recorded during institutional proceedings.
                </p>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-400 font-mono">
                  <span>00:00 / 08:45</span>
                  <span className="text-[#D8C18A]">HD Official Archive</span>
                </div>
              </div>
            </div>
          ) : (
            /* Image Display with Elegant Museum Presentation */
            <div className="w-full flex flex-col items-center">
              <div className="relative max-h-[60vh] rounded border border-[#B08A3C]/20 overflow-hidden bg-stone-900/50 p-2 flex items-center justify-center">
                {item.mediaUrl ? (
                  <img
                    src={item.mediaUrl}
                    alt={item.caption || "ILMI Trust Archival Photograph"}
                    referrerPolicy="no-referrer"
                    className="max-h-[55vh] object-contain rounded-xs"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] max-w-lg bg-gradient-to-br from-[#29231B] to-[#1F1A14] flex flex-col items-center justify-center p-8 text-center border border-[#B08A3C]/30">
                    <div className="w-14 h-14 rounded-full bg-[#B08A3C]/10 border border-[#B08A3C]/40 flex items-center justify-center text-[#B08A3C] mb-4">
                      {item.category === 'jamia' ? <School className="w-7 h-7" /> : <ImageIcon className="w-7 h-7" />}
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#D8C18A] mb-2 font-mono">
                      Archival Record #{item.id}
                    </span>
                    <p className="font-serif text-lg text-white font-medium max-w-sm">
                      {item.caption || "Institutional Milestone Archive"}
                    </p>
                    <p className="text-xs text-stone-400 mt-2 max-w-xs">
                      Documented in ILMI Trust photographic and physical register archives.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#29231B]/80 text-[#F7F3EA] hover:text-[#D8C18A] hover:bg-[#29231B] border border-[#B08A3C]/30 transition-all focus:outline-none"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#29231B]/80 text-[#F7F3EA] hover:text-[#D8C18A] hover:bg-[#29231B] border border-[#B08A3C]/30 transition-all focus:outline-none"
              aria-label="Next item"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="px-6 py-4 bg-[#1F1A14] border-t border-[#B08A3C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-serif text-base text-[#F7F3EA] font-semibold">
              {item.caption || `Archive Record #${item.id}`}
            </h4>
            <div className="flex items-center gap-2 text-xs text-stone-400 mt-0.5">
              <span>ILMI Trust Heritage Registry</span>
              <span>·</span>
              <span className="capitalize">{item.category}</span>
              <span>·</span>
              <span>Azhagiya Kadan Historical Archive</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
