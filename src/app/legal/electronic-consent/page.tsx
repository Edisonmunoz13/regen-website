import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Communications Consent | Regen",
  description:
    "Regen's E-SIGN Act consent to receive disclosures, notices, statements, and other communications electronically.",
  openGraph: {
    title: "Electronic Communications Consent | Regen",
    description:
      "Regen's E-SIGN Act consent to receive disclosures, notices, statements, and other communications electronically.",
  },
};

export default function ElectronicConsentPage() {
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
            <h1 className="text-4xl font-bold text-white mb-4">Electronic Communications Consent</h1>
            <p className="text-emerald-400 text-lg">Regen Technology, Inc.</p>
            <p className="text-zinc-400 text-sm mt-2">
              Effective Date: 3 August 2026 | Last Updated: 8 July 2026 | Next Review: 3 August 2027
            </p>
            <p className="text-zinc-400 text-sm mt-1">Owner: Chief Compliance Officer</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Consent to Electronic Communications</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                By creating a Regen account, you consent to receive disclosures, notices, account agreements,
                statements, error-resolution notices, tax forms, and other communications
                (&ldquo;Communications&rdquo;) from Regen Technology, Inc. (&ldquo;Regen,&rdquo; &ldquo;we,&rdquo;
                or &ldquo;us&rdquo;) electronically. Under the federal Electronic Signatures in Global and
                National Commerce Act (E-SIGN Act), your consent allows us to provide these Communications
                electronically rather than on paper, and electronic delivery constitutes proper notice under
                applicable law.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-4">
                This consent applies to all Communications relating to your Regen account and your use of the
                Service, for as long as you have an account, and not merely to a single transaction.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Before you consent, please confirm that you can access this disclosure and open and read
                electronic documents in the formats we use (described in Section 4). By tapping or clicking to
                accept, you confirm that you are able to access information in electronic form and that you
                consent to electronic delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Communicate</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">We will send Communications by:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Email to your registered address.</li>
                <li>In-app notifications through our mobile app or website.</li>
                <li>Text messages for security alerts (if you provide a mobile number).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. What You Will Receive</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">Communications may include:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>The Program Agreement, Privacy Policy, and other agreements.</li>
                <li>Account statements and transaction history.</li>
                <li>Security alerts and account notifications.</li>
                <li>Updates to our policies or services.</li>
                <li>Regulatory notices, error-resolution notices, and tax forms as required by law.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. System Requirements</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">To receive and retain Communications, you will need:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
                <li>A current email address.</li>
                <li>Internet access and a web browser or mobile device.</li>
                <li>The ability to view, download, and save or print PDF files and other electronic documents.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed">
                If you use spam filters, please add hello@regeninvest.co to your safe sender list. We will
                notify you if material changes to these requirements create a risk that you may not be able to
                access or retain Communications, and we will obtain your consent again where the law requires it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Responsibilities</h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Keep your email address and other contact details current in your account settings.</li>
                <li>Check your email and in-app notifications regularly for important Communications.</li>
                <li>Save or print copies of important documents for your records.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Withdrawing Consent</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                You may withdraw your consent to electronic Communications at any time by emailing{" "}
                <a href="mailto:hello@regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  hello@regeninvest.co
                </a>{" "}
                with &ldquo;Withdraw Electronic Consent&rdquo; in the subject line, or by contacting us through
                our website.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Because the Service relies on electronic delivery, withdrawing consent may require us to close
                your account. Withdrawal takes effect only after we have had a reasonable opportunity to process
                it and does not affect the validity of Communications provided before then.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Paper Copies</h2>
              <p className="text-zinc-300 leading-relaxed">
                You may request a paper copy of any Communication by contacting us at hello@regeninvest.co
                within 180 days of the date we sent it. The first two paper copies are provided at no charge.
                We may charge a reasonable fee for additional paper copies, which we will disclose before
                charging it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Updating Your Information</h2>
              <p className="text-zinc-300 leading-relaxed">
                You can update the email address and mobile number associated with your account at any time in
                your account settings, or by contacting us at hello@regeninvest.co. It is your responsibility to
                keep this information accurate so that you continue to receive Communications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Our Rights</h2>
              <p className="text-zinc-300 leading-relaxed">
                We may, at our discretion, provide any Communication in paper form instead of electronically,
                require electronic delivery for certain services, or update our delivery methods with
                appropriate notice.
              </p>
            </section>

            <section className="mb-8 p-6 rounded-xl border border-emerald-900/40 bg-black/40">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact</h2>
              <p className="text-zinc-300 mb-2">Regen Technology, Inc.</p>
              <p className="text-zinc-300 mb-2">805 Greenwood, Evanston, IL 60201</p>
              <a href="mailto:hello@regeninvest.co" className="text-emerald-400 hover:text-emerald-300 transition-colors block mb-4">
                hello@regeninvest.co
              </a>
              <p className="text-zinc-400 text-sm italic">
                By proceeding with account setup, you agree to receive Communications electronically and confirm
                that you meet the system requirements above.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
