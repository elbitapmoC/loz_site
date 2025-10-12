
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, Instagram, Twitter, Facebook } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";

// Create a custom YouTube icon component
function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.7 5.55C16.5917 5.14583 16.3833 4.80208 16.075 4.51875C15.7583 4.23542 15.3917 4.03542 14.975 3.91875C13.7083 3.58542 9 3.58542 9 3.58542C9 3.58542 4.29167 3.58542 3.025 3.91875C2.60833 4.03542 2.24167 4.23542 1.925 4.51875C1.61667 4.80208 1.40833 5.14583 1.3 5.55C1.08333 6.80208 1.08333 9.58542 1.08333 9.58542C1.08333 9.58542 1.08333 12.3687 1.3 13.6208C1.40833 14.025 1.61667 14.3687 1.925 14.6521C2.24167 14.9354 2.60833 15.1354 3.025 15.2521C4.29167 15.5854 9 15.5854 9 15.5854C9 15.5854 13.7083 15.5854 14.975 15.2521C15.3917 15.1354 15.7583 14.9354 16.075 14.6521C16.3833 14.3687 16.5917 14.025 16.7 13.6208C16.9167 12.3687 16.9167 9.58542 16.9167 9.58542C16.9167 9.58542 16.9167 6.80208 16.7 5.55ZM7.41667 12.1771V7.19375L11.625 9.58542L7.41667 12.1771Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CalendarHeader() {
  const [calendarType, setCalendarType] = useState<'Lunar Sabbath' | 'Dark Moon'>('Lunar Sabbath');
  
  return (
    <header className="backdrop-blur backdrop-filter bg-white/40 sticky top-0 w-full border-b border-neutral-200 z-50">
      <div className="container max-w-7xl mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <LogoMark />
            <span className="font-bold text-neutral-950">Thee Light Of Zion</span>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="bg-neutral-100 h-7 rounded-full flex items-center px-2 cursor-pointer">
                <span className="text-sm font-medium text-neutral-500">{calendarType}</span>
                <div className="ml-1 rounded-full size-5 border border-[rgba(115,115,115,0.04)] flex items-center justify-center">
                  <ChevronDown className="h-4 w-4 text-neutral-500 opacity-50" />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setCalendarType('Lunar Sabbath')}>
                Lunar Sabbath
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCalendarType('Dark Moon')}>
                Dark Moon
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-6">
          <Instagram className="h-4 w-4 text-neutral-900" />
          <Twitter className="h-4 w-4 text-neutral-900" />
          <Facebook className="h-4 w-4 text-neutral-900" />
          <YouTubeIcon className="h-[19.19px] w-[17.6px] text-neutral-900" />
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <div className="relative w-6 h-6">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z" fill="url(#paint0_linear)" />
        <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z" fill="url(#paint1_linear)" />
        <path d="M11.6397 18.157C11.6193 18.1672 11.5989 18.1722 11.5786 18.1722C11.5582 18.1722 11.5174 18.1722 11.4562 18.1722C11.3136 18.1722 11.1454 18.1469 10.9517 18.0961C10.7683 18.0554 10.5848 17.9995 10.4014 17.9284C10.228 17.8674 10.0752 17.7964 9.94266 17.7151C9.82041 17.6338 9.74391 17.5627 9.71334 17.5017C9.70322 17.3594 9.69806 17.2121 9.69806 17.0597C9.69806 16.9073 9.69806 16.76 9.69806 16.6177C9.69806 15.4798 9.77963 14.2911 9.94266 13.0516C10.116 11.812 10.3962 10.4709 10.7836 9.02817C10.8243 8.88593 10.8651 8.70813 10.9058 8.49476C10.9568 8.27124 11.0077 8.03248 11.0587 7.77847C10.8142 7.97152 10.5236 8.28141 10.1873 8.70813C9.85097 9.1247 9.49425 9.6225 9.11711 10.2017C8.75019 10.7707 8.37817 11.4006 8.00106 12.0914C7.63414 12.7721 7.29779 13.4681 6.99202 14.1793C6.68625 14.8804 6.42125 15.5764 6.19702 16.2672C5.98298 16.9582 5.85048 17.5982 5.79952 18.1875C5.31029 18.0453 4.96884 17.9031 4.77519 17.7607C4.59173 17.6185 4.5 17.4458 4.5 17.2426C4.5 17.0597 4.55605 16.8007 4.66817 16.4654C4.78028 16.1301 4.93827 15.7339 5.14211 15.2767C5.34596 14.8194 5.59568 14.3114 5.89125 13.7527C6.18683 13.1837 6.51298 12.574 6.86971 11.9238C7.2774 11.1821 7.6749 10.4861 8.06221 9.83588C8.45971 9.18565 8.84702 8.59637 9.22414 8.06804C9.60122 7.53971 9.96816 7.08251 10.3249 6.69643C10.6918 6.31035 11.0537 6.0157 11.4104 5.8125C11.5531 5.8125 11.7416 5.84806 11.9761 5.91918C12.2207 5.99031 12.4551 6.07666 12.6793 6.17827C12.9138 6.27986 13.1176 6.38655 13.2908 6.49831C13.4743 6.59991 13.5762 6.68627 13.5967 6.75739C13.454 7.04187 13.2858 7.46859 13.0921 8.03756C12.8985 8.60653 12.6998 9.25169 12.4958 9.97303C12.3023 10.6944 12.1136 11.4615 11.9302 12.2743C11.7569 13.077 11.6193 13.8491 11.5174 14.5908C11.7518 14.032 12.0219 13.4529 12.3277 12.8534C12.6437 12.2438 12.9749 11.6444 13.3214 11.0551C13.668 10.4557 14.0197 9.87656 14.3764 9.31774C14.7433 8.75893 15.1 8.25093 15.4465 7.79372C15.793 7.32636 16.1141 6.91995 16.4097 6.57451C16.7154 6.22907 16.9855 5.97506 17.22 5.8125C17.3627 5.8125 17.5512 5.84806 17.7857 5.91918C18.0303 5.99031 18.2647 6.07666 18.4889 6.17827C18.7234 6.27986 18.9272 6.38655 19.1004 6.49831C19.2839 6.59991 19.3859 6.68627 19.4062 6.75739C19.0801 7.33652 18.7947 8.04264 18.5501 8.87577C18.3054 9.70894 18.0966 10.5827 17.9233 11.497C17.7602 12.4115 17.6328 13.3208 17.5411 14.2251C17.4595 15.1192 17.4188 15.9218 17.4188 16.633C17.4188 16.8667 17.4188 17.1105 17.4188 17.3646C17.4188 17.6185 17.429 17.8827 17.4493 18.157C17.3066 18.157 17.1334 18.1367 16.9296 18.0961C16.7359 18.0656 16.5422 18.0199 16.3486 17.9589C16.1651 17.8979 15.9969 17.8268 15.844 17.7456C15.6911 17.6744 15.5842 17.5931 15.5229 17.5017C15.5128 17.3594 15.5077 17.2121 15.5077 17.0597C15.5077 16.9073 15.5077 16.76 15.5077 16.6177C15.5077 15.4798 15.5892 14.2911 15.7523 13.0516C15.9256 11.812 16.2059 10.4709 16.5932 9.02817C16.634 8.88593 16.6798 8.69288 16.7308 8.44905C16.7817 8.20521 16.8327 7.9512 16.8836 7.68704C16.5982 7.82928 16.2721 8.1036 15.9052 8.51001C15.5484 8.90625 15.1815 9.39394 14.8044 9.97303C14.4375 10.542 14.0706 11.1771 13.7036 11.8781C13.3469 12.5791 13.0208 13.2954 12.7252 14.027C12.4398 14.7483 12.1952 15.4697 11.9914 16.191C11.7977 16.9023 11.6805 17.5576 11.6397 18.157Z" fill="white" />
        <defs>
          <linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF786F" />
            <stop offset="1" stopColor="#D8595E" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="7.3125" y1="1.74972e-07" x2="22.125" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9E7AFF" />
            <stop offset="0.333333" stopColor="#FE8BBB" />
            <stop offset="0.666667" stopColor="#FFBD7A" />
            <stop offset="1" stopColor="#F8EAC3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
