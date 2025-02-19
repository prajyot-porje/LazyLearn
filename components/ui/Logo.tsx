import React from "react";
import { Galada} from "next/font/google";
import Link from "next/link";

const fontlogo = Galada({
  subsets: ['latin'],
  weight: "400"
});

const Logo = () => {
  return (
    <Link href="/" className={`${fontlogo.className} flex text-center text-4xl`}>
      <div className="text-blue-500">L</div>
      <div>a</div>
      <div>z</div>
      <div>y</div>
      <div>&nbsp;</div>
      <div className="text-blue-500">L</div>
      <div>e</div>
      <div>a</div>
      <div>r</div>
      <div>n</div>
    </Link>
  );
};

export default Logo;
