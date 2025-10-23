export default function Countdown({ time }) {
  return (
    <div className=" font-primary text-[#16px] md:text-2xl flex justify-center items-center rounded-full md:w-15 md:h-15 w-10 h-10 font-bold border md:border-2  border-[#E6A817]">
      {time}
    </div>
  );
}
