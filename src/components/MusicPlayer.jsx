import { useEffect, useRef, useState } from "react";
import { Music, PauseCircle } from "lucide-react"; // ikon lucide-react

export default function MusicPlayer({ play }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (play && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [play]);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 bg-gold rounded-full p-3 shadow-lg cursor-pointer hover:scale-110 transition-transform">
      <audio ref={audioRef} src="/src/assets/ANUGERAH_TERINDAH.mp3" loop />
      {isPlaying ? (
        <PauseCircle onClick={toggleMusic} className="text-white w-6 h-6" />
      ) : (
        <Music onClick={toggleMusic} className="text-white w-6 h-6" />
      )}
    </div>
  );
}
