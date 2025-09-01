export default function Loading() {
  return (
    <div
      className={
        "fixed inset-0 flex flex-col justify-center items-center w-screen h-screen bg-gray-900"
      }
    >
      <div className={"scale-60 sm:scale-80 lg:scale-85 2xl:scale-100"}>
        <video
          className={
            "w-[3.75rem] rounded-xl drop-shadow-xl drop-shadow-black/50"
          }
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
          poster={"/Poster.jpg"}
        >
          <source src={"/Loading.mp4"} type="video/mp4" />
        </video>
        <h1 className={"text-white pl-0.5 mt-2 text-[18px]"}>Loading</h1>
      </div>
    </div>
  );
}
