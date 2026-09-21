import React, { useState } from "react";
import { Section, Button, Icon, ScrollReveal } from "../ui";
import { videoData } from "../../data";

const VideoModal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl aspect-video">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
          aria-label="Close video"
        >
          <Icon name="close" size={32} />
        </button>
        <iframe
          src={videoUrl}
          className="w-full h-full rounded-lg"
          title="Kitchen Remodeling Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section background="primary" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Thumbnail */}
          <ScrollReveal>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
                 onClick={() => setIsModalOpen(true)}>
              <img
                src={videoData.posterImage}
                alt="Video thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="play" size={32} className="text-primary ml-1" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={200}>
            <div className="text-white space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                {videoData.heading}
              </h2>
              <p className="text-lg text-neutral-200">
                {videoData.subheading}
              </p>
              <Button
                href={videoData.cta.href}
                variant="secondary"
                size="lg"
              >
                {videoData.cta.text}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {isModalOpen && (
        <VideoModal
          videoUrl={videoData.videoUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Video;
