import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface VideoImageProps {
  href: string;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  priority?: boolean;
}

export const VideoImage: FC<VideoImageProps> = (props) => {
  const { href, src, width = 350, height = 300, alt, priority = false } = props;

  return (
    <Link href={href}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
      />
    </Link>
  );
};
