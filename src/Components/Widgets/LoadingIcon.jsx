import { AiOutlineLoading } from "react-icons/ai";
import { LiaCircle } from "react-icons/lia";

export default function LoadingIcon({ className, color }) {
  return (
    <div className={className}>
      <div className={"relative flex items-center justify-center"}>
        <LiaCircle
          size={135}
          strokeWidth={2}
          color={color || "white"}
          className={"absolute overflow-visible opacity-25"}
        />
        <AiOutlineLoading
          size={100}
          strokeWidth={100}
          color={color || "white"}
          style={{
            animationDuration: "750ms",
          }}
          className={"absolute m-4.5 opacity-75 animate-spin overflow-visible"}
        />
      </div>
    </div>
  );
}
