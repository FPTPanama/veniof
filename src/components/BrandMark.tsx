import Image from "next/image";

type Props = {
  className?: string;
  size?: number;
};

/** Official VIOF mark for dark navy backgrounds. */
export function BrandMark({ className = "", size = 50 }: Props) {
  return (
    <Image
      src="/logo/viof-mark-on-dark.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
