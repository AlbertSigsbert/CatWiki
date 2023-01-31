
import { LoadingIcon } from "./Icons";

function Loading(props) {
  return (
    <div className="relative min-h-screen grid place-items-center bg-gray-200">
      <div>
        <LoadingIcon/>
      <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
