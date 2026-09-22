import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BeforeAfter({ beforeImage, afterImage, title, location }) {
  const [position, setPosition] = useState(50);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }

  function handleTouchMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }

  return (
    <div className="w-[70%] mx-auto">
      <div className="mb-4">
        <h3 className="font-heading text-ink">{title}</h3>
        <p className="text-sm text-muted">{location}</p>
      </div>
      
      <div
        className="relative h-[350px] overflow-hidden rounded-lg cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={() => setPosition(50)}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%236b7280'%3EAfter image not found%3C/text%3E%3C/svg%3E";
          }}
        />
        
        {/* Before Image (Foreground, clipped with clip-path) */}
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%236b7280'%3EBefore image not found%3C/text%3E%3C/svg%3E";
          }}
        />

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${position}%` }}
        >
          {/* Arrow Handles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-white rounded-full p-1 shadow-lg">
            <ArrowLeft size={16} className="text-brand" />
            <ArrowRight size={16} className="text-brand" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-brand/50 text-white text-xs px-2 py-1 rounded">
          After
        </div>
      </div>
    </div>
  );
}