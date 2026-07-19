import ContactForm from "../components/ContactForm";

function AboutUsIntro() {
  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px] xl:py-[80px] 2xl:py-[100px]">
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        <div>
          <div>
            <h2 className="text-black text-center font-archivo text-[40px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-normal uppercase">
              About US
            </h2>
            <div className="text-center">
              <h3 className="text-brand-dark text-[22px] lg:text-[25px] xl:text-[30px] 2xl:text-[40px] font-bold uppercase inline bg-gradient-to-l from-[#FFFCED] via-[#FFD013] to-[#FFFCED] bg-[length:100%_100%]">
                Highlights of Organization
              </h3>
            </div>
          </div>
          <div>
            <p className="text-brand-dark text-center lg:text-center text-justify text-[16px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] font-normal mt-[16px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[34px]">
              The Divine Help Foundation has been formed and registered with
              special motto to Help the needy persons specially in Medical
              requirement and affected into mis-use of legal concept or
              victim by circumstances. Upon research of various factors from
              bottom level to the High Level of the class of the Public at
              large, it has been observed that generally poor, uneducated
              and trapped by evil design citizens have become victims.
              Because of lack of knowledge and misunderstanding they do not
              understand as to how to overcome the situation, when the ways
              and means are easily available to them as of right. The
              Founder Member and his colleagues have deeply gone into and
              decided to help such needy person irrespective of caste and
              creed in the matter of medically and legally affected
              entities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="pt-[30px] pb-[40px] lg:pt-[40px] lg:pb-[60px] xl:pt-[60px] xl:pb-[70px] 2xl:pt-[87px] 2xl:pb-[100px] bg-brand-yellow">
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        <div>
          <div>
            <h2 className="text-black text-center font-archivo text-[33px] lg:text-[35px] xl:text-[45px] 2xl:text-[65px] font-normal uppercase">
              Vision &amp; Mission
            </h2>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-[30px] mt-[20px] lg:mt-[30px] xl:mt-[50px] 2xl:mt-[85px]">
              <div className="w-full lg:w-[30%] text-center">
                <img
                  src="/images/vission.png"
                  alt="Our Vision"
                  className="max-w-[300px] mx-auto lg:mx-0"
                />
              </div>
              <div className="w-full lg:w-[70%] text-center lg:text-left">
                <h2 className="text-brand-dark text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[43px] font-bold uppercase">
                  Our Vision
                </h2>
                <p className="text-brand-dark text-justify lg:text-left text-[18px] xl:text-[20px] 2xl:text-[26px] font-normal">
                  The Trustees and supporters to the Trust are having strong
                  and Vision at length to help to the Cancer Patients, who
                  are unable to take their required treatment due to
                  financial capacity and/or surviving Below Poverty Line.
                  Also to provide help to the needy persons who are victims
                  of mis-understanding of law and/or mis-guided by cunning
                  factors of Legal fraternity. Not only that to focus on Non
                  implementation of Government Policy for the Public at
                  large. To work on such factors for which the grass route
                  level Citizens are starving to avail the benefits of the
                  Government&rsquo;s Policies.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-[30px] mt-[20px] lg:mt-[30px] xl:mt-[50px] 2xl:mt-[85px]">
              <div className="w-full lg:w-[30%] text-center">
                <img
                  src="/images/mission.png"
                  alt="Our Mission"
                  className="max-w-[300px] mx-auto lg:mx-0"
                />
              </div>
              <div className="w-full lg:w-[70%] text-center lg:text-left">
                <h2 className="text-brand-dark text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[43px] font-bold uppercase">
                  Our Mission
                </h2>
                <p className="text-brand-dark text-justify lg:text-left text-[18px] xl:text-[20px] 2xl:text-[26px] font-normal">
                  The Trust have mission of extending the territory to help
                  to the Cancer Patients beyond Mumbai and Thane. The
                  Trustees are also making their mind to work on the Legal
                  Fraternity from Bombay High Court to the Hon&rsquo;ble
                  Supreme Court, to take out public issues in the larger
                  interest of Public at Large which are burning and eye
                  catching. Trust shall work on this special mission for
                  needy and affected persons.
                </p>
              </div>
            </div>

            <div className="mt-[20px] lg:mt-[30px] xl:mt-[50px] 2xl:mt-[85px]">
              <a
                href="#"
                className="max-w-[325px] lg:max-w-[320px] xl:max-w-[390px] 2xl:max-w-[520px] rounded-[13.364px] lg:rounded-[20.364px] 2xl:rounded-[58.364px] bg-white text-black text-center font-archivo text-[30.037px] lg:text-[29.037px] xl:text-[35.037px] 2xl:text-[53.037px] font-normal uppercase flex items-center justify-center mx-auto pt-[8px] pr-[40px] pb-[9px] pl-[56px]"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <>
      <AboutUsIntro />
      <VisionMission />
      <ContactForm />
    </>
  );
}
