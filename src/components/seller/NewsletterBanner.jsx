import { FiArrowRight, FiMail } from "react-icons/fi";

export default function NewsletterBanner() {
  return (
    <section aria-label="Newsletter signup">
      <div className="overflow-hidden rounded-2xl bg-slate-700 px-5 py-8 text-white sm:px-8 sm:py-10 md:px-12 lg:px-14 lg:py-12">
        <div className="max-w-2xl">
          <h3 className="max-w-md text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px]">
            Join Our Newsletter And Get...
          </h3>

          <p className="mt-3 text-xl font-semibold text-[#FA6C48]">
            $20 discount for your first order
          </p>

          <div className="mt-6 flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row">
            <div className="flex items-center px-4 py-3 text-[#FA6C48] sm:py-0">
              <FiMail />
            </div>

            <input
              type="email"
              aria-label="Enter your email"
              placeholder="Enter Your Email"
              className="w-full min-w-0 px-3 py-3 text-slate-800 outline-none"
            />

            <button
              type="button"
              aria-label="Subscribe to newsletter"
              className="inline-flex items-center justify-center gap-2 bg-[#FA6C48] px-6 py-3 font-semibold text-white transition hover:bg-[#e85f3d] sm:shrink-0"
            >
              Subscribe <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}