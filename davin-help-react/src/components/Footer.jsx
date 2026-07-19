const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/DivineHelpFoundations?mibextid=ZbWKwL",
    icon: "/images/icon/facebook.svg",
    label: "Facebook",
  },
  { href: "#", icon: "/images/icon/twitter.svg", label: "Twitter" },
  { href: "#", icon: "/images/icon/youtube.svg", label: "YouTube" },
  {
    href: "https://www.instagram.com/divine_help_foundations?igsh=MTRid2w0Z21wZDZ1eA==",
    icon: "/images/icon/instagram.svg",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="pt-[50px] pb-[100px] md:pt-[85px] bg-brand-black">
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <a href="#">
                <img
                  src="/images/footer-logo.png"
                  alt="Divine Help Foundation"
                  className="w-[140px] sm:w-[200px]"
                />
              </a>
            </div>
            <div>
              <p className="text-white text-[17px] sm:text-[22px] lg:text-[28px] font-normal my-4">
                C.T.S. No.508, Oshiwara, Falak Compound, Sufi Sayyed Kamal
                Baba Marg, Vaishali Nagar, Jogeshwari(W), Mumbai- 400102
              </p>
            </div>
            <div>
              <ul>
                {SOCIAL_LINKS.map((s, i) => (
                  <li
                    key={s.label}
                    className={`inline-block mx-[3px] ${
                      i === 0 ? "ml-0" : ""
                    } ${i === SOCIAL_LINKS.length - 1 ? "mr-0" : ""}`}
                  >
                    <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                      <img src={s.icon} alt={s.label} className="w-[30px] sm:w-[40px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <ul>
              <li className="flex items-center gap-[10px] lg:gap-[15px]">
                <img
                  src="/images/icon/person-icon.svg"
                  alt=""
                  className="w-[25px] sm:w-[34px] lg:w-[40px]"
                />
                <span className="text-white text-[16px] sm:text-[19px] lg:text-[27px] font-normal">
                  Mr. S.A. Sayyed
                </span>
              </li>
              <li className="flex items-center gap-[10px] lg:gap-[15px] my-[19px]">
                <img
                  src="/images/icon/mobile-icon.svg"
                  alt=""
                  className="w-[25px] sm:w-[34px] lg:w-[40px]"
                />
                <span className="text-white text-[16px] sm:text-[19px] lg:text-[27px] font-normal">
                  +91 79001 12575
                </span>
              </li>
              <li className="flex items-center gap-[10px] lg:gap-[15px]">
                <img
                  src="/images/icon/email-icon.svg"
                  alt=""
                  className="w-[25px] sm:w-[34px] lg:w-[40px]"
                />
                <span className="text-white text-[16px] sm:text-[19px] lg:text-[27px] font-normal">
                  <a href="mailto:info@divinehelpfoundation.com" className="!text-white">
                    info@divinehelpfoundation.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
