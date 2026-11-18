import React, { useState } from "react";
import { PageId, GalleryItem } from "../types";
import { GALLERY_ITEMS, HERO_DATA } from "../data/trustData";
import { LightboxModal } from "../components/LightboxModal";
import {
  Play,
  Image as ImageIcon,
  School,
  Maximize2,
  Search,
  Info,
  Sparkles,
} from "lucide-react";

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenDonate,
}) => {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Images" | "Videos" | "Jamia"
  >("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null,
  );

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "Images" && item.category !== "image") return false;
    if (activeFilter === "Videos" && item.category !== "video") return false;
    if (activeFilter === "Jamia" && item.category !== "jamia") return false;

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const cap = (item.caption || "").toLowerCase();
      return cap.includes(q) || String(item.id).includes(q);
    }
    return true;
  });

  const selectedItem =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = () => {
    if (
      selectedItemIndex !== null &&
      selectedItemIndex < filteredItems.length - 1
    ) {
      setSelectedItemIndex(selectedItemIndex + 1);
    } else {
      setSelectedItemIndex(0);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null && selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    } else {
      setSelectedItemIndex(filteredItems.length - 1);
    }
  };

  return (
    <div className="bg-[#F7F3EA] text-[#29231B] selection:bg-[#B08A3C]/20 selection:text-[#29231B]">
      {/* Editorial Header Banner */}
      <section className="bg-[#29231B] text-[#F7F3EA] py-20 lg:py-28 border-b-2 border-[#B08A3C]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C18A] block">
              Curatorial Archives & Heritage Register
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F7F3EA]">
              Our Gallery
            </h1>
            <p className="text-base sm:text-xl text-[#D8C18A] font-serif italic pt-1 max-w-2xl leading-relaxed">
              Moments, Milestones and Memories of Our Journey.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Filter Strip & Search */}
      <section className="py-6 bg-white border-b border-[#E8DFC9] sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {(["All", "Images", "Videos", "Jamia"] as const).map((filter) => {
              const count =
                filter === "All"
                  ? GALLERY_ITEMS.length
                  : filter === "Images"
                    ? GALLERY_ITEMS.filter((i) => i.category === "image").length
                    : filter === "Videos"
                      ? GALLERY_ITEMS.filter((i) => i.category === "video")
                          .length
                      : GALLERY_ITEMS.filter((i) => i.category === "jamia")
                          .length;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all whitespace-nowrap shrink-0 ${
                    activeFilter === filter
                      ? "bg-[#29231B] text-[#D8C18A] shadow-xs"
                      : "bg-[#F7F3EA] text-[#51483C] hover:bg-stone-200"
                  }`}
                >
                  {filter === "Jamia" ? "Jamia Darul Ilmi" : filter} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search historical captions or record #..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C]"
            />
          </div>
        </div>
      </section>

      {/* Archival Authenticity Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        <div className="bg-white border border-[#E8DFC9] p-5 rounded-sm flex items-start gap-3.5 text-xs text-[#51483C] shadow-2xs">
          <Info className="w-4 h-4 text-[#B08A3C] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold text-[#29231B]">
              Archival Integrity Policy:{" "}
            </span>
            This official exhibition contains all 46 registered gallery entries
            from the ILMI Trust archives (40 photographs, 3 video broadcasts,
            and 3 Jamia Darul Ilmi entries). In accordance with curatorial
            authenticity rules, historical milestones with Union Ministers,
            foreign dignitaries, and Islamic scholars are accurately indexed.
          </p>
        </div>
      </div>

      {/* Masonry / Varied Editorial Layout Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white border border-[#E8DFC9] rounded-sm">
              <p className="text-sm text-[#51483C]">
                No gallery entries matched your query.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-semibold text-[#B08A3C] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
              {filteredItems.map((item, index) => {
                const isVideo = item.category === "video";
                const isJamia = item.category === "jamia";

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItemIndex(index)}
                    className="group cursor-pointer bg-white border border-[#E8DFC9] rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-[#B08A3C] transition-all duration-300 break-inside-avoid mb-8 inline-block w-full"
                  >
                    {/* Media Container - Natural Image Proportions */}
                    <div className="relative bg-[#F7F3EA] overflow-hidden">
                      {/* Display Image */}
                      {item.mediaUrl && (
                        <img
                          src={item.mediaUrl}
                          alt={item.caption || `Gallery image ${item.id}`}
                          loading="lazy"
                          className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        />
                      )}

                      {/* Video Representation */}
                      {isVideo && (
                        <div className="min-h-[220px] bg-[#29231B] flex flex-col items-center justify-center text-center p-6">
                          <div className="w-16 h-16 rounded-full bg-[#B08A3C] text-[#29231B] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-3">
                            <Play className="w-7 h-7 fill-current ml-1" />
                          </div>
                          <span className="text-[11px] font-mono uppercase tracking-widest text-[#D8C18A]">
                            Historical Footage
                          </span>
                        </div>
                      )}

                      {/* Top Left Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 bg-[#29231B]/90 backdrop-blur-xs text-[#D8C18A] text-[10px] font-mono tracking-wider rounded-xs border border-[#B08A3C]/30">
                          {isVideo
                            ? "VIDEO"
                            : isJamia
                              ? "JAMIA DARUL ILMI"
                              : `RECORD #${item.id}`}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#29231B]/90 via-[#29231B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20 text-white">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#D8C18A] uppercase tracking-wider mb-1">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Click to Inspect</span>
                        </div>
                        <p className="font-serif text-base font-semibold text-[#F7F3EA] line-clamp-2">
                          {item.caption || `Archive Record #${item.id}`}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Caption Card */}
                    <div className="p-5 bg-white border-t border-[#E8DFC9]">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08A3C] font-bold block mb-1">
                          Heritage Registry #{item.id}
                        </span>
                        <h3 className="font-serif text-base font-bold text-[#29231B] line-clamp-2 group-hover:text-[#B08A3C] transition-colors">
                          {item.caption || `Archive Record #${item.id}`}
                        </h3>
                      </div>

                      <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                        <span>ILMI Trust Heritage</span>
                        <span className="capitalize text-[#48634A] font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItemIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={selectedItemIndex ?? undefined}
        totalCount={filteredItems.length}
      />
    </div>
  );
};
