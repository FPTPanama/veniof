import Image from "next/image";

type Props = {
  className?: string;
  size?: number;
};

/** Official VIOF mark for the light page ground. */
export function BrandMark({ className = "", size = 50 }: Props) {
  return (
    <Image
      src="/logo/viof-mark-on-light.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
