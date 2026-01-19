import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <Link to="/" className={`inline-flex items-baseline ${className}`}>
      <span className={`font-bold text-primary ${sizeClasses[size]}`}>tecno</span>
      <span className={`font-extrabold text-secondary ${sizeClasses[size]}`}>actual</span>
      <span className="font-extrabold text-secondary text-xs ml-0.5">.com</span>
    </Link>
  );
};

export default Logo;
