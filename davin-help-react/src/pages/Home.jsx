import ContactForm from "../components/ContactForm";

function Hero() {
  return (
    <section className="pt-[30px] lg:pt-[20px] xl:pt-0">
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-7/12">
            <div>
              <h1 className="text-brand-dark font-archivo text-[25px] sm:text-[35px] lg:text-[36.248px] xl:text-[40.248px] font-normal uppercase mb-[15px] xl:mb-[24px]">
                Touching, Teaching <br /> and{" "}
                <span className="bg-brand-yellow2 px-[5px]">
                  Transforming <br /> Lives
                </span>
              </h1>
            </div>
            <div>
              <p className="text-brand-dark text-[17px] sm:text-[18px] xl:text-[20px] font-normal">
                At Divine Help Foundation, we are committed to transforming
                lives through health, education, and support. Our programs
                focus on uplifting underprivileged communities by providing
                sustainable solutions to everyday challenges Together, we can
                create a brighter future for families, children, and the
                elderly. Join us in making a difference.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end lg:self-end">
            <img
              src="/images/hero-person.png"
              alt="Divine Help Foundation volunteer"
              className="w-full max-w-[500px] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contribution() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <div className="bg-black text-center py-[25px] sm:py-[30px] lg:py-[42px] pl-0 lg:pl-[calc(100%-660px)]">
            <h5 className="text-white text-[17.072px] sm:text-[19.072px] lg:text-[23.072px] font-normal">
              Every contribution makes a difference
            </h5>
            <h3 className="text-brand-yellow font-archivo text-[40px] lg:text-[50px] xl:text-[70px] font-normal uppercase">
              Donate Now
            </h3>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-brand-yellow2 text-center lg:text-left py-[25px] sm:py-[30px] lg:py-[42px] pr-0 lg:pr-[calc(100%-660px)]">
            <h5 className="text-black text-[17.072px] sm:text-[19.072px] lg:text-[23.072px] font-normal lg:pl-[30px] xl:pl-[50px]">
              Lend your time and expertise
            </h5>
            <h3 className="text-black font-archivo text-[26.571px] lg:text-[29.571px] xl:text-[45.571px] font-normal uppercase lg:pl-[30px] xl:pl-[50px]">
              Become a Volunteer
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHAT_WE_DO_POSTS = [
  {
    title: "Education",
    image: "/images/education.png",
    reverse: false,
    text: (
      <>
        Providing access to quality
        education for underprivileged
        children.
      </>
    ),
  },
  {
    title: "Healthcare",
    image: "/images/health-care.png",
    reverse: true,
    text: (
      <>
        Ensuring access to <br /> medical care for <br /> those in need.
      </>
    ),
  },
  {
    title: "Support Programs",
    image: "/images/support.png",
    reverse: false,
    text: (
      <>
        Empowering families <br />
        with resources for a <br />
        better future.
      </>
    ),
  },
];

function WhatWeDo() {
  return (
    <section className="py-[30px] md:py-[50px] lg:py-[100px]">
      <div className="overflow-hidden">
        <div className="relative pl-0 lg:pl-[calc(100%-720px)] xl:pl-[calc(100%-960px)] 2xl:pl-[calc(100%-1320px/2)]">
          <h2 className="text-black font-archivo text-[35px] md:text-[45px] lg:text-[60px] font-normal uppercase text-center lg:text-left">
            What We Do
          </h2>
          <div className="hidden lg:block absolute w-[200%] h-[5px] bg-black top-[20px] xl:top-[26px] 2xl:top-[35px] left-[75%] xl:left-[80%] 2xl:left-[77%]" />
        </div>
        <div>
          <h3 className="text-brand-dark text-center lg:text-left text-[20px] md:text-[23px] lg:text-[27px] font-bold uppercase mt-[10px] lg:mt-0 py-[5px] lg:py-0 pl-0 lg:pl-[calc(100%-720px)] xl:pl-[calc(100%-960px)] 2xl:pl-[calc(100%-1320px/2)] bg-gradient-to-l from-[#FFFCED] to-[#FFD013]">
            Uplifting Communities, Transforming Lives
          </h3>
        </div>
      </div>

      <div className="container mx-auto max-w-[1320px] px-[15px]">
        {WHAT_WE_DO_POSTS.map((post, idx) => (
          <div
            key={post.title}
            className={`flex flex-col ${
              post.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center mt-[10px] mb-[20px] lg:mt-[50px] lg:mb-0`}
          >
            <div className="w-full lg:w-5/12">
              <div
                className={`relative w-full h-auto lg:h-[265px] xl:h-[314px] 2xl:h-[365px] rounded-none lg:rounded-[50.212px] bg-transparent lg:bg-brand-yellow text-center lg:text-left mb-[10px] lg:mb-0`}
              >
                {idx === 1 && (
                  <div
                    className="hidden lg:block absolute -z-10 bg-no-repeat bg-cover bg-left w-[526px] h-[658px] xl:w-[800px] xl:h-[800px] 2xl:w-[883px] 2xl:h-[815px] left-[-131%] xl:left-[-177%] 2xl:left-[-170%] top-[-165px] xl:top-[-60%] 2xl:top-[-46%]"
                    style={{ backgroundImage: "url(/images/icon/post-connector.svg)" }}
                  />
                )}
                <img
                  src={post.image}
                  alt={post.title}
                  className={`max-w-[500px] mx-auto lg:mx-0 lg:max-w-none ${
                    idx === 0
                      ? "lg:translate-x-[25px]"
                      : idx === 1
                      ? "lg:-translate-x-[25px]"
                      : "lg:translate-x-[25px]"
                  }`}
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div
                className={`pl-0 ${
                  post.reverse
                    ? "lg:pr-[50px] lg:text-right"
                    : "lg:pl-[50px]"
                }`}
              >
                <h3 className="text-brand-dark text-center lg:text-left text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[50px] font-bold">
                  {post.title}
                </h3>
                <p
                  className={`text-brand-dark text-center text-[19px] lg:text-[20px] xl:text-[25px] 2xl:text-[31px] font-normal ${
                    post.reverse ? "lg:text-right" : "lg:text-left"
                  } ${post.reverse ? "" : "2xl:pr-[113px]"}`}
                  style={post.reverse ? { textAlign: undefined } : undefined}
                >
                  {post.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const CHANGE_PARTS = [
  {
    title: "Volunteer",
    image: "/images/volunter.png",
    text: (
      <>
        Lend your time and <br /> expertise.
      </>
    ),
    border: false,
  },
  {
    title: "Donate",
    image: "/images/donate.png",
    text: (
      <>
        Every contribution makes <br />
        a difference.
      </>
    ),
    border: true,
  },
  {
    title: "Advocate",
    image: "/images/advocade.png",
    text: (
      <>
        Share our mission with <br />
        your network.
      </>
    ),
    border: false,
  },
];

function PartOfChange() {
  return (
    <section className="pt-[35px] pb-[40px] lg:pt-[60px] lg:pb-[60px] xl:pt-[84px] xl:pb-[100px] bg-brand-yellow">
      <div>
        <div className="mb-0">
          <h2 className="text-black text-center font-archivo text-[22px] sm:text-[38px] lg:text-[50px] font-normal uppercase">
            BE PART OF THE CHANGE
          </h2>
          <h5 className="text-brand-dark text-center text-[18px] sm:text-[25px] lg:text-[30px] font-bold uppercase bg-gradient-to-l from-brand-yellow via-white to-brand-yellow bg-[length:100%] [background-position:0_0] [background-image:linear-gradient(to_left,#FFCD00_43%,#fff_50%,#FFCD00_60%)]">
            Your Actions Matter
          </h5>
        </div>

        {CHANGE_PARTS.map((part) => (
          <div
            key={part.title}
            className="relative flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[60px] lg:gap-[100px] mt-[30px] sm:mt-[84px]"
          >
            {part.border && (
              <>
                <span
                  className="absolute top-[-14px] sm:top-[-35px] left-0 w-full h-[5px] bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/icon/boder-s.svg)" }}
                />
                <span
                  className="absolute bottom-[-17px] sm:bottom-[-40px] left-0 w-full h-[5px] bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/icon/boder-s.svg)" }}
                />
              </>
            )}
            <div className="order-2 sm:order-1 w-full sm:w-[35%] text-center sm:text-right">
              <h3 className="text-brand-dark text-[35.076px] sm:text-[40.076px] lg:text-[50.076px] font-bold">
                {part.title}
              </h3>
              <p className="text-brand-dark text-[17.258px] sm:text-[25.258px] lg:text-[33.258px] font-normal leading-tight">
                {part.text}
              </p>
            </div>
            <div className="order-1 sm:order-2 w-full sm:w-[35%] flex justify-center">
              <img src={part.image} alt={part.title} className="w-[180px] sm:w-[200px] lg:w-[250px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FutureVision() {
  return (
    <section className="pt-[40px] pb-[50px] lg:pt-[60px] lg:pb-[80px] xl:pt-[126px] xl:pb-[150px]">
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        <div>
          <div>
            <h2 className="text-black font-archivo text-[31px] lg:text-[45px] xl:text-[60px] font-normal uppercase text-center mb-0 lg:mb-[10px] xl:mb-[32px]">
              Our Vision for the Future
            </h2>
          </div>
          <div>
            <p className="relative max-w-[400px] lg:max-w-none mx-auto lg:mx-0 text-brand-dark text-center text-[16px] lg:text-[28px] xl:text-[35px] font-normal">
              <span
                className="absolute w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] xl:w-[40px] xl:h-[40px] bg-no-repeat bg-contain bg-left left-[-16px] lg:left-[10px] xl:left-[-37px] top-0"
                style={{ backgroundImage: "url(/images/icon/vision-before.svg)" }}
              />
              Building a future where every individual can live a healthy,
              educated, and empowered life by addressing the root causes of
              poverty and inequality through education, healthcare, and
              community support.
              <span
                className="absolute w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] xl:w-[40px] xl:h-[40px] bg-no-repeat bg-contain bg-right right-[85px] lg:right-[30%] xl:right-[106px] bottom-[3px] xl:bottom-0"
                style={{ backgroundImage: "url(/images/icon/vision-after.svg)" }}
              />
            </p>
          </div>
          <div>
            <a
              href="#"
              title="Donate Now"
              className="w-full lg:w-[440px] xl:w-[628px] rounded-full bg-brand-yellow text-black text-center font-archivo text-[35.037px] lg:text-[42.037px] xl:text-[70.037px] font-normal uppercase mx-auto mt-[25.48px] lg:mt-[30.48px] xl:mt-[60.48px] block py-[10px] lg:py-0"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinUs() {
  return (
    <section className="relative bg-brand-yellow">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="order-2 sm:order-1 w-full sm:w-1/2">
          <img src="/images/join-us-child.png" alt="Join us today" className="w-full" />
        </div>
        <div className="order-1 sm:order-2 w-full sm:w-1/2">
          <div className="static sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-[14.5%] py-[30px] sm:py-0">
            <h1 className="text-white font-archivo font-normal uppercase leading-[0.9] text-[60.279px] sm:text-[70.279px] md:text-[90.279px] lg:text-[110.279px] xl:text-[150.279px] 2xl:text-[176.279px] text-center sm:text-left">
              Join Us
            </h1>
            <h1 className="text-white font-archivo font-normal uppercase leading-[0.9] text-[68.15px] sm:text-[80.15px] md:text-[105.15px] lg:text-[125.15px] xl:text-[167.15px] 2xl:text-[200.15px] text-center sm:text-left">
              TODAY!
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Contribution />
      <WhatWeDo />
      <PartOfChange />
      <FutureVision />
      <JoinUs />
      <ContactForm />
    </>
  );
}
