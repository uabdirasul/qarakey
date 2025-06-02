type YouTubeProps = {
  id: string;
  title?: string;
};

export default function InstructionYTVideo({
  id,
  title = "YouTube video"
}: YouTubeProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video my-6">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
