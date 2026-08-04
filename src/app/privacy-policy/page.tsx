import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Regen",
  description:
    "How Regen Technology, Inc. collects, uses, and shares your personal information, including our Gramm-Leach-Bliley Act privacy notice.",
  openGraph: {
    title: "Privacy Policy | Regen",
    description:
      "How Regen Technology, Inc. collects, uses, and shares your personal information, including our Gramm-Leach-Bliley Act privacy notice.",
  },
};

const glbaSharingRows = [
  {
    reason:
      "For our everyday business purposes (processing transactions, maintaining your account, and responding to court orders and legal investigations)",
    shares: "Yes",
    limit: "No",
  },
  {
    reason: "For our marketing purposes (to offer our products and services to you)",
    shares: "No",
    limit: "We don't share",
  },
  {
    reason: "For joint marketing with other financial companies",
    shares: "No",
    limit: "We don't share",
  },
  {
    reason:
      "For our affiliates' everyday business purposes (information about transactions, experiences, or creditworthiness)",
    shares: "No",
    limit: "We don't share",
  },
  {
    reason: "For our affiliates to market to you",
    shares: "No",
    limit: "We don't share",
  },
  {
    reason: "For non-affiliates to market to you",
    shares: "No",
    limit: "We don't share",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0B1410 0%, #13241B 50%, #0B1410 100%)" }}>
      <div className="container-page py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-emerald-400 text-lg">Regen Technology, Inc.</p>
            <p className="text-zinc-400 text-sm mt-2">
              Effective Date: 3 August 2026 | Last Updated: 3 August 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                This Privacy Policy describes how Regen Technology, Inc. (&ldquo;Regen,&rdquo; &ldquo;we,&rdquo;
                &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and shares your personal information when
                you use the Regen mobile applications, websites, and related services (the &ldquo;Service&rdquo;).
                Capitalized terms not defined here have the meanings given in the Regen Program Agreement.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Regen is subject to the Gramm-Leach-Bliley Act (GLBA). The privacy notice it requires is in
                Section 5.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">1.1 Information you provide</h3>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
                <li>Identity details: name, date of birth, residential address, Social Security number, government-issued identification.</li>
                <li>Contact details: email address, phone number.</li>
                <li>Account preferences: your Savings Rules, your user-set floor (if any), and other settings.</li>
                <li>Communications you send to support.</li>
              </ul>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">1.2 Information from connected accounts</h3>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
                <li>From your Linked Bank Account, accessed through Plaid: account and routing numbers, balances, and transaction history.</li>
                <li>From each Linked Sportsbook, accessed through SharpSports: bets, wins, losses, and related Sportsbook Activity events.</li>
              </ul>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">1.3 Information from service providers</h3>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
                <li>
                  Identity verification and ongoing monitoring results from Plaid (as part of bank linking) and
                  Priority Technologies, which operates the Sila platform (for opening your Wallet at the Banking
                  Partner), including KYC and AML screening conducted on our behalf.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">1.4 Information collected automatically</h3>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
                <li>Device and app information: device type, operating system, app version, IP address.</li>
                <li>Usage information: in-app events, collected via AppsFlyer (mobile attribution) and PostHog (product analytics). PostHog session replay is not enabled.</li>
                <li>Application errors and crashes: we may use PostHog or similar tools to capture application errors and crashes for diagnostic purposes.</li>
              </ul>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">1.5 Face ID</h3>
              <p className="text-zinc-300 leading-relaxed">
                If you choose to use Face ID to log in to the Service, biometric authentication is performed on
                your device by your operating system. We do not receive or store your biometric information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">We use your personal information to:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>Operate the Service: open and maintain your account, verify your identity, calculate savings, initiate ACH transfers, and process withdrawals.</li>
                <li>Comply with our legal and regulatory obligations, including KYC, AML, sanctions screening, tax, and recordkeeping requirements.</li>
                <li>Detect, investigate, and prevent fraud, security incidents, and prohibited activity.</li>
                <li>Communicate with you about your account, including service notifications and required disclosures.</li>
                <li>Improve the Service, including diagnosing issues and developing new features.</li>
                <li>Send you marketing communications about Regen, if you consent. We do not currently send marketing communications.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed font-semibold text-emerald-400">
                We do not sell your personal information, and we do not share it for cross-context behavioral advertising.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Share Your Information</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">We share your personal information only as follows:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>
                  Service providers under written contracts that limit their use of your information to operating
                  the Service: Plaid (bank linking, identity verification, ongoing monitoring); Priority
                  Technologies, which operates the Sila platform (payment processing, KYC for Wallet opening,
                  ACH operations, and the banking-partner relationship); SharpSports (sportsbook activity data);
                  the Banking Partner (custody of Wallet balances); AppsFlyer (mobile attribution); and PostHog
                  (product analytics).
                </li>
                <li>
                  Legal and regulatory requirements: with regulators, law enforcement, or other parties when we
                  are required to do so by law, subpoena, or court order, or when we reasonably believe disclosure
                  is necessary to protect Regen, our users, or others.
                </li>
                <li>
                  Business transfers: with successors or acquirers in connection with a merger, acquisition,
                  financing, reorganization, or sale of assets.
                </li>
                <li>With your consent or at your direction.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies and Tracking</h2>
              <p className="text-zinc-300 leading-relaxed">
                Our website regeninvest.co does not run analytics, advertising pixels, or tracking technologies.
                We use only essential cookies necessary for the site to function. Our mobile applications use
                AppsFlyer for attribution and PostHog for product analytics, as described in Section 1.4. If we
                change either of these practices, we will update this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Gramm-Leach-Bliley Act Privacy Notice</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                This section is the privacy notice required by the Gramm-Leach-Bliley Act and Regulation P. It
                describes how we collect, share, and protect nonpublic personal information about you.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">5.1 What we collect</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                As described in Section 1, we collect financial information from you and from third parties,
                including identity details, bank account and transaction information, and Sportsbook Activity.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">5.2 Reasons we can share, and whether you can limit sharing</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-sm border border-emerald-900/40">
                  <thead>
                    <tr className="bg-black/40">
                      <th className="p-3 text-white font-semibold border-b border-emerald-900/40">
                        Reasons we can share your personal information
                      </th>
                      <th className="p-3 text-white font-semibold border-b border-emerald-900/40 whitespace-nowrap">
                        Does Regen share?
                      </th>
                      <th className="p-3 text-white font-semibold border-b border-emerald-900/40 whitespace-nowrap">
                        Can you limit this sharing?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {glbaSharingRows.map((row) => (
                      <tr key={row.reason} className="border-b border-emerald-900/40 last:border-b-0">
                        <td className="p-3 text-zinc-300">{row.reason}</td>
                        <td className="p-3 text-zinc-300">{row.shares}</td>
                        <td className="p-3 text-zinc-300">{row.limit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">5.3 How we protect your information</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We maintain physical, electronic, and procedural safeguards designed to protect your information.
                See Section 9.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">5.4 Definitions</h3>
              <p className="text-zinc-300 leading-relaxed">
                &ldquo;Affiliates&rdquo; means companies related by common ownership or control. We have no
                affiliates today. &ldquo;Non-affiliates&rdquo; means companies not related by common ownership
                or control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your California Privacy Rights</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                If you are a California resident, you have the following rights under the California Consumer
                Privacy Act, as amended by the California Privacy Rights Act (together, the &ldquo;CCPA&rdquo;).
                These rights apply only to personal information that is not subject to the GLBA exemption, which
                covers the majority of the information we collect.
              </p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>Know what personal information we have collected, used, and shared about you.</li>
                <li>Delete the personal information we have collected from you, subject to legal retention obligations.</li>
                <li>Correct inaccurate personal information.</li>
                <li>Opt out of sale or sharing of your personal information. We do not sell or share your personal information.</li>
                <li>Limit use of sensitive personal information. We use sensitive personal information only as needed to provide the Service and as permitted by law.</li>
                <li>Non-discrimination for exercising your rights.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed">
                To exercise these rights, email{" "}
                <a href="mailto:hello@regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  hello@regeninvest.co
                </a>{" "}
                with the subject &ldquo;California Privacy Request.&rdquo; We may need to verify your identity
                before responding. You may designate an authorized agent to make a request on your behalf.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Other US State Privacy Rights</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                If you reside in a state with a comprehensive privacy law (currently including, without
                limitation, Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Tennessee, Iowa,
                Indiana, Delaware, New Hampshire, New Jersey, Maryland, Minnesota, Rhode Island, and Kentucky),
                you may have some or all of the following rights, subject to your state&rsquo;s specific
                provisions and applicable exemptions, including for data covered by the GLBA:
              </p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>Access the personal information we hold about you.</li>
                <li>Correct inaccurate personal information.</li>
                <li>Delete personal information, subject to legal retention obligations.</li>
                <li>Receive a copy of your personal information in a portable format.</li>
                <li>Opt out of targeted advertising, sale of personal information, or profiling. We do not engage in any of these.</li>
                <li>Appeal a denial of your request.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed">
                To exercise these rights, email{" "}
                <a href="mailto:hello@regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  hello@regeninvest.co
                </a>{" "}
                with the subject &ldquo;Privacy Request.&rdquo;
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Your Choices and Controls</h2>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">8.1 Marketing</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We do not currently send marketing communications. If we begin sending marketing emails, we will
                send them only to users who have opted in, and you can unsubscribe at any time via the link in
                any marketing email or by emailing hello@regeninvest.co. If we begin sending marketing SMS, we
                will obtain separate express consent as required by the Telephone Consumer Protection Act.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">8.2 Account closure</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                You can close your Regen account at any time, as described in the Program Agreement. After
                closure, we retain the records required by law and delete the rest as described in Section 10.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">8.3 Face ID</h3>
              <p className="text-zinc-300 leading-relaxed">
                You can enable or disable Face ID at any time from your device settings. This affects only how
                you log in and does not change any information we already hold.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Data Security</h2>
              <p className="text-zinc-300 leading-relaxed">
                We maintain administrative, technical, and physical safeguards designed to protect your personal
                information, including encryption in transit and at rest, role-based access controls, and
                security monitoring. No method of transmission or storage is perfectly secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Data Retention</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We retain personal information for as long as is necessary to operate the Service and to comply
                with our legal and regulatory obligations:
              </p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Identity verification records, transaction records, and other Bank Secrecy Act records: at least five (5) years after the closure of your account, as required by federal law.</li>
                <li>Tax-related records: retained for the period required by IRS rules.</li>
                <li>Support communications: up to three (3) years.</li>
                <li>Other personal information: deleted once no longer needed for the purpose for which it was collected.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Children&rsquo;s Privacy</h2>
              <p className="text-zinc-300 leading-relaxed">
                The Service is not directed to anyone under 18, and we do not knowingly collect personal
                information from anyone under 18.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to this Policy</h2>
              <p className="text-zinc-300 leading-relaxed">
                We may update this Privacy Policy from time to time. When we make a material change, we will
                give you reasonable advance notice by email or in-app notification before the change takes
                effect, and update the &ldquo;Last Updated&rdquo; date at the top of this policy.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-xl border border-emerald-900/40 bg-black/40">
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact</h2>
              <p className="text-zinc-300 mb-2">Regen Technology, Inc.</p>
              <p className="text-zinc-300 mb-2">805 Greenwood, Evanston, IL 60201</p>
              <a href="mailto:hello@regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors block mb-2">
                hello@regeninvest.co
              </a>
              <p className="text-zinc-400 text-sm italic mt-2">
                Chief Compliance Officer: Benson Bleier
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
