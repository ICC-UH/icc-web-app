import { formatDate } from "~/utils/date";

interface AchievementCardProps {
  title: string;
  description: string;
  rank: number;
  date: Date;
  url: string;
  certificateUrl?: string;
}

export default function AchievementCard({
  title,
  description,
  rank,
  date,
  url,
  certificateUrl,
}: AchievementCardProps) {
  return (
    <div className="flex w-[min(400px,100%)] flex-col gap-6 rounded-[16px] border border-border-dark bg-tertiary px-5 py-6">
      <section className="flex items-start gap-2">
        <div className="relative size-[90px]">
          <div
            className={`${rank === 1 ? "fill-[#DAB900]" : rank === 2 ? "fill-[#7B7B7B]" : rank === 3 ? "fill-[#B45500]" : "fill-white"} size-full`}
          >
            <svg
              width="80"
              height="90"
              viewBox="0 0 80 90"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M78.04 11.3287L40.54 0.07875C40.1875 -0.02625 39.8163 -0.02625 39.4638 0.07875L1.96375 11.3287C1.16875 11.5687 0.625 12.2963 0.625 13.125V54.375C0.625 70.9575 25.9075 85.7025 39.445 89.9175C39.625 89.9738 39.8125 90 40 90C40.1875 90 40.375 89.9738 40.555 89.9175C54.0925 85.7063 79.375 70.9575 79.375 54.375V13.125C79.375 12.2963 78.8312 11.5687 78.04 11.3287Z"
                fill="inherit"
              />
            </svg>
          </div>

          <p className="z-1 absolute left-0 top-1/2 w-full -translate-x-1.5 translate-y-[-55%] text-center text-[35px] font-extrabold text-black">
            #{rank}
          </p>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-semibold">{title}</p>
          <p className="text-xs">{description}</p>
        </div>
      </section>

      <section className="flex flex-col items-center gap-1">
        <p className="text-xs">{formatDate(date)}</p>
        <div className="h-px w-full bg-primary" />
        <div className="flex items-center gap-2">
          <a
            href={certificateUrl}
            className="fill-primary hover:fill-border"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="20" height="3.2" fill="inherit" />
              <rect y="17.3" width="20" height="3.2" fill="inherit" />
              <rect
                x="2.96301"
                y="0.5"
                width="20"
                height="2.96296"
                transform="rotate(90 2.96301 0.5)"
                fill="inherit"
              />
              <rect
                x="20"
                y="0.5"
                width="20"
                height="2.96296"
                transform="rotate(90 20 0.5)"
                fill="inherit"
              />
              <path
                d="M3.53003 0.5L13.034 10.3225L10.9854 12.6345L1.48147 2.81194L3.53003 0.5Z"
                fill="inherit"
              />
              <path
                d="M5.92859 13.7462L10.6722 8.50002L12.792 10.7358L8.04844 15.9819L5.92859 13.7462Z"
                fill="inherit"
              />
            </svg>
          </a>

          <a
            href={url}
            className="fill-primary hover:fill-border"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2945 1.955C8.94896 2.13038 7.36196 2.72934 6.19183 3.51325C5.22392 4.14959 3.89471 5.44909 3.97904 5.67046C4.164 6.15059 7.12238 11.0927 7.17029 11.0007C7.20671 10.9365 7.26133 10.7333 7.28817 10.5311C7.52775 9.20384 8.65379 7.9398 10.0645 7.41367C10.6088 7.20188 10.719 7.20188 15.3305 7.15492L20.0426 7.10988L19.6641 6.4908C18.3368 4.32496 16.2888 2.83092 13.7253 2.1668C13.0247 1.98184 11.0324 1.86109 10.2945 1.955Z"
                fill="inherit"
              />
              <path
                d="M3.0667 6.91629C2.63258 7.682 2.12466 9.23067 2.00583 10.1344C1.44233 14.2293 3.5085 18.1844 7.1607 20.0196C8.01745 20.4528 9.24412 20.8677 9.77887 20.9137L10.12 20.9415L11.7243 18.2218C12.6012 16.7277 13.3103 15.4915 13.2921 15.4733C13.273 15.455 13.0707 15.5106 12.8312 15.593C11.3275 16.101 9.58529 15.6755 8.45158 14.5235C8.04525 14.1172 7.49133 13.2231 5.72991 10.1708C4.51379 8.05958 3.49029 6.32596 3.45291 6.32596C3.42608 6.32596 3.2507 6.59333 3.0667 6.91629Z"
                fill="inherit"
              />
              <path
                d="M14.5187 8.43716C15.6898 9.62741 16.1048 11.315 15.5882 12.8359C15.5058 13.0851 14.4267 15.0123 13.1914 17.134C11.9552 19.2452 10.9403 20.9971 10.9403 21.0249C10.9403 21.1351 12.213 21.0795 13.0247 20.9415C17.1647 20.2323 20.2821 17.1062 20.9453 13.0103C21.1945 11.5172 21.1025 10.2072 20.6511 8.69495L20.4115 7.89282H13.984L14.5187 8.43716Z"
                fill="inherit"
              />
              <path
                d="M10.166 8.20619C9.19808 8.61253 8.53395 9.29582 8.17458 10.2637C8.00879 10.6979 7.981 10.947 8.00879 11.6284C8.03754 12.3472 8.07396 12.5513 8.34133 13.0764C8.69208 13.7952 9.26325 14.3501 10.0194 14.7085C10.4621 14.9203 10.6461 14.9481 11.4952 14.9481C12.3529 14.9481 12.5273 14.9203 12.9892 14.6989C13.6716 14.3865 14.3903 13.6668 14.7047 12.9835C14.9251 12.5235 14.9529 12.3481 14.9529 11.4904C14.9529 10.6413 14.9251 10.4573 14.7133 10.0146C14.3539 9.2594 13.801 8.68632 13.0812 8.33749C12.5369 8.06915 12.3702 8.03274 11.5862 8.00399C10.8311 7.98578 10.6375 8.01357 10.1679 8.20715L10.166 8.20619Z"
                fill="inherit"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
