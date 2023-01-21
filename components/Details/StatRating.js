function StatRating({ rating }) {
  const values = [1, 2, 3, 4, 5];

  return (
    <>
      {rating && (
        <div className="inline-block">
          {values.map((value) => {
            return (
              <div
                key={value}
                className={`${
                  value <= rating ? "bg-[#544439]" : "bg-[#E0E0E0]"
                } inline-block w-8 md:w-[60px] h-1.5 md:h-3 rounded-lg mx-2`}
              ></div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default StatRating;
