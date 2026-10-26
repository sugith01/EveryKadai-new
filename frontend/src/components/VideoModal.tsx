import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

export const VideoModal = ({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/B0tPPAYQ8CI",
  title = "Customer Success Story",
}: VideoModalProps) => {
  if (!isOpen) return null;

  // Check if URL points to a native video file (e.g. .mp4, .webm, .ogg)
  const isDirectVideoFile = /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(videoUrl);

  // Format YouTube URLs if needed
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    // If it's already an embed link
    if (url.includes('youtube.com/embed/')) {
      return url.includes('autoplay') ? url : `${url}${url.includes('?') ? '&' : '?'}autoplay=1&rel=0`;
    }
    // If it's standard watch link
    const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
      return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1&rel=0`;
    }
    // If it's just a raw YouTube ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
      return `https://www.youtube.com/embed/${url}?autoplay=1&rel=0`;
    }
    return url;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-black overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
          <h3 className="text-sm font-semibold text-white truncate pr-4">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {isDirectVideoFile ? (
            <video
              src={videoUrl}
              controls
              autoPlay
              className="absolute inset-0 h-full w-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={getEmbedUrl(videoUrl)}
              title={title}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};
