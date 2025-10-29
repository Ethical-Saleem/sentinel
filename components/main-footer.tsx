"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  LinkedIn,
  Twitter,
  Youtube,
  Tiktok,
  Reddit,
  Telegram,
  Discord,
} from "./icons";

export const Footer = () => {
  const links = [
    {
      key: "features",
      label: "Features",
      children: [
        {
          id: "margin",
          label: "Margin Trading",
          href: "#",
        },
        {
          id: "futures",
          label: "Futures Trading",
          href: "#",
        },
        {
          id: "oci",
          label: "OCI Trading",
          href: "#",
        },
        {
          id: "intitutions",
          label: "Institutions",
          href: "#",
        },
        {
          id: "api_trading",
          label: "API Trading",
          href: "#",
        },
        {
          id: "staking",
          label: "Staking Rewards",
          href: "#",
        },
        {
          id: "feature_all",
          label: "All features",
          href: "#",
        },
      ],
    },
    {
      key: "company",
      label: "Company",
      children: [
        {
          id: "margin",
          label: "Margin Trading",
          href: "#",
        },
        {
          id: "futures",
          label: "Futures Trading",
          href: "#",
        },
        {
          id: "oci",
          label: "OCI Trading",
          href: "#",
        },
        {
          id: "intitutions",
          label: "Institutions",
          href: "#",
        },
        {
          id: "api_trading",
          label: "API Trading",
          href: "#",
        },
        {
          id: "staking",
          label: "Staking Rewards",
          href: "#",
        },
        {
          id: "feature_all",
          label: "All features",
          href: "#",
        },
      ],
    },
    {
      key: "prices",
      label: "Browse Prices",
      children: [
        {
          id: "margin",
          label: "Margin Trading",
          href: "#",
        },
        {
          id: "futures",
          label: "Futures Trading",
          href: "#",
        },
        {
          id: "oci",
          label: "OCI Trading",
          href: "#",
        },
        {
          id: "intitutions",
          label: "Institutions",
          href: "#",
        },
        {
          id: "api_trading",
          label: "API Trading",
          href: "#",
        },
        {
          id: "staking",
          label: "Staking Rewards",
          href: "#",
        },
        {
          id: "feature_all",
          label: "All features",
          href: "#",
        },
      ],
    },
    {
      key: "markets",
      label: "Popular Markets",
      children: [
        {
          id: "margin",
          label: "Margin Trading",
          href: "#",
        },
        {
          id: "futures",
          label: "Futures Trading",
          href: "#",
        },
        {
          id: "oci",
          label: "OCI Trading",
          href: "#",
        },
        {
          id: "intitutions",
          label: "Institutions",
          href: "#",
        },
        {
          id: "api_trading",
          label: "API Trading",
          href: "#",
        },
        {
          id: "staking",
          label: "Staking Rewards",
          href: "#",
        },
        {
          id: "feature_all",
          label: "All features",
          href: "#",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      id: "instagram",
      label: "Instagram",
      href: "",
      icon: <Instagram />,
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "",
      icon: <Facebook />,
    },
    {
      id: "linkedin",
      label: "Linkedin",
      href: "",
      icon: <LinkedIn />,
    },
    {
      id: "twitter",
      label: "X",
      href: "",
      icon: <Twitter />,
    },
    {
      id: "youtube",
      label: "Youtube",
      href: "",
      icon: <Youtube />,
    },
    {
      id: "tiktok",
      label: "Tiktok",
      href: "",
      icon: <Tiktok />,
    },
    {
      id: "redit",
      label: "Reddit",
      href: "",
      icon: <Reddit />,
    },
    {
      id: "telegram",
      label: "Telegram",
      href: "",
      icon: <Telegram />,
    },
    {
      id: "discord",
      label: "Discord",
      href: "",
      icon: <Discord />,
    },
  ];
  return (
    <footer className="bg-[#0a1419] border-t border-[#2d3b47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Company Info */}
          <div className="col-span-12 lg:col-span-4">
            <div className="max-w-xl">
              <h1 className="text-[20px] md:text-[32px] font-bold text-white mb-4 leading-tight max-w-sm">
                Take your crypto trading to the next level.
              </h1>
              <div className="flex items-center justify-between mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="Footer logo"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-row gap-4 mb-4">
                <button
                  className="bg-[#2D9CFF] text-[#0a1419] px-4 py-3 rounded-lg font-semibold w-1/2
               hover:bg-[#3db2ff] transition-colors duration-200 shadow-sm"
                >
                  Create account
                </button>
                <button
                  className="bg-[#17232d] text-[#b6c2cc] px-4 py-3 rounded-lg font-semibold w-1/2
               hover:bg-[#1e303e] hover:text-[#e2eaf0] transition-colors duration-200 shadow-sm"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {links.map((section) => (
                <div key={section.key} className="mb-8">
                  <h3 className="text-white text-[16px] font-semibold">
                    {section.label}
                  </h3>
                  <ul className="">
                    {section.children.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          className="text-[#9ca3af] text-[14px] hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-12 border-t border-[#2d3b47]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Legal Links */}
            <ul className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-3">
              <li>
                <Link
                  href="#"
                  className="text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  Cookie Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  Disclosures
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="w-full md:w-auto grid grid-cols-4 md:flex gap-4 mt-4 md:mt-0">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  className="text-[#9ca3af] hover:text-white transition-colors flex items-center justify-center"
                >
                  <span className="sr-only">{link.label}</span>
                  <span className="w-5 h-5">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full pt-12">
            <p className="text-[#9ca3af] text-sm">
              © 2011 - 2025 Sentinel Trading Investment
            </p>
          </div>
          <div className="w-full pt-12">
            <p className="text-[#9ca3af] text-[12px] italic">
              These materials are for general information purposes only and are
              not investment or financial product advice or a recommendation or
              solicitation to buy, sell, stake or hold any cryptoasset or to
              engage in any specific trading strategy. Sentinel does not and
              will not work to increase or decrease the price of any particular
              cryptoasset it makes available. The unpredictable nature of the
              crypto-asset markets can lead to loss of funds. Tax may be payable
              on any return and/or on any increase in the value of your
              cryptoassets and you should seek independent advice on your
              taxation position. Geographic restrictions may apply. Some crypto
              products and markets are unregulated. Sentinel’s regulatory status
              for its various products and services differs per jurisdiction and
              you may not be protected by government compensation and/or
              regulatory protection schemes. See Legal Disclosures for each
              jurisdiction (here).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
