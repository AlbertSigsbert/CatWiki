import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PhotoSkeleton(props) {
  return (
    <div className="grid grid-cols-fluid place-items-center md:place-items-start gap-y-8">
      {[...Array(8).keys()].map((i) => (
        <div className="h-64 w-64" key={i}>
          <Skeleton className="h-56  rounded-3xl" />
        </div>
      ))}
    </div>
  );
}

export default PhotoSkeleton;
