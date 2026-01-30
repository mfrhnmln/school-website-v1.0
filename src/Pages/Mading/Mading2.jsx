import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import MadingHeader from "./MadingHeader";
import MadingFooter from "./MadingFooter";

import ComponentsMadingImg from "./ComponentsMadingImg";
import ComponentsMadingNews from "./ComponentsMadingNews";
import ComponentsMadingVideo from "./ComponentsMadingVideo";
import ComponentsMadingVideoLocal from "./ComponentsMadingVideoLocal";

import DataMading from "../../Data/DataMading";

const Mading = () => {
  //  THEME (single source)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  //  MEDIA FILTER
  const images = useMemo(
    () => DataMading.media.filter((m) => m.type === "image"),
    [],
  );

  const videos = useMemo(
    () =>
      DataMading.media.filter(
        (m) => m.type === "video_local" || m.type === "video_youtube",
      ),
    [],
  );

  //  IMAGE ROTATION
  const [imageIndex, setImageIndex] = useState(0);
  const imageTimerRef = useRef(null);

  useEffect(() => {
    if (!images.length) return;

    imageTimerRef.current = setTimeout(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 60000);

    return () => clearTimeout(imageTimerRef.current);
  }, [imageIndex, images]);

  //  VIDEO ROTATION
  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = useCallback(() => {
    setVideoIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const renderVideo = () => {
    if (!videos.length) {
      return <p className="text-title">Tidak ada video</p>;
    }

    const video = videos[videoIndex];

    if (video.type === "video_youtube") {
      return <ComponentsMadingVideo src={video.src} onVideoEnd={nextVideo} />;
    }

    return (
      <ComponentsMadingVideoLocal src={video.src} onVideoEnd={nextVideo} />
    );
  };

  //  RENDER
  return (
    <div className="h-[100svh] w-full bg-[var(--background_mading)] flex flex-col">
      {/* HEADER */}
      <div className="p-4">
        <MadingHeader theme={theme} setTheme={setTheme} />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 px-4 overflow-hidden">
        {/* LEFT IMAGE */}
        <div className="rounded-md overflow-hidden bg-black">
          <ComponentsMadingImg src={images[imageIndex]?.src} />
        </div>

        {/* RIGHT VIDEO */}
        <div className="rounded-md overflow-hidden bg-black">
          {renderVideo()}
        </div>
      </div>

      {/* NEWS */}
      <div className="px-4 py-3">
        <h2 className="text-subtitle mb-3">Berita Terbaru</h2>

        {/* FIXED HEIGHT NEWS */}
        <div className="h-[300px]">
          <ComponentsMadingNews />
        </div>
      </div>

      {/* FOOTER */}
      <MadingFooter />
    </div>
  );
};

export default Mading;
