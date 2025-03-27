import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black w-full h-auto px-8 xl:px-[50px] pt-[56px] pb-[42px]">
      <div className="flex justify-between sm:gap-[20px] max-md:flex-wrap">
        <Link href="/">
          <Image
            alt="logo"
            width={150}
            height={66}
            className="mb-[47px] mt-6"
            src="/logo/battero_white.svg"
            style={{ color: "transparent" }}
          />
        </Link>

        <div className="flex mt-[15px] gap-[30px] max-md:flex-wrap text-[#F4F8E7] leading-[27px]">
          {/* Business Solutions Column */}
          <ul>
            <li className="text-[#F4F8E7] sub_heading font-semibold mb-[24px]">
              <p>Business Solutions</p>
            </li>
            <FooterLink href="/e-waste" text="E-waste Management" />
            <FooterLink
              href="/lithium-ion-battery-management"
              text="Lithium-ion Battery Management"
            />
            <FooterLink href="/upcycling" text="Upcycling" />
            <FooterLink href="/green-metals" text="Green Metals" />
            <FooterLink href="/selsmart" text="Selsmart" />
            <FooterLink href="/metalmandi" text="MetalMandi" />
          </ul>

          {/* Middle Column */}
          <ul>
            <FooterHeadingLink href="/sustainability" text="Sustainability" />
            <FooterHeadingLink
              href="/software-technology"
              text="Software Technology"
            />
            <FooterHeadingLink
              href="/people-and-culture"
              text="People & Culture"
            />
          </ul>

          {/* Right Column */}
          <ul>
            <FooterHeadingLink href="/about" text="About Us" />
            <FooterHeadingLink href="/media" text="Media" />
            <FooterHeadingLink href="/blog" text="Blogs" />
          </ul>
        </div>

        {/* Contact and Social Section */}
        <div className="mt-[15px]">
          <Link
            href="/contact-us"
            className="font-semibold text-[#F4F8E7] sub_heading"
          >
            Get In Touch
          </Link>

          <div className="flex items-center gap-6 mt-[30px]">
            <SocialIcon
              href="https://www.linkedin.com/company/attero-recycling-pvt-ltd/"
              src="/social/Linkedin.svg"
              alt="linkedin"
            />
            <SocialIcon
              href="https://x.com/AtteroIndia/"
              src="/social/twitter.svg"
              alt="twitter"
            />
            <SocialIcon
              href="https://www.facebook.com/AtteroIndia/"
              src="/social/facebook.svg"
              alt="FB"
            />
            <SocialIcon
              href="https://www.instagram.com/atteroindia/"
              src="/social/instagram.svg"
              alt="instagram"
            />
            <SocialIcon
              href="https://www.youtube.com/channel/UCNEDUFLDXEe3JcjKs6TkAQQ"
              src="/social/youtube.svg"
              alt="yt"
              width={38}
            />
          </div>

          <ul className="mt-[45px]">
            <li className="flex items-center gap-4 mb-[33px]">
              <Image
                src="/social/call.svg"
                alt=""
                width={40}
                height={40}
                className="invert"
              />
              <p className="body_2 text-white underline">1800-102-9882</p>
            </li>
            <li className="flex items-center gap-4 mb-[20px]">
              <Image
                src="/social/mail.svg"
                alt=""
                width={40}
                height={40}
                className="invert"
              />
              <a href="mailto:info@attero.in" className="body_2 text-white">
                info@attero.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="border-b border-solid border-[#F4F8E7] opacity-[20%] w-full"
        style={{ marginTop: "80px" }}
      />

      <div className="flex items-center justify-between pt-6 text-white">
        <p className="body_2 opacity-[80%] font-[200]">
          © Attero 2025. All rights reserved.
        </p>

        <div className="flex gap-[48px]">
          <FooterTextLink
            href="/terms-and-conditions"
            text="Terms and Conditions"
          />
          <FooterTextLink href="/privacy-policy" text="Privacy Policy" />
        </div>
      </div>
    </div>
  );
}

// Reusable Footer Components
function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li className="text-[#F4F8E7] body_2 mb-[17px]">
      <Link href={href} target="_blank">
        {text}
      </Link>
    </li>
  );
}

function FooterHeadingLink({ href, text }: { href: string; text: string }) {
  return (
    <li className="text-[#F4F8E7] sub_heading font-semibold mb-[24px]">
      <Link href={href} target="_blank">
        {text}
      </Link>
    </li>
  );
}

function FooterTextLink({ href, text }: { href: string; text: string }) {
  return (
    <p className="body_2 opacity-[80%] font-[200] cursor-pointer">
      <Link href={href}>{text}</Link>
    </p>
  );
}

function SocialIcon({
  href,
  src,
  alt,
  width = 30,
}: {
  href: string;
  src: string;
  alt: string;
  width?: number;
}) {
  return (
    <Link href={href} target="_blank">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={30}
        className="invert size-[30px]"
        style={{ color: "transparent" }}
      />
    </Link>
  );
}
