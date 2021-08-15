import { useData } from "../../context";
import { HomeHeader, VideoCard } from "../../components";

export default function Home() {
  const { videos } = useData();
console.log(videos, "from home component")
  return (
    <div>
      <HomeHeader />
      <div className="space-y-1"></div>
      <div className="space-y-1"></div>
      <div className="container">
        <h1>All Videos</h1>
        {videos.map((videoItem) => (
          <VideoCard key={videoItem._id} videoItemId={videoItem._id} />
        ))}
      </div>
    </div>
  );
}
