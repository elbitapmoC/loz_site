import svgPaths from "./svg-ttpxtjj71q";
import clsx from "clsx";
import { imgNavigationMenuVerticalSideMenu } from "./svg-torhi";
type BackgroundImage202Props = {
  additionalClassNames?: string[];
};

function BackgroundImage202({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage202Props>) {
  return <p className={clsx(additionalClassNames)}>{children}</p>;
}

function BackgroundImage182({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function TileBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] max-w-80 min-w-60 relative rounded shrink-0 w-60">
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-60">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage149Props = {
  additionalClassNames?: string[];
};

function BackgroundImage149({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage149Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage134({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage119Props = {
  additionalClassNames?: string[];
};

function BackgroundImage119({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage119Props>) {
  return (
    <div className={clsx(additionalClassNames)}>
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type ItemBackgroundImageProps = {
  additionalClassNames?: string[];
};

function ItemBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<ItemBackgroundImageProps>) {
  return (
    <BackgroundImage119
      additionalClassNames={[
        "min-h-10 relative rounded-md shrink-0 w-full",
        ...additionalClassNames,
      ]}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-2 relative w-full">
        {children}
      </div>
    </BackgroundImage119>
  );
}
type WrapBackgroundImageProps = {
  additionalClassNames?: string[];
};

function WrapBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapBackgroundImageProps>) {
  return (
    <BackgroundImage119
      additionalClassNames={["relative shrink-0", ...additionalClassNames]}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-2 py-0 relative">
        {children}
      </div>
    </BackgroundImage119>
  );
}

function IconleadingBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage134>
      <g id="Icon Leading">{children}</g>
    </BackgroundImage134>
  );
}

function IconbuttonBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-[6px] relative">
          {children}
        </div>
      </div>
    </div>
  );
}

function ContentBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage149 additionalClassNames={["w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-6 pt-0 px-6 relative w-full">
        {children}
      </div>
    </BackgroundImage149>
  );
}

function HeaderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage119
      additionalClassNames={["relative", "shrink-0", "w-full"]}
    >
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start pb-3 pt-6 px-6 relative w-full">
        {children}
      </div>
    </BackgroundImage119>
  );
}

function ComponentBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage134>
      <g id="Component 1">{children}</g>
    </BackgroundImage134>
  );
}

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row font-['Geist:Regular',_sans-serif] font-normal gap-1 items-center justify-center leading-[0] px-0 py-0.5 relative text-[12px] text-left text-nowrap text-slate-500">
          {children}
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <BackgroundImage119 additionalClassNames={["relative", "shrink-0"]}>
      <div className="box-border content-stretch flex flex-row items-center justify-start px-1 py-0" />
    </BackgroundImage119>
  );
}
type CalendaybaseBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string[];
};

function CalendaybaseBackgroundImageAndText({
  text,
  additionalClassNames = [],
}: CalendaybaseBackgroundImageAndTextProps) {
  return (
    <div
      className={clsx("relative rounded-md shrink-0 w-9", additionalClassNames)}
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[6px] relative w-9">
          <div className="css-tvfdpc font-['Geist:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-nowrap text-slate-950">
            <p className="block leading-[24px] whitespace-pre">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({
  text,
}: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="relative rounded-md shrink-0 w-9">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative w-9">
        <div className="css-xqo2fr font-['Geist:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-left text-nowrap text-slate-500">
          <p className="block leading-[20px] whitespace-pre">{text}</p>
        </div>
      </div>
    </div>
  );
}
type CaptionBackgroundImageProps = {
  text: string;
  text1: string;
};

function CaptionBackgroundImage({ text, text1 }: CaptionBackgroundImageProps) {
  return (
    <BackgroundImage13>
      <div className="css-xqo2fr relative shrink-0">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          {text}
        </p>
      </div>
      <div className="css-xqo2fr relative shrink-0">
        <p className="block leading-[16px] text-[12px] text-nowrap whitespace-pre">
          {text1}
        </p>
      </div>
    </BackgroundImage13>
  );
}
type LabelBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string[];
};

function LabelBackgroundImageAndText({
  text,
  additionalClassNames = [],
}: LabelBackgroundImageAndTextProps) {
  return (
    <div
      className={clsx(
        "min-w-14 relative rounded-md shrink-0",
        additionalClassNames,
      )}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-3 py-1.5 relative">
          <div className="basis-0 css-tvfdpc font-['Geist:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-slate-950">
            <p className="block leading-[20px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[588.995px] top-[349px]">
      <div
        className="absolute left-1/2 size-[334px] top-[349px] translate-x-[-50%] rounded-lg"
        data-name="image 1"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(0,0,0,0.1))" }}
      />
      <div
        className="absolute bg-[#000000] bg-clip-text css-tarb7e font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] left-[863.995px] text-[#000000] text-[72px] text-center top-[506.8px] tracking-[-3.6px] translate-x-[-50%] w-[550px]"
        style={{
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(165.328deg, rgb(1, 2, 2) 30%, rgba(255, 255, 255, 0.4) 100%), none",
        }}
      >
        <p className="adjustLetterSpacing block leading-[72px]">
          High Holy Days for Israelites
        </p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <BackgroundImage134>
      <g id="Component 1" opacity="0.5">
        <path
          clipRule="evenodd"
          d={svgPaths.p2335f880}
          fill="var(--fill-0, #737373)"
          fillRule="evenodd"
          id="Vector"
        />
      </g>
    </BackgroundImage134>
  );
}

function Border() {
  return (
    <div
      className="relative rounded-[3.35544e+07px] shrink-0 size-5"
      data-name="Border"
    >
      <div className="absolute border border-[rgba(115,115,115,0.04)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-px relative size-5">
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div
      className="bg-neutral-100 h-7 relative rounded-[3.35544e+07px] shrink-0"
      data-name="Button menu"
    >
      <div className="absolute border border-[rgba(115,115,115,0.04)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[7.05px] h-7 items-center justify-start pl-[9px] pr-[3px] py-[5px] relative">
          <div className="css-4cuj7e flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Lunar Sabbath</p>
          </div>
          <Border />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div
      className="absolute bottom-[18px] left-[228.06px] top-[18px]"
      data-name="Nav"
    >
      <div className="box-border content-stretch flex flex-row gap-6 h-full items-center justify-start p-0 relative">
        <ButtonMenu />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Component 1">
          <path
            d={svgPaths.p15ed0480}
            fill="url(#paint0_linear_16_3779)"
            id="Vector"
          />
          <path
            d={svgPaths.p15ed0480}
            fill="url(#paint1_linear_16_3779)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p355c7780}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_16_3779"
            x1="12"
            x2="12"
            y1="0"
            y2="24"
          >
            <stop stopColor="#EF786F" />
            <stop offset="1" stopColor="#D8595E" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_16_3779"
            x1="7.3125"
            x2="22.125"
            y1="1.74972e-07"
            y2="24"
          >
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

function Link() {
  return (
    <div className="absolute bottom-[18px] left-8 top-[18px]" data-name="Link">
      <div className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative">
        <Component2 />
        <div className="css-w182cl font-['Geist:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-left text-neutral-950 text-nowrap">
          <p className="block leading-[24px] text-[16px] whitespace-pre">
            Thee Light Of Zion
          </p>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <ComponentBackgroundImage>
      <path
        clipRule="evenodd"
        d={svgPaths.pcdabc00}
        fill="var(--fill-0, #0A0A0A)"
        fillRule="evenodd"
        id="Vector"
      />
    </ComponentBackgroundImage>
  );
}

function Component4() {
  return (
    <ComponentBackgroundImage>
      <path d={svgPaths.p1116d00} fill="var(--fill-0, #0A0A0A)" id="Vector" />
    </ComponentBackgroundImage>
  );
}

function Component5() {
  return (
    <ComponentBackgroundImage>
      <path d={svgPaths.p3a198500} fill="var(--fill-0, #0A0A0A)" id="Vector" />
    </ComponentBackgroundImage>
  );
}

function Component6() {
  return (
    <div
      className="h-[19.19px] relative shrink-0 w-[17.6px]"
      data-name="Component 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 20"
      >
        <g id="Component 1">
          <path
            clipRule="evenodd"
            d={svgPaths.p1de07780}
            fill="var(--fill-0, #262626)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Nav1() {
  return (
    <div
      className="absolute right-8 top-1/2 translate-y-[-50%]"
      data-name="Nav"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-center pb-[8.4px] pl-2.5 pr-[8.4px] pt-[8.41px] relative">
          <Component3 />
          <Component4 />
          <Component5 />
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="h-16 max-w-[1536px] relative shrink-0 w-[1536px]"
      data-name="Container"
    >
      <Nav />
      <Link />
      <Nav1 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.4)] pointer-events-auto sticky top-0 w-[1920px]"
      data-name="Header"
    >
      <div className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-px pt-0 px-0 relative w-[1920px]">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="h-4 relative shrink-0 w-3" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 16"
      >
        <g id="Component 1">
          <path
            d="M4.5 12L7.5 8L4.5 4"
            id="Vector"
            stroke="var(--stroke-0, #737373)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div
      className="absolute bg-[#ffffff] h-8 rounded-[3.35544e+07px] top-[815px] translate-x-[-50%]"
      data-name="Link"
      style={{ left: "calc(50% - 4.5px)" }}
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center px-[13px] py-px relative">
          <div className="css-w182cl flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap">
            <p className="block leading-[16px] whitespace-pre">🗓️</p>
          </div>
          <div
            className="bg-neutral-200 h-[30px] shrink-0 w-px"
            data-name="Vertical Divider"
          />
          <div className="css-w182cl flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap">
            <p className="block leading-[16px] whitespace-pre">
              Download Your 2025 Calendar
            </p>
          </div>
          <Component7 />
        </div>
      </div>
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Wrap() {
  return (
    <BackgroundImage149>
      <div className="box-border content-stretch flex flex-row items-start justify-start px-1 py-0 relative">
        <div className="css-7mf1pg font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-nowrap text-slate-50">
          <p className="block leading-[24px] whitespace-pre">Download</p>
        </div>
      </div>
    </BackgroundImage149>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-slate-900 left-[1338px] min-w-20 rounded-md top-[1203px]"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-2 relative">
          <Wrap />
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div
      className="absolute bg-slate-100 left-[428px] rounded top-[1259px]"
      data-name="Tabs"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-[4px] relative">
          <LabelBackgroundImageAndText
            text="This Weeks Events"
            additionalClassNames={[
              "bg-[#ffffff]",
              "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
            ]}
          />
          <LabelBackgroundImageAndText
            text="This Months Events"
            additionalClassNames={["bg-slate-100"]}
          />
          <LabelBackgroundImageAndText
            text="This Years Events"
            additionalClassNames={["bg-slate-100"]}
          />
        </div>
      </div>
    </div>
  );
}

function LucideIconsDollarSign() {
  return (
    <BackgroundImage134>
      <g id="Lucide Icons / dollar-sign" opacity="0.5">
        <path
          d={svgPaths.p2eeab570}
          id="Vector"
          stroke="var(--stroke-0, #020617)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage134>
  );
}

function Header1() {
  return (
    <HeaderBackgroundImage>
      <div className="basis-0 css-tvfdpc font-['Geist:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-left text-slate-950">
        <p className="block leading-[20px]">Month of</p>
      </div>
      <LucideIconsDollarSign />
    </HeaderBackgroundImage>
  );
}

function Content() {
  return (
    <ContentBackgroundImage>
      <div className="css-1wb1eg font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[24px] text-left text-nowrap text-slate-950 tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-none whitespace-pre">
          Ziv
        </p>
      </div>
      <CaptionBackgroundImage text="Preexile" text1="&nbsp;" />
    </ContentBackgroundImage>
  );
}

function Tile() {
  return (
    <TileBackgroundImage>
      <Header1 />
      <Content />
    </TileBackgroundImage>
  );
}

function LucideIconsUsers() {
  return (
    <BackgroundImage134>
      <g id="Lucide Icons / users" opacity="0.5">
        <path
          d={svgPaths.p3a26000}
          id="Vector"
          stroke="var(--stroke-0, #020617)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage134>
  );
}

function Header2() {
  return (
    <HeaderBackgroundImage>
      <div className="basis-0 css-tvfdpc font-['Geist:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-left text-slate-950">
        <p className="block leading-[20px]">Hebrew Name</p>
      </div>
      <LucideIconsUsers />
    </HeaderBackgroundImage>
  );
}

function Caption1() {
  return (
    <BackgroundImage13>
      <div className="css-xqo2fr relative shrink-0">
        <p className="block leading-[16px] text-nowrap whitespace-pre">2nd</p>
      </div>
      <div className="css-xqo2fr relative shrink-0">
        <p className="block leading-[16px] text-nowrap whitespace-pre">month</p>
      </div>
    </BackgroundImage13>
  );
}

function Content1() {
  return (
    <ContentBackgroundImage>
      <div className="css-1wb1eg font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[24px] text-left text-nowrap text-slate-950 tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-none whitespace-pre">
          (אִיָּיר)
        </p>
      </div>
      <Caption1 />
    </ContentBackgroundImage>
  );
}

function Tile1() {
  return (
    <TileBackgroundImage>
      <Header2 />
      <Content1 />
    </TileBackgroundImage>
  );
}

function LucideIconsCreditCard() {
  return (
    <BackgroundImage134>
      <g id="Lucide Icons / credit-card" opacity="0.5">
        <path
          d={svgPaths.p1da25d80}
          id="Vector"
          stroke="var(--stroke-0, #020617)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage134>
  );
}

function Header3() {
  return (
    <HeaderBackgroundImage>
      <div className="basis-0 css-tvfdpc font-['Geist:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-left text-slate-950">
        <p className="block leading-[20px]">Meaning</p>
      </div>
      <LucideIconsCreditCard />
    </HeaderBackgroundImage>
  );
}

function Caption2() {
  return (
    <BackgroundImage13>
      <div className="css-xqo2fr relative shrink-0">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Strongs
        </p>
      </div>
      <div className="css-xqo2fr relative shrink-0">
        <a
          className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[16px] text-nowrap whitespace-pre"
          href="https://www.blueletterbible.org/lexicon/h2099/esv/wlc/0-1/"
        >
          h2099
        </a>
      </div>
    </BackgroundImage13>
  );
}

function Content2() {
  return (
    <ContentBackgroundImage>
      <div className="css-1wb1eg font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[24px] text-left text-nowrap text-slate-950 tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-none whitespace-pre">
          “Brightness”
        </p>
      </div>
      <Caption2 />
    </ContentBackgroundImage>
  );
}

function Tile2() {
  return (
    <TileBackgroundImage>
      <Header3 />
      <Content2 />
    </TileBackgroundImage>
  );
}

function LucideIconsDollarSign1() {
  return (
    <BackgroundImage134>
      <g
        clipPath="url(#clip0_16_3817)"
        id="Lucide Icons / dollar-sign"
        opacity="0.5"
      >
        <path
          d={svgPaths.p268cdf38}
          id="Vector"
          stroke="var(--stroke-0, #020617)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_16_3817">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage134>
  );
}

function Header4() {
  return (
    <HeaderBackgroundImage>
      <div className="basis-0 css-tvfdpc font-['Geist:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-left text-slate-950">
        <p className="block leading-[20px]">Month of</p>
      </div>
      <LucideIconsDollarSign1 />
    </HeaderBackgroundImage>
  );
}

function Content3() {
  return (
    <ContentBackgroundImage>
      <div className="css-1wb1eg font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[24px] text-left text-nowrap text-slate-950 tracking-[-0.6px]">
        <p className="adjustLetterSpacing block leading-none whitespace-pre">
          Iyyar
        </p>
      </div>
      <CaptionBackgroundImage text="Postexile" text1="&nbsp;" />
    </ContentBackgroundImage>
  );
}

function Tile3() {
  return (
    <TileBackgroundImage>
      <Header4 />
      <Content3 />
    </TileBackgroundImage>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[428px] top-[1315px]">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        <Tile />
        <Tile1 />
        <Tile2 />
        <Tile3 />
      </div>
    </div>
  );
}

function LucideIconsCalendar() {
  return (
    <BackgroundImage134>
      <g id="Lucide Icons / calendar">
        <path
          d={svgPaths.p3998da00}
          id="Vector"
          stroke="var(--stroke-0, #64748B)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage134>
  );
}

function Wrap1() {
  return (
    <div className="relative shrink-0" data-name="Wrap">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end pl-4 pr-0 py-0 relative">
          <LucideIconsCalendar />
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div
      className="absolute bg-[#ffffff] h-10 left-[1058px] rounded-md top-[1203px] w-[268px]"
      data-name="Field"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-start px-3 py-2 relative w-[268px]">
          <div className="basis-0 css-aa7k0f font-['Geist:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-left text-nowrap text-slate-500">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
              Pick a date
            </p>
          </div>
          <Wrap1 />
        </div>
      </div>
      <div className="absolute border border-slate-200 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[16px] text-left text-nowrap text-slate-950">
      <div className="[grid-area:1_/_1] css-tvfdpc font-['Geist:SemiBold',_sans-serif] font-semibold ml-0 mt-0 relative">
        <p className="block leading-none text-nowrap whitespace-pre">
          New Moon #12
        </p>
      </div>
      <div className="[grid-area:1_/_1] css-tvfdpc font-['Geist:Regular',_sans-serif] font-normal ml-[434px] mt-0 relative">
        <p className="block leading-none text-nowrap whitespace-pre">
          May 26 2025
        </p>
      </div>
    </div>
  );
}

function CardBaseHeader() {
  return (
    <BackgroundImage149 additionalClassNames={["w-full"]}>
      <div className="box-border content-stretch flex flex-row gap-[323px] items-start justify-start p-[24px] relative w-full">
        <Group12 />
      </div>
    </BackgroundImage149>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] h-[277px] ml-0 mt-0 relative rounded-lg w-[480px]"
        data-name="vinyl record video"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(212,175,55,0.15))" }}
      >
        <div className="absolute border-[#000000] border-[3px] border-solid inset-[-1.5px] pointer-events-none rounded-[9.5px] shadow-[8px_8px_0px_0px_#000000]" />
      </div>
      <div
        className="[grid-area:1_/_1] h-5 ml-[459px] mt-[301px] relative w-3"
        data-name="Union"
      >
        <div className="absolute bottom-[2.495%] left-0 right-0 top-[2.495%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 20"
          >
            <path
              d={svgPaths.p3066fa40}
              fill="var(--fill-0, black)"
              id="Union"
            />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] ml-[467px] mt-[305px] relative size-3">
        <div className="absolute bottom-[5.581%] left-[62.499%] right-0 top-[5.581%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 5 12"
          >
            <path
              d={svgPaths.p36ed7f40}
              id="Ellipse 706"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] ml-[463px] mt-[301px] relative size-5">
        <div className="absolute bottom-[6.028%] left-[67.499%] right-0 top-[6.028%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 18"
          >
            <path
              d={svgPaths.p32e6600}
              id="Ellipse 707"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] bg-[#efefef] h-[62px] ml-[190px] mt-[108px] rounded-lg w-[100px]" />
      <div
        className="[grid-area:1_/_1] h-[29px] ml-[228px] mt-[124px] relative w-[25px]"
        data-name="play icon"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 25 29"
        >
          <path
            d={svgPaths.p3604be00}
            fill="var(--fill-0, black)"
            id="play icon"
          />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] css-nyf87e font-['0xProto_Nerd_Font:Regular',_sans-serif] font-normal ml-[222.5px] mt-[295px] not-italic relative text-[#000000] text-[16px] text-center translate-x-[-50%] w-[445px]">
        <p className="block leading-[24px]">
          Tune in to the lesson break down.
        </p>
      </div>
    </div>
  );
}

function ChartBase() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[441px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Chart Base"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="box-border content-stretch flex flex-col gap-4 h-[441px] items-center justify-start p-0 relative w-full">
        <CardBaseHeader />
        <Group11 />
      </div>
    </div>
  );
}

function CardBaseHeader1() {
  return (
    <BackgroundImage149 additionalClassNames={["w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-[24px] relative text-left w-full">
        <div
          className="css-tvfdpc font-['Geist:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[16px] text-slate-950"
          style={{ width: "min-content" }}
        >
          <p className="block leading-none">Upcoming Events</p>
        </div>
        <div
          className="css-xqo2fr font-['Geist:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px] text-slate-500"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[20px]">For this week</p>
        </div>
      </div>
    </BackgroundImage149>
  );
}

function Avatar() {
  return (
    <div className="absolute left-6 top-[12.5px]" data-name="Avatar">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <div
          className="rounded-[9999px] shrink-0 size-10 bg-muted"
          data-name="image"
        />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute left-20 top-[13.5px] w-[203px]" data-name="Body">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative text-[14px] text-left text-nowrap w-[203px]">
        <div
          className="css-et5jp6 font-['Geist:Medium',_sans-serif] font-medium min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-slate-950"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-none overflow-inherit">
            New Moon #2 | Ziv
          </p>
        </div>
        <div
          className="css-aa7k0f font-['Geist:Regular',_sans-serif] font-normal min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-slate-500"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit text-[14px]">
            May 26, 2025
          </p>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-1/2 top-[12.5px] translate-x-[-50%]">
      <Avatar />
      <Body />
      <div className="absolute css-nsk6qz font-['Geist:Medium',_sans-serif] font-medium leading-[0] right-[66px] text-[16px] text-left text-nowrap text-slate-950 top-[20.5px] translate-x-[100%]">
        <p className="block leading-[24px] whitespace-pre">@ HQ</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div
      className="bg-[#a0ff42] h-[65px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <Group10 />
    </div>
  );
}

function SalesCard() {
  return (
    <div
      className="bg-[#ffffff] h-[441px] relative rounded-lg shrink-0"
      data-name="sales card"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="box-border content-stretch flex flex-col h-[441px] items-start justify-start p-0 relative">
        <CardBaseHeader1 />
        <ListItem />
      </div>
    </div>
  );
}

function ChartTile() {
  return (
    <div
      className="absolute left-[428px] top-[1459px] w-[1008px]"
      data-name="Chart + Tile"
    >
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-[1008px]">
        <ChartBase />
        <SalesCard />
      </div>
    </div>
  );
}

function LucideIconsChevronLeft() {
  return (
    <BackgroundImage134>
      <g id="Lucide Icons / chevron-left">
        <path
          d="M10 12L6 8L10 4"
          id="Vector"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage134>
  );
}

function IconButton() {
  return (
    <IconbuttonBackgroundImage>
      <LucideIconsChevronLeft />
    </IconbuttonBackgroundImage>
  );
}

function Month() {
  return (
    <div className="relative shrink-0" data-name="Month">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <div className="css-tvfdpc font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-nowrap text-slate-950">
          <p className="block leading-[24px] whitespace-pre">October 2024</p>
        </div>
      </div>
    </div>
  );
}

function LucideIconsChevronRight() {
  return (
    <BackgroundImage134>
      <g id="Lucide Icons / chevron-right">
        <path
          d="M6 12L10 8L6 4"
          id="Vector"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage134>
  );
}

function IconButton1() {
  return (
    <IconbuttonBackgroundImage>
      <LucideIconsChevronRight />
    </IconbuttonBackgroundImage>
  );
}

function Header5() {
  return (
    <BackgroundImage119
      additionalClassNames={["relative", "shrink-0", "w-full"]}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-between px-2.5 py-1 relative w-full">
        <IconButton />
        <Month />
        <IconButton1 />
      </div>
    </BackgroundImage119>
  );
}

function Header6() {
  return (
    <BackgroundImage182>
      <ContainerBackgroundImageAndText text="Su" />
      <ContainerBackgroundImageAndText text="Mo" />
      <ContainerBackgroundImageAndText text="Tu" />
      <ContainerBackgroundImageAndText text="We" />
      <ContainerBackgroundImageAndText text="Th" />
      <ContainerBackgroundImageAndText text="Fr" />
      <ContainerBackgroundImageAndText text="Sa" />
    </BackgroundImage182>
  );
}

function Row() {
  return (
    <BackgroundImage182>
      <CalendaybaseBackgroundImageAndText
        text="29"
        additionalClassNames={["opacity-50"]}
      />
      <CalendaybaseBackgroundImageAndText
        text="30"
        additionalClassNames={["opacity-50"]}
      />
      <CalendaybaseBackgroundImageAndText text="1" />
      <CalendaybaseBackgroundImageAndText text="2" />
      <CalendaybaseBackgroundImageAndText text="3" />
      <CalendaybaseBackgroundImageAndText
        text="4"
        additionalClassNames={["bg-slate-100"]}
      />
      <CalendaybaseBackgroundImageAndText text="5" />
    </BackgroundImage182>
  );
}

function Row1() {
  return (
    <BackgroundImage182>
      <CalendaybaseBackgroundImageAndText text="6" />
      <CalendaybaseBackgroundImageAndText text="7" />
      <CalendaybaseBackgroundImageAndText text="8" />
      <CalendaybaseBackgroundImageAndText text="9" />
      <CalendaybaseBackgroundImageAndText text="10" />
      <CalendaybaseBackgroundImageAndText text="11" />
      <CalendaybaseBackgroundImageAndText text="12" />
    </BackgroundImage182>
  );
}

function Row2() {
  return (
    <BackgroundImage182>
      <CalendaybaseBackgroundImageAndText text="13" />
      <CalendaybaseBackgroundImageAndText text="14" />
      <CalendaybaseBackgroundImageAndText text="15" />
      <CalendaybaseBackgroundImageAndText text="16" />
      <CalendaybaseBackgroundImageAndText text="17" />
      <CalendaybaseBackgroundImageAndText text="18" />
      <CalendaybaseBackgroundImageAndText text="19" />
    </BackgroundImage182>
  );
}

function Row3() {
  return (
    <BackgroundImage182>
      <CalendaybaseBackgroundImageAndText text="20" />
      <CalendaybaseBackgroundImageAndText text="21" />
      <CalendaybaseBackgroundImageAndText text="22" />
      <CalendaybaseBackgroundImageAndText text="23" />
      <CalendaybaseBackgroundImageAndText text="24" />
      <CalendaybaseBackgroundImageAndText text="25" />
      <CalendaybaseBackgroundImageAndText text="26" />
    </BackgroundImage182>
  );
}

function Row4() {
  return (
    <BackgroundImage182>
      <CalendaybaseBackgroundImageAndText text="27" />
      <CalendaybaseBackgroundImageAndText text="28" />
      <CalendaybaseBackgroundImageAndText text="29" />
      <CalendaybaseBackgroundImageAndText text="30" />
      <CalendaybaseBackgroundImageAndText text="31" />
      <CalendaybaseBackgroundImageAndText
        text="1"
        additionalClassNames={["opacity-50"]}
      />
      <CalendaybaseBackgroundImageAndText
        text="2"
        additionalClassNames={["opacity-50"]}
      />
    </BackgroundImage182>
  );
}

function Rowgroup() {
  return (
    <BackgroundImage149>
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-2 px-0 relative">
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
      </div>
    </BackgroundImage149>
  );
}

function Grid() {
  return (
    <BackgroundImage149>
      <div className="box-border content-stretch flex flex-col items-start justify-start pb-1.5 pt-0 px-1 relative">
        <Header6 />
        <Rowgroup />
      </div>
    </BackgroundImage149>
  );
}

function DateStart() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="DateStart"
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start p-0 relative w-full">
        <Header5 />
        <Grid />
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[1058px] rounded-md top-[1250px] w-[268px]"
      data-name="Calendar"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-[12px] relative w-[268px]">
          <DateStart />
        </div>
      </div>
    </div>
  );
}

function IconLeading() {
  return (
    <IconleadingBackgroundImage>
      <path
        d={svgPaths.p4b3d630}
        id="Vector"
        stroke="var(--stroke-0, #020617)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconleadingBackgroundImage>
  );
}

function Wrap2() {
  return (
    <WrapBackgroundImage>
      <IconLeading />
    </WrapBackgroundImage>
  );
}

function Item01() {
  return (
    <ItemBackgroundImage additionalClassNames={["bg-slate-100"]}>
      <Wrap2 />
      <ContainerBackgroundImage />
    </ItemBackgroundImage>
  );
}

function IconLeading1() {
  return (
    <IconleadingBackgroundImage>
      <path
        d={svgPaths.p7bfaa00}
        id="Vector"
        stroke="var(--stroke-0, #020617)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
      />
    </IconleadingBackgroundImage>
  );
}

function Wrap3() {
  return (
    <WrapBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <IconLeading1 />
    </WrapBackgroundImage>
  );
}

function Item03() {
  return (
    <ItemBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <Wrap3 />
      <ContainerBackgroundImage />
    </ItemBackgroundImage>
  );
}

function NavigationMenu() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navigation Menu">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Item01 />
        <Item03 />
      </div>
    </div>
  );
}

function NavigationMenuVerticalSideMenu() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[451px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-29px] mask-size-[1008px_647px] top-[1945px] w-16"
      data-name="Navigation Menu / Vertical. Side Menu"
      style={{ maskImage: `url('${imgNavigationMenuVerticalSideMenu}')` }}
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[63px] items-center justify-start p-[8px] relative w-16">
          <NavigationMenu />
        </div>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[509.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-81.5px_-40.5px] mask-size-[1008px_647px] rounded-md top-[1956.5px]"
      data-name="Tooltip"
      style={{ maskImage: `url('${imgNavigationMenuVerticalSideMenu}')` }}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-1.5 relative">
          <div className="css-tvfdpc font-['Geist:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-nowrap text-slate-950">
            <p className="block leading-[20px] whitespace-pre">Overview</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[428px] top-[1916px]">
      <div className="absolute flex h-[647px] items-center justify-center left-[428px] top-[1916px] w-[1008px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="h-[647px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1008px_647px] relative w-[1008px]"
            style={{ maskImage: `url('${imgNavigationMenuVerticalSideMenu}')` }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1008 647"
            >
              <path
                d={svgPaths.p12e9d4f0}
                id="Rectangle 2"
                stroke="var(--stroke-0, #E2E8F0)"
              />
            </svg>
          </div>
        </div>
      </div>
      <NavigationMenuVerticalSideMenu />
      <Tooltip />
      <div
        className="absolute css-qve2y7 font-['0xProto_Nerd_Font:Regular',_sans-serif] font-normal leading-[24px] left-[594px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-166px_-197px] mask-size-[1008px_647px] not-italic text-[#000000] text-[14px] text-left top-[2113px] w-[706px]"
        style={{ maskImage: `url('${imgNavigationMenuVerticalSideMenu}')` }}
      >
        <BackgroundImage202 additionalClassNames={["block", "mb-0"]}>
          The new moon, marking the first day of each lunar month, is understood
          to be the full moon. It’s described as governing the night and serving
          as a divine sign for seasons, days, and years.
        </BackgroundImage202>
        <p className="block mb-0">&nbsp;</p>
        <BackgroundImage202
          additionalClassNames={["block", "mb-0"]}
        >{`For many reasons, we celebrate the new moon (as the full moon) with important customs, including gathering together, feasting (sharing communal meals) and the sounding of trumpets on this solemn feast day, as mentioned in Psalms. `}</BackgroundImage202>
        <p className="block mb-0">&nbsp;</p>
        <BackgroundImage202
          additionalClassNames={["block"]}
        >{`The deep meaning of this timing is further emphasized by the events surrounding Christ's crucifixion: the darkness that occurred on Passover (the 15th of the month) is seen as evidence, suggesting a solar eclipse at that time would mean the month must have begun with a full moon. This observance, described in Colossians as a "shadow of things to come," is considered a biblically mandated practice.`}</BackgroundImage202>
      </div>
      <div
        className="absolute css-b4s74t font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] left-[1355.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-887px_-29px] mask-size-[1008px_647px] text-[#000000] text-[16px] text-center text-nowrap top-[1945px] translate-x-[-50%]"
        style={{ maskImage: `url('${imgNavigationMenuVerticalSideMenu}')` }}
      >
        <p className="block leading-none whitespace-pre">New Moon</p>
      </div>
    </div>
  );
}

export default function Keyboard() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Keyboard">
      <div
        className="absolute left-[1473px] size-[510px] top-[651px] rounded-lg"
        data-name="image 8"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.2), rgba(212,175,55,0.15))" }}
      />
      <div className="absolute h-[257px] left-[732px] top-[382px] w-[264px]">
        <div className="absolute bottom-[-70.039%] left-[-68.182%] right-[-68.182%] top-[-70.039%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 624 617"
          >
            <g filter="url(#filter0_f_16_3799)" id="Ellipse 1">
              <ellipse
                cx="312"
                cy="308.5"
                fill="url(#paint0_linear_16_3799)"
                rx="132"
                ry="128.5"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="617"
                id="filter0_f_16_3799"
                width="624"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_16_3799"
                  stdDeviation="90"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_16_3799"
                x1="180"
                x2="444"
                y1="308.5"
                y2="308.5"
              >
                <stop stopColor="#FF4242" />
                <stop offset="0.25" stopColor="#A0FF42" />
                <stop offset="0.5" stopColor="#43D0FF" />
                <stop offset="0.75" stopColor="#43D0FF" />
                <stop offset="1" stopColor="#A142FE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Group8 />
      <div
        className="absolute bottom-0 left-[-96px] pointer-events-none top-[20.61px]"
        style={{ height: "calc(100% - 20.6099px)" }}
      >
        <Header />
      </div>
      <div
        className="absolute css-m3f2cm font-['Geist:Regular',_sans-serif] font-normal leading-[0] text-[#000000] text-[0px] text-center top-[683px] tracking-[-0.45px] translate-x-[-50%] w-[445px]"
        style={{ left: "calc(50% - 3.64014px)" }}
      >
        <BackgroundImage202
          additionalClassNames={["leading-[28px]", "text-[18px]"]}
        >
          All Your Holy Day Questions Answered—
          <span className="font-['Geist:Bold',_sans-serif] font-bold tracking-[-0.45px]">
            APTYTH
          </span>
          <span>
            !<br />
            {`Discover the `}
          </span>
          <span className="font-['Geist:Bold',_sans-serif] font-bold tracking-[-0.45px]">
            who, when
          </span>
          <span>{`, `}</span>
          <span className="font-['Geist:Bold',_sans-serif] font-bold tracking-[-0.45px]">
            why
          </span>
          <span>{`, `}</span>
          <span className="font-['Geist:Bold',_sans-serif] font-bold tracking-[-0.45px]">
            how
          </span>
          <span>{`, and `}</span>
          <span className="font-['Geist:Bold',_sans-serif] font-bold tracking-[-0.45px]">{`what `}</span>
          <span className="adjustLetterSpacing">
            is the meaning behind every holy day, all in one place.
          </span>
        </BackgroundImage202>
      </div>
      <Link1 />
      <div
        className="absolute bg-gradient-to-l from-[#ffbd7a] h-px left-[795px] to-[#00000000] top-[815px] via-50% via-[#22d3ee] w-[100px]"
        data-name="Gradient"
      />
      <Button />
      <div className="absolute css-ips2pl font-['Geist:Bold',_sans-serif] font-bold leading-[0] left-[428px] text-[30px] text-left text-nowrap text-slate-950 top-[1205px] tracking-[-0.75px]">
        <p className="adjustLetterSpacing block leading-[36px] whitespace-pre">
          Calendar | 2025 - 2026
        </p>
      </div>
      <Tabs />
      <Frame2 />
      <Field />
      <ChartTile />
      <Calendar />
      <Group13 />
    </div>
  );
}
