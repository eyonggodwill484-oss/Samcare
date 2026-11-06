declare module "aos" {
  type DisableOption =
    | boolean
    | "phone"
    | "tablet"
    | "mobile"
    | (() => boolean);

  type InitOptions = {
    disable?: DisableOption;
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  };

  const AOS: {
    init(options?: InitOptions): void;
    refresh(): void;
    refreshHard(): void;
  };

  export default AOS;
}
