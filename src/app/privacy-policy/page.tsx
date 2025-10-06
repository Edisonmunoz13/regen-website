import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
            <p className="text-emerald-400 text-lg">Regen Technology Inc. - Effective August 18, 2025</p>
            <p className="text-zinc-400 text-sm mt-2">
              Policy Number: COMP-003 | Last Reviewed: August 18, 2025 | Next Review: August 18, 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Regen Technology Inc. ("Regen," "we," "us," or "our") is committed to protecting your 
                privacy. This Privacy Policy explains how we collect, use, and share your personal 
                information when you use our financial wellness platform, mobile application, and 
                website at regeninvest.co (collectively, our "Services").
              </p>
              <p className="text-zinc-300 leading-relaxed">
                <span className="font-semibold text-emerald-400">What We Do:</span> Regen helps you 
                automatically save money based on your sports betting. We are not a gambling company; 
                we are a savings tool that calculates and transfers funds from your checking account 
                to a dedicated savings account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Personal Information You Provide</h3>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
                <li>Identity details: name, date of birth, residential address, and government-issued identification (e.g., SSN)</li>
                <li>Contact details: email address, phone number</li>
                <li>Savings settings: transfer rules and account preferences</li>
                <li>Communications you send us (e.g., support inquiries)</li>
              </ul>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Financial Information</h3>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
                <li>Bank account details (via our partner Plaid)</li>
                <li>Transaction data: deposits, withdrawals, and savings transfers</li>
                <li>Savings account details (held with our banking partner)</li>
              </ul>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Information from Third Parties</h3>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
                <li>Plaid (Bank Connections & Identity Verification): Provides secure bank account connection and KYC/AML checks</li>
                <li>SharpSports: Provides sports betting outcomes for calculating savings amounts. We do not share your personal information with them</li>
              </ul>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Device and browser type, IP address, usage activity, and general location (from IP address)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>Provide services: create/manage your account, connect to your bank, verify identity, process savings transfers</li>
                <li>Comply with legal and regulatory requirements (KYC, AML, fraud prevention)</li>
                <li>Improve our Services: monitor usage, develop features, and ensure security</li>
                <li>Communicate with you: send account updates, security alerts, and support responses</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed font-semibold text-emerald-400">
                We do not sell or rent your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Share Your Information</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">We share your information only when necessary:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Service providers: Plaid (bank connections, identity verification), Sila (payment processing), Wells Fargo (savings account provider)</li>
                <li>Legal compliance: to meet regulatory or law enforcement requirements</li>
                <li>Business transfers: if our company is acquired or merged</li>
                <li>With your consent: for any purpose not otherwise described</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">Depending on where you live, you may have rights to:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>Access and correct your information</li>
                <li>Request deletion (subject to regulatory retention requirements)</li>
                <li>Request a copy of your data (portability)</li>
                <li>Opt out of certain data uses where permitted by law</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed">
                To exercise your rights, email support@regeninvest.co with the subject line: Privacy Rights Request. 
                We may require identity verification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">We use industry-standard safeguards:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Encryption in transit and at rest</li>
                <li>Access controls limiting employee access</li>
                <li>Continuous monitoring for security threats</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Account and transaction records: retained for 5–6 years (regulatory requirement)</li>
                <li>Identity verification records: 5 years after account closure</li>
                <li>Support communications: up to 3 years</li>
                <li>Longer if required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies & Tracking</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Currently, we only use essential cookies (e.g., for login sessions and fraud prevention).
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">If we add analytics or marketing cookies, we will:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Provide notice and obtain consent where required</li>
                <li>Update this Privacy Policy accordingly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
              <p className="text-zinc-300 leading-relaxed">
                Our Services are not directed to individuals under 18. We do not knowingly collect information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Changes</h2>
              <p className="text-zinc-300 leading-relaxed">
                We may update this Privacy Policy. If we make material changes, we will notify you by email 
                (if you have an account) and update the effective date above.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-xl border border-emerald-900/40 bg-black/40">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-zinc-300 mb-2">Regen Technology Inc.</p>
              <a href="mailto:support@regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors block mb-2">
                support@regeninvest.co
              </a>
              <a href="https://regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors block mb-4">
                regeninvest.co
              </a>
              <p className="text-zinc-400 text-sm italic">
                This Privacy Policy is designed to comply with U.S. financial privacy regulations. 
                Your use of our Services is also governed by our Terms of Service.
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
