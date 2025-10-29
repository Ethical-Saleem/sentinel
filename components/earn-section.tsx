"use client";

import { TrendingUp, Rocket } from "lucide-react";
export const EarnSection = () => {
  return (
    <section id="earn" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Make your assets work for you
          </h2>
          <p className="text-[18px] md:text-[20px] text-white text-pretty">
            Earn up to 24% APY. With a wide range of supported assets, you can
            receive rewards up to twice a week.
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4 space-y-3">
            <div className="bg-[#1b2832] rounded-lg p-4">
              <TrendingUp className="h-[28px] w-[28px] mb-4 text-white" />
              <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">
                Calculate your rewards
              </h2>
              <p className="text-[16px] text-white">
                Portfolio growth charts over time, based on different staking
                scenarios and the effect of compounding rewards.
              </p>
            </div>
            <div className="bg-[#1b2832] rounded-lg p-4">
              <Rocket className="h-[28px] w-[28px] mb-4 text-white" />
              <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">
                Manage your portfolio
              </h2>
              <p className="text-[16px] text-white">
                Clear trackers for your rewards and staking balance with one
                consolidated view.
              </p>
            </div>
            <div className="bg-[#1b2832] rounded-lg p-4">
              <TrendingUp className="h-[28px] w-[28px] mb-4 text-white" />
              <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">
                Unstake at any time
              </h2>
              <p className="text-[16px] text-white">
                Unstaking is possible upon request. We don’t apply any lock-up
                periods unless it’s required by the network itself’
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="w-full rounded-lg p-6">
              <div
                data-component-key="48881a147497"
                className="kraken-component"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_minmax(240px,1fr)_1fr]">
                    <div className="flex grow basis-0 flex-col">
                      <div className="ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 gap-ds-1 flex-col flex">
                        <button
                          className="text-ds-button-neutral-medium hover:text-ds-button-neutral-medium-hover active:bg-ds-button-neutral-medium-active bg-ds-button-neutral-medium hover:bg-ds-button-neutral-medium-hover w-full rounded-ds-button-lg outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-lg inline-block whitespace-nowrap no-underline text-ds-button-lg group size-ds-dropdown-button-lg gap-ds-dropdown-button-lg"
                          type="button"
                          tabIndex={0}
                          aria-label="Search"
                          aria-labelledby="react-aria-«Rndb1ct5j6H7» react-aria-«Rndb1ct5j6H2» react-aria-«Rndb1ct5j6H3»"
                          id="«R6ndb1ct5j6»"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="items-center gap-ds-button-lg text-ds-dropdown-button-content-text flex justify-between">
                            <span>
                              <div className="flex items-center gap-2 px-1 py-[3px]">
                                <div
                                  className="ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 leading-none h-ds-icon-md w-ds-icon-md"
                                  aria-label="btc icon"
                                >
                                  <div className="relative inset-0 size-full">
                                    <img
                                      alt="BTC icon"
                                      className="absolute inset-0 size-full object-scale-down rounded-full"
                                      src="https://assets.kraken.com/marketing/web/icons-uni-webp/s_btc.webp?i=kds"
                                    />
                                  </div>
                                </div>
                                <span className="text-ds-primary text-ds-label1 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                                  BTC
                                </span>
                                <span className="text-ds-positive text-ds-label1 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                                  0.1% APY
                                </span>
                              </div>
                            </span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-ds-button-lg-icon pointer-events-none [&amp;_path]:stroke-ds-dropdown-button-content-icon [&amp;_path]:group-hover:stroke-ds-dropdown-button-content-icon-hover size-ds-dropdown-button-icon-size-emphasis-none-lg size-ds-dropdown-button-icon-size-lg ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0"
                              name="ChevronDownSmall"
                            >
                              <path
                                d="M7.5 9.98291L11.2045 13.6874C11.6438 14.1268 12.3562 14.1268 12.7955 13.6874L16.5 9.98291"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="fill-transparent stroke-ds-icon-dimmed"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="flex grow-[2] basis-0 lg:grow xl:grow">
                      <span className="relative grow">
                        <span className="absolute left-4 top-1">
                          <span className="text-ds-primary text-ds-body3 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                            Amount
                          </span>
                        </span>
                        <div className="relative">
                          <div className="absolute bottom-2 left-4 -mb-px">
                            $
                          </div>
                          <input
                            type="number"
                            className="bg-ds-button-neutral-medium outline-ds-brand font-kraken-product text-ds-primary box-border h-[54px] w-full grow rounded-xl border-none pl-7 pr-4 pt-4 text-sm font-medium outline-2 [appearance:textfield] focus:outline [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none"
                            value="100"
                          />
                        </div>
                        <div className="absolute right-3 top-3 mt-px flex gap-1">
                          <button
                            className="text-ds-button-primary-medium hover:text-ds-button-primary-medium-hover active:bg-ds-button-primary-medium-active bg-ds-button-primary-medium hover:bg-ds-button-primary-medium-hover shadow-ds-button-primary-medium rounded-ds-button-xxs outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xxs inline-block whitespace-nowrap no-underline text-ds-button-xxs"
                            type="button"
                            tabIndex={0}
                            style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                          >
                            <span className="flex items-center justify-center gap-ds-button-xxs">
                              <span>$100</span>
                            </span>
                          </button>
                          <button
                            className="text-ds-button-primary-medium hover:text-ds-button-primary-medium-hover active:bg-ds-button-primary-medium-active bg-ds-button-primary-medium hover:bg-ds-button-primary-medium-hover shadow-ds-button-primary-medium rounded-ds-button-xxs outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xxs inline-block whitespace-nowrap no-underline text-ds-button-xxs"
                            type="button"
                            tabIndex={0}
                            style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                          >
                            <span className="flex items-center justify-center gap-ds-button-xxs">
                              <span>$500</span>
                            </span>
                          </button>
                          <button
                            className="text-ds-button-primary-medium hover:text-ds-button-primary-medium-hover active:bg-ds-button-primary-medium-active bg-ds-button-primary-medium hover:bg-ds-button-primary-medium-hover shadow-ds-button-primary-medium rounded-ds-button-xxs outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xxs inline-block whitespace-nowrap no-underline text-ds-button-xxs"
                            type="button"
                            tabIndex={0}
                            style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                          >
                            <span className="flex items-center justify-center gap-ds-button-xxs">
                              <span>$1000</span>
                            </span>
                          </button>
                        </div>
                      </span>
                    </div>
                    <div className="flex grow basis-0">
                      <span className="relative grow">
                        <span className="absolute left-4 top-1">
                          <span className="text-ds-primary text-ds-body3 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                            BTC
                          </span>
                        </span>
                        <input
                          type="number"
                          className="bg-ds-button-neutral-medium outline-ds-brand text-ds-primary font-kraken-product box-border h-[54px] w-full grow rounded-xl border-none px-4 pt-4 text-sm font-medium outline-2 [appearance:textfield] focus:outline [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none"
                          value="0.0009"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="relative flex h-[464px] justify-center">
                    <div
                      className="absolute bottom-0 h-1/2 w-1/4"
                      style={{ left: "0%" }}
                    ></div>
                    <div
                      className="absolute bottom-0 h-1/2 w-1/4"
                      style={{ left: "0%" }}
                    ></div>
                    <div
                      className="absolute bottom-0 h-1/2 w-1/4"
                      style={{ left: "0%" }}
                    ></div>
                    <div
                      className="absolute bottom-0 h-1/2 w-1/4"
                      style={{ left: "0%" }}
                    ></div>
                    <div className="absolute left-0 top-0 flex flex-col gap-2 p-6">
                      <span className="text-ds-primary text-ds-body2 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                        In 12 months, you would have
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="bg-ds-brand mb-[2px] size-4 rounded"></div>
                        <span className="text-ds-primary text-ds-label1 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                          100.10
                          <span className="text-ds-neutral text-ds-label1 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                            USD
                          </span>
                        </span>
                        <span className="" tabIndex={0}>
                          <div className="flex border-b border-dashed">
                            <span className="text-ds-primary text-ds-body3 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0"></span>
                          </div>
                        </span>
                      </div>
                      <div className="text-ds-primary text-ds-body4 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                        Based on today’s BTC price
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className="bg-ds-button-neutral-medium rounded-lg"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="«R1db1ct5j6»-gradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stop-color="#8a85ff"
                            stop-opacity="0.2"
                          ></stop>
                          <stop
                            offset="100%"
                            stop-color="#8a85ff"
                            stop-opacity="0.1"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,99 Q80,100 100,0 L108,100 Q80,103 0,99 Z"
                        fill="url(#«R1db1ct5j6»-gradient)"
                        stroke="none"
                      ></path>
                      <path
                        d="M0,99 Q80,100 100,0"
                        fill="none"
                        stroke="#8A61FF"
                        stroke-width="0.15"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative flex justify-between">
                    <div className="bg-ds-dimmed absolute top-0 w-px -translate-y-full transition-all left-[calc(33.4%)] h-[80px]"></div>
                    <div className="shadow-ds-tooltip-popup absolute w-max -translate-x-[50%] -translate-y-full rounded-xl bg-white/[0.04] p-3 backdrop-blur-xl transition-all -top-[80px] left-[calc(33.4%)]">
                      <div className="mt-[-6px]">
                        <span className="text-ds-primary text-ds-label3 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                          12 months
                        </span>
                      </div>
                      <div className="mt-px opacity-80">
                        <div className="text-ds-primary text-ds-body3 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                          0.0009BTC
                        </div>
                        <div className="text-ds-primary text-ds-body3 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0">
                          Equals 100.10 USD
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="hidden md:inline">
                        <button
                          className="text-ds-button-neutral-medium hover:text-ds-button-neutral-medium-hover active:bg-ds-button-neutral-medium-active bg-ds-button-neutral-medium hover:bg-ds-button-neutral-medium-hover rounded-ds-button-xxs outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xxs inline-block whitespace-nowrap no-underline text-ds-button-xxs"
                          type="button"
                          tabIndex={0}
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="flex items-center justify-center gap-ds-button-xxs">
                            <span>1 month</span>
                          </span>
                        </button>
                      </span>
                      <span className="inline md:hidden">
                        <button
                          className="text-ds-button-neutral-medium hover:text-ds-button-neutral-medium-hover active:bg-ds-button-neutral-medium-active bg-ds-button-neutral-medium hover:bg-ds-button-neutral-medium-hover rounded-ds-button-sm outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-sm inline-block whitespace-nowrap no-underline text-ds-button-sm"
                          type="button"
                          tabIndex={0}
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="flex items-center justify-center gap-ds-button-sm">
                            <span>1 M</span>
                          </span>
                        </button>
                      </span>
                    </div>
                    <div>
                      <span className="hidden md:inline">
                        <button
                          className="text-ds-button-neutral-high hover:text-ds-button-neutral-high-hover active:bg-ds-button-neutral-high-active bg-ds-button-neutral-high hover:bg-ds-button-neutral-high-hover rounded-ds-button-xxs outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xxs inline-block whitespace-nowrap no-underline text-ds-button-xxs"
                          type="button"
                          tabIndex={0}
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="flex items-center justify-center gap-ds-button-xxs">
                            <span>12 months</span>
                          </span>
                        </button>
                      </span>
                      <span className="inline md:hidden">
                        <button
                          className="text-ds-button-neutral-high hover:text-ds-button-neutral-high-hover active:bg-ds-button-neutral-high-active bg-ds-button-neutral-high hover:bg-ds-button-neutral-high-hover rounded-ds-button-sm outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-sm inline-block whitespace-nowrap no-underline text-ds-button-sm"
                          type="button"
                          tabIndex={0}
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="flex items-center justify-center gap-ds-button-sm">
                            <span>12 M</span>
                          </span>
                        </button>
                      </span>
                    </div>
                    <div>
                      <span className="hidden md:inline">
                        <button
                          className="text-ds-button-neutral-medium hover:text-ds-button-neutral-medium-hover active:bg-ds-button-neutral-medium-active bg-ds-button-neutral-medium hover:bg-ds-button-neutral-medium-hover rounded-ds-button-xxs outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xxs inline-block whitespace-nowrap no-underline text-ds-button-xxs"
                          type="button"
                          tabIndex={0}
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="flex items-center justify-center gap-ds-button-xxs">
                            <span>24 months</span>
                          </span>
                        </button>
                      </span>
                      <span className="inline md:hidden">
                        <button
                          className="text-ds-button-neutral-medium hover:text-ds-button-neutral-medium-hover active:bg-ds-button-neutral-medium-active bg-ds-button-neutral-medium hover:bg-ds-button-neutral-medium-hover rounded-ds-button-sm outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-sm inline-block whitespace-nowrap no-underline text-ds-button-sm"
                          type="button"
                          tabIndex={0}
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="flex items-center justify-center gap-ds-button-sm">
                            <span>24 M</span>
                          </span>
                        </button>
                      </span>
                    </div>
                    <div>
                      <span className="hidden md:inline">
                        <button
                          className="text-ds-button-neutral-medium hover:text-ds-button-neutral-medium-hover active:bg-ds-button-neutral-medium-active bg-ds-button-neutral-medium hover:bg-ds-button-neutral-medium-hover rounded-ds-button-xxs outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xxs inline-block whitespace-nowrap no-underline text-ds-button-xxs"
                          type="button"
                          tabIndex={0}
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="flex items-center justify-center gap-ds-button-xxs">
                            <span>36 months</span>
                          </span>
                        </button>
                      </span>
                      <span className="inline md:hidden">
                        <button
                          className="text-ds-button-neutral-medium hover:text-ds-button-neutral-medium-hover active:bg-ds-button-neutral-medium-active bg-ds-button-neutral-medium hover:bg-ds-button-neutral-medium-hover rounded-ds-button-sm outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-sm inline-block whitespace-nowrap no-underline text-ds-button-sm"
                          type="button"
                          tabIndex={0}
                          style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                        >
                          <span className="flex items-center justify-center gap-ds-button-sm">
                            <span>36 M</span>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
