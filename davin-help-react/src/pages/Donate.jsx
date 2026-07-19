import ContactForm from "../components/ContactForm";

const BANK_DETAILS = [
  { label: "Account Name", value: "Divine Help Foundation" },
  { label: "Account No", value: "016310110008070" },
  { label: "Bank name", value: "bank of india" },
  { label: "IFSC Code", value: "BKID0000163" },
  { label: "MICR Code", value: "400013153" },
  { label: "Branch Name", value: "Jogeshwari (West)" },
  {
    label: "Branch Address",
    value: (
      <>
        Ground Floor, Flexcel, JNOF
        And S.V. Road Maharastra
        Mumbai: 400102
      </>
    ),
  },
];

function DonationAmount() {
  return (
    <div className="text-center">
      <h2 className="text-black font-archivo text-[29px] lg:text-[30px] xl:text-[40px] 2xl:text-[55px] font-normal uppercase mb-[5px] lg:mb-0">
        Join us in making a difference
      </h2>
      <div>
        <h3 className="text-brand-dark text-[20px] lg:text-[20px] xl:text-[23px] 2xl:text-[33px] font-bold uppercase inline leading-[1.4] lg:leading-normal bg-gradient-to-l from-[#FFFCED] via-[#FFD013] to-[#FFFCED] bg-[length:100%_100%]">
          The measure of life is not its duration, but its donation
        </h3>
      </div>
      <div className="mt-0 lg:mt-[2px]">
        <img
          src="/images/hand-ammount.png"
          alt="Donation collection"
          className="max-w-[900px] mx-auto"
        />
      </div>
    </div>
  );
}

function GiftDescription() {
  return (
    <section className="w-full lg:w-full xl:w-4/5 mx-auto">
      <p className="relative text-brand-dark text-center max-w-[400px] lg:max-w-none mx-auto text-[16px] lg:text-[20px] xl:text-[28px] 2xl:text-[33px] font-normal">
        <span
          className="absolute w-[15px] h-[15px] lg:w-[22px] lg:h-[22px] xl:w-[25px] xl:h-[25px] 2xl:w-[40px] 2xl:h-[40px] bg-no-repeat bg-contain bg-left left-[-11px] lg:left-[21px] xl:left-[6px] 2xl:left-[-26px] top-0"
          style={{ backgroundImage: "url(/images/icon/vision-before.svg)" }}
        />
        Your gift can change lives! Every donation to the Divine Help
        Foundation helps provide crucial support for orphaned children,
        ensuring they receive the care and resources they need to thrive.
        Together, we can offer them a brighter future—every contribution
        truly makes a difference.
        <span
          className="absolute w-[15px] h-[15px] lg:w-[22px] lg:h-[22px] xl:w-[25px] xl:h-[25px] 2xl:w-[40px] 2xl:h-[40px] bg-no-repeat bg-contain bg-right right-[18%] lg:right-[28%] xl:right-[26%] 2xl:right-[11%] bottom-0 lg:bottom-[7px] xl:bottom-0"
          style={{ backgroundImage: "url(/images/icon/vision-after.svg)" }}
        />
      </p>
    </section>
  );
}

function BankDetails() {
  return (
    <section className="rounded-[20px] border-2 border-black mt-[30px] p-[15px] lg:p-[47px_40px_73px_40px] xl:p-[47px_23px_73px_23px] 2xl:p-[47px_87px_73px_91px]">
      <div>
        <h2 className="text-brand-dark text-center text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[39px] font-bold uppercase">
          Bank Details
        </h2>
      </div>
      <div className="mt-2">
        {BANK_DETAILS.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col lg:flex-row items-start lg:items-end justify-between mt-2 gap-1 ${
              i === BANK_DETAILS.length - 1 ? "lg:items-start" : ""
            }`}
          >
            <span className="text-brand-dark text-[20px] lg:text-[14px] xl:text-[21px] 2xl:text-[22px] font-medium uppercase">
              {item.label}
            </span>
            <img
              src="/images/icon/info-bb.svg"
              alt=""
              className="hidden lg:block w-[36%] xl:w-[51%] pb-[6px] xl:pb-[9px] ml-[4px] xl:ml-[9px]"
            />
            <span
              className={`text-brand-dark text-[20px] lg:text-[14px] xl:text-[21px] 2xl:text-[22px] font-medium uppercase lg:w-[174px] xl:w-[323px] lg:justify-end border-b-2 lg:border-b-0 border-dashed border-brand-yellow block ${
                i === BANK_DETAILS.length - 1 ? "lg:mt-[10px]" : ""
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Donate() {
  return (
    <>
      <main className="py-[25px] lg:py-[40px] xl:py-[60px] 2xl:py-[100px]">
        <div className="container mx-auto max-w-[1320px] px-[15px]">
          <DonationAmount />
          <GiftDescription />
          <BankDetails />
        </div>
      </main>
      <ContactForm bgYellow submitWhite />
    </>
  );
}
