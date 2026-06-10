import { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  ratio?: string;
}

/**
 * Placeholder-friendly image. If the src 404s (image not yet added to public/images),
 * shows a soft branded placeholder. Drop real files into public/images/<folder>/.
 */
export function Img({ src, alt, ratio, className, ...rest }: ImgProps) {
  return (
    <div
      className={cn("relative overflow-hidden bg-gradient-to-br from-muted via-secondary to-muted", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          {...rest}
        />
      ) : null}
      
    </div>
  );
}
