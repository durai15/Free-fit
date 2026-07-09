import Image from 'next/image';

type LogoImageProps = {
  priority?: boolean;
  className?: string;
  sizes?: string;
};

const DEFAULT_LOGO_SIZES = '(max-width: 600px) 38px, (max-width: 960px) 48px, 54px';

export function LogoImage({
  priority = false,
  className = '',
  sizes = DEFAULT_LOGO_SIZES
}: LogoImageProps) {
  const logoClassName = ['logo-img', className].filter(Boolean).join(' ');

  return (
    <Image
      className={logoClassName}
      src="/logo.png"
      alt="Free Fit"
      width={502}
      height={501}
      priority={priority}
      sizes={sizes}
    />
  );
}
