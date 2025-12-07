import svgPaths from "./svg-pwg40f7k7u";
import clsx from "clsx";
import { imgNote } from "./svg-8ruvv";
type OverviewHelper1Props = {
  additionalClassNames?: string[];
};

function OverviewHelper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<OverviewHelper1Props>) {
  return <p className={clsx("block", additionalClassNames)}>{children}</p>;
}
type Wrapper1Props = {
  additionalClassNames?: string[];
};

function Wrapper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div
      className={clsx(
        "flex items-center relative size-full",
        additionalClassNames,
      )}
    >
      {children}
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx(additionalClassNames)}>
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type ItemProps = {
  additionalClassNames?: string[];
};

function Item({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<ItemProps>) {
  return (
    <Wrapper
      additionalClassNames={[
        "min-h-10 relative rounded-md shrink-0 w-full",
        ...additionalClassNames,
      ]}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-2 relative w-full">
        {children}
      </div>
    </Wrapper>
  );
}
type Wrap2Props = {
  additionalClassNames?: string[];
};

function Wrap2({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrap2Props>) {
  return (
    <Wrapper
      additionalClassNames={["relative shrink-0", ...additionalClassNames]}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-2 py-0 relative">
        {children}
      </div>
    </Wrapper>
  );
}

function Iconleading({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon Leading">{children}</g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <Wrapper additionalClassNames={["relative", "shrink-0"]}>
      <div className="box-border content-stretch flex flex-row items-center justify-start px-1 py-0" />
    </Wrapper>
  );
}

function IconLeading() {
  return (
    <Iconleading>
      <path
        d={svgPaths.p2c37dd00}
        id="Vector"
        stroke="var(--stroke-0, #020617)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Iconleading>
  );
}

function Wrap() {
  return (
    <Wrap2>
      <IconLeading />
    </Wrap2>
  );
}

function Item01() {
  return (
    <Item additionalClassNames={["bg-slate-100"]}>
      <Wrap />
      <Container />
    </Item>
  );
}

function IconLeading1() {
  return (
    <Iconleading>
      <path
        d={svgPaths.p3fd03f80}
        id="Vector"
        stroke="var(--stroke-0, #020617)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
      />
    </Iconleading>
  );
}

function Wrap1() {
  return (
    <Wrap2 additionalClassNames={["bg-[#ffffff]"]}>
      <IconLeading1 />
    </Wrap2>
  );
}

function Item03() {
  return (
    <Item additionalClassNames={["bg-[#ffffff]"]}>
      <Wrap1 />
      <Container />
    </Item>
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
      className="absolute bg-[#ffffff] left-6 top-6 w-16"
      data-name="Navigation Menu / Vertical. Side Menu"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none" />
      <Wrapper1 additionalClassNames={["flex-col"]}>
        <div className="box-border content-stretch flex flex-col gap-[63px] items-center justify-start p-[8px] relative w-16">
          <NavigationMenu />
        </div>
      </Wrapper1>
    </div>
  );
}

function Tooltip() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[82.5px] rounded-md top-[35.5px]"
      data-name="Tooltip"
    >
      <Wrapper1 additionalClassNames={["flex-row", "overflow-clip"]}>
        <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-1.5 relative">
          <div className="css-tvfdpc font-['Geist:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-left text-nowrap text-slate-950">
            <p className="block leading-[20px] whitespace-pre">Overview</p>
          </div>
        </div>
      </Wrapper1>
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Overview() {
  return (
    <div className="relative size-full" data-name="Overview">
      <div className="absolute flex h-[647px] items-center justify-center left-0 top-0 w-[1008px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[647px] relative w-[1008px]">
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
        className="absolute css-4pqnfx font-['0xProto_Nerd_Font:Regular',_sans-serif] font-normal leading-[24px] left-[166px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-166px_-197px] mask-size-[1008px_647px] not-italic text-[#000000] text-[14px] text-left top-[197px] w-[706px]"
        style={{ maskImage: `url('${imgNote}')` }}
      >
        <OverviewHelper1 additionalClassNames={["mb-0"]}>
          The new moon, marking the first day of each lunar month, is understood
          to be the full moon. It's described as governing the night and serving
          as a divine sign for seasons, days, and years.
        </OverviewHelper1>
        <p className="block mb-0">&nbsp;</p>
        <OverviewHelper1
          additionalClassNames={["mb-0"]}
        >{`For many reasons, we celebrate the new moon (as the full moon) with important customs, including gathering together, feasting (sharing communal meals) and the sounding of trumpets on this solemn feast day, as mentioned in Psalms. `}</OverviewHelper1>
        <p className="block mb-0">&nbsp;</p>
        <OverviewHelper1>{`The deep meaning of this timing is further emphasized by the events surrounding Christ's crucifixion: the darkness that occurred on Passover (the 15th of the month) is seen as evidence, suggesting a solar eclipse at that time would mean the month must have begun with a full moon. This observance, described in Colossians as a "shadow of things to come," is considered a biblically mandated practice.`}</OverviewHelper1>
      </div>
      <div
        className="absolute css-o7zan7 font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] left-[943.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-903px_-24px] mask-size-[1008px_647px] text-[#000000] text-[16px] text-center text-nowrap top-6 translate-x-[-50%]"
        style={{ maskImage: `url('${imgNote}')` }}
      >
        <p className="block leading-none whitespace-pre">New Moon</p>
      </div>
    </div>
  );
}