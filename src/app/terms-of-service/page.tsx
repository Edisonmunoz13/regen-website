import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-emerald-400 text-lg">Regen Technology Inc. - Effective August 18, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                By using Regen Technology Inc.'s platform, mobile application, and website (collectively, 
                the "Services"), you agree to these Terms of Service ("Terms"). If you do not agree, you 
                may not use the Services.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                These Terms are a binding agreement between you and Regen Technology Inc. ("Regen," "we," 
                "us," or "our").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. What Regen Does</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Regen helps you automatically save money based on your sports betting outcomes. When you 
                connect your bank account and betting accounts, Regen calculates savings amounts and 
                securely transfers funds into a dedicated account.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Regen is not a gambling company. We do not place bets, operate sportsbooks, or promote 
                gambling. We are a financial technology provider, working with regulated partners to 
                process payments and hold customer funds.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Eligibility</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">To use the Services, you must:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Be at least 18 years old (or the age of majority in your jurisdiction)</li>
                <li>Be a resident of the United States</li>
                <li>Have a valid U.S. checking account</li>
                <li>Provide accurate and complete information during signup and verification</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Account Setup and Verification</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                To comply with U.S. financial regulations, you agree to provide certain personal and 
                financial information for identity verification ("KYC"). This may include your name, 
                date of birth, address, Social Security number, and government-issued ID.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Verification is conducted through our partners, including Plaid (bank connections) and 
                Sila (payment processing). If you fail verification, you cannot use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Electronic Communications Consent</h2>
              <p className="text-zinc-300 leading-relaxed">
                You consent to receive all communications, agreements, and disclosures electronically, 
                including this Terms of Service agreement, privacy policies, account statements, and 
                other notices. You may withdraw consent by contacting us at support@regeninvest.co, 
                but this may limit your ability to use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. How Savings Work</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                You authorize Regen to access your betting data (via SharpSports) to calculate savings amounts
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                You authorize Regen and our partners to transfer funds from your connected bank account 
                into a Regen-linked account held at a banking partner
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Transfers will only be made according to your configured rules, subject to daily and 
                monthly transfer limits
              </p>
              <p className="text-zinc-300 leading-relaxed">
                You may withdraw your savings at any time, subject to partner bank policies
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6.1 ACH Authorization</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                By using the Services, you authorize Regen and its partners to initiate Automated 
                Clearing House (ACH) debit and credit entries to your linked account for savings 
                transfers and withdrawals. This authorization will remain in effect until you terminate 
                your account or revoke authorization by contacting us at least 3 business days before 
                the next scheduled transfer.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                You have the right to stop payment of preauthorized transfers by calling or writing us 
                at least 3 business days before the scheduled date of the transfer. If you order us to 
                stop one of these payments 3 business days or more before the transfer is scheduled, 
                and we do not do so, we will be liable for your losses or damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Fees</h2>
              <p className="text-zinc-300 leading-relaxed">
                Regen currently does not charge monthly account fees. We may charge fees for expedited 
                withdrawals or other premium services, which will be clearly disclosed before you are 
                charged. You may also incur fees from your bank or our partners (such as overdraft fees), 
                which are not controlled by Regen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Risks You Acknowledge</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Regen relies on third-party partners (banks, processors, data providers). Service 
                interruptions or errors may occur
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Automated savings transfers depend on your linked account having sufficient funds. 
                You are responsible for maintaining balances to avoid overdraft fees
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Regen is not responsible for your betting activity. We only calculate savings amounts; 
                betting outcomes are provided by your sportsbook or SharpSports
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                <span className="font-semibold text-emerald-400">FDIC Insurance:</span> FDIC insurance 
                only covers the failure of an FDIC-insured bank. FDIC insurance up to $250,000 is 
                available on customer funds through pass-through insurance at Bank, Member FDIC where 
                we have a direct relationship for the placement of deposits and into which customer 
                funds are deposited, but only if certain conditions have been met. There may be a risk 
                that FDIC insurance is not available because conditions have not been satisfied. In 
                such cases, funds may not be fully insured in the event the insured depository 
                institution where the funds have been deposited were to fail
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Regen is not a bank and funds held with Regen partners may not be immediately available 
                during service disruptions
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Account restrictions or freezes may occur due to compliance requirements or suspicious 
                activity investigations
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Transfer timing depends on banking processing schedules and may take 1-3 business days
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Your linked bank account must have sufficient funds to avoid overdraft fees
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Prohibited Use</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">You agree not to use Regen for:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>Illegal activity, fraud, or money laundering</li>
                <li>Impersonating others or providing false information</li>
                <li>Attempting to access or disrupt our systems</li>
                <li>Creating multiple accounts without authorization</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed">
                We may suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Privacy</h2>
              <p className="text-zinc-300 leading-relaxed">
                Your use of the Services is also governed by our Privacy Policy, which explains how 
                we collect, use, and share your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                You may close your account at any time by contacting support@regeninvest.co.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">We may suspend or close your account if:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>You violate these Terms</li>
                <li>We are required to do so by law or our partners</li>
                <li>Fraudulent or suspicious activity is detected</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mb-4">Upon account closure, we will:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Stop all future automated transfers within 3 business days</li>
                <li>Return your available savings balance to your linked checking account within 5-10 business days</li>
                <li>Close your account according to their procedures</li>
                <li>Retain records as required by federal financial regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Service Interruptions</h2>
              <p className="text-zinc-300 leading-relaxed">
                Regen is not liable for service delays or failures due to circumstances beyond our 
                reasonable control, including but not limited to banking system outages, internet 
                failures, government actions, natural disasters, or regulatory actions affecting our 
                partners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">13. Indemnification</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                <span className="font-semibold text-emerald-400">Customer Responsibility.</span> You 
                agree to indemnify, defend, and hold harmless Regen Technology Inc., our affiliates, 
                and their respective officers, directors, and employees from any claims, losses, 
                damages, liabilities, or costs (including reasonable legal fees) arising out of or 
                related to:
              </p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>your violation of these Terms or of applicable law</li>
                <li>false, inaccurate, or misleading information you provide to us</li>
                <li>unauthorized use of your account resulting from your failure to safeguard your login credentials</li>
                <li>your disputes with third parties that do not arise from Regen's services</li>
                <li>attempts to repudiate transactions that you in fact authorized</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mb-4">
                <span className="font-semibold text-emerald-400">Regen Responsibility:</span> Regen 
                will likewise indemnify you against claims, losses, or costs arising directly from our 
                negligence, willful misconduct, or failure to comply with these Terms.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                <span className="font-semibold text-emerald-400">Limitations:</span> This section 
                does not shift responsibility for Regen's own errors, system failures, or violations 
                of law onto you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">14. Disclaimer of Warranties</h2>
              <p className="text-zinc-300 leading-relaxed">
                The Services are provided "as is" and "as available." Regen makes no warranties, 
                express or implied, about reliability, availability, or suitability for your intended use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">15. Limitation of Liability</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">To the fullest extent permitted by law:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Regen is not liable for indirect, incidental, or consequential damages (e.g., lost profits)</li>
                <li>Regen's total liability is limited to the greater of: (i) $1,000, or (ii) the total fees you paid to Regen in the past 12 months</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">16. Governing Law and Dispute Resolution</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                These Terms are governed by the laws of the State of Delaware, without regard to 
                conflict of law principles.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Any disputes will be resolved through binding arbitration under the rules of the 
                American Arbitration Association (AAA), except claims that qualify for small claims 
                court or claims related to intellectual property or violations of prohibited use. By 
                using the Services, you waive your right to a jury trial or class action.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">17. Changes to Terms</h2>
              <p className="text-zinc-300 leading-relaxed">
                We may update these Terms from time to time. If we make material changes, we will 
                notify you (e.g., by email or in-app notice). Continued use of the Services after 
                changes means you accept the new Terms.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-xl border border-emerald-900/40 bg-black/40">
              <h2 className="text-2xl font-semibold text-white mb-4">18. Contact Us</h2>
              <p className="text-zinc-300 mb-2">Regen Technology Inc.</p>
              <a href="mailto:support@regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors block mb-2">
                Email: support@regeninvest.co
              </a>
              <a href="https://regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors block mb-4">
                Website: regeninvest.co
              </a>
              <p className="text-zinc-400 text-sm italic">
                Your use of our Services is also governed by our Privacy Policy. By using our Services, 
                you acknowledge that you have read and understood both this Terms of Service and our 
                Privacy Policy.
              </p>
              <p className="text-zinc-400 text-sm italic mt-2">
                Policy Owner: Benson Bleier, Chief Compliance Officer
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Regulatory Disclosure</h2>
              <p className="text-zinc-300 leading-relaxed">
                Money transmission services relating to the Passport Program are provided by Priority, 
                directly or through its subsidiary Finxera, Inc. (NMLS #1168701) or its authorized 
                affiliates and contractors.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
