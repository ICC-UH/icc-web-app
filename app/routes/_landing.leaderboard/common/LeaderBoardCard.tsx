interface LeaderboardCardProps {
  rank: number;
  player: string;
  flags: number;
  additionalClasses?: string;
}

export default function LeaderboardCard({
  rank,
  player,
  flags,
  additionalClasses,
}: LeaderboardCardProps) {
  return (
    <div
      className={`relative flex h-fit w-80 flex-col gap-6 rounded-lg border border-border-dark bg-tertiary p-6 shadow-xl ${additionalClasses}`}
    >
      <div className="absolute -top-2 left-4 h-[63px] w-[56px] bg-transparent">
        <p className="absolute z-10 w-full pt-2 text-center text-xl font-bold text-black">{`#${rank}`}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="63"
          viewBox="0 0 56 63"
          fill="none"
          className="size-full"
        >
          <g filter="url(#filter0_d_2127_1333)">
            <path d="M4.55566 0H51.5557V40.5738L4.55566 55V0Z" fill="#C75E00" />
          </g>
          <defs>
            <filter
              id="filter0_d_2127_1333"
              x="0.555664"
              y="0"
              width="55"
              height="63"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2127_1333"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2127_1333"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div>
        <h2 className="mt-2 text-center text-lg font-semibold text-white">{player}</h2>
        <hr className="border-t border-gray-700" />
      </div>

      <div className="grid grid-cols-2 text-xs text-gray-400">
        <div className="flex flex-col items-center">
          <span className="text-sm text-white">Flags</span>
          <span>{flags}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-white">Rank</span>
          <span>{rank}</span>
        </div>
      </div>
    </div>
  );
}
