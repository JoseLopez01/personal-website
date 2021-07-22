export default function Skill({ name, color, icon: Icon }) {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          className="transform -rotate-90"
        >
          <circle
            stroke={color}
            strokeWidth="4"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"
          ></circle>
        </svg>
        <div className="absolute transform -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2  text-center">
          <Icon fill={color} height={25} width={25} className="m-auto" />
          <span className="font-semibold text-sm text-gray-500">{name}</span>
        </div>
      </div>
    </div>
  );
}
