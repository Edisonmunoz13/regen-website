import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion | Regen",
  description:
    "How to delete your Regen account and what we are required to retain under financial regulations.",
  openGraph: {
    title: "Data Deletion | Regen",
    description:
      "How to delete your Regen account and what we are required to retain under financial regulations.",
  },
};

export default function DataDeletionPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, #0B1410 0%, #13241B 50%, #0B1410 100%)",
      }}
    >
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
            <h1 className="text-4xl font-bold text-white mb-4">
              Deleting Your Account
            </h1>
            <p className="text-emerald-400 text-lg">
              How to delete your Regen account and what we retain.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <p className="text-zinc-300 leading-relaxed">
                You can request the deletion of your Regen account at any time
                from inside the app while signed in with your credentials. Only
                you can delete your own account. We do not process deletion
                requests for third party accounts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                How to Request Deletion
              </h2>
              <ol className="list-decimal list-inside text-zinc-300 space-y-2 mb-4">
                <li>Open the Regen app</li>
                <li>Go to Settings</li>
                <li>Tap Account</li>
                <li>Tap Delete Account</li>
                <li>Confirm your decision when prompted</li>
              </ol>
              <p className="text-zinc-300 leading-relaxed">
                If you no longer have access to your account, you can email us
                at{" "}
                <a
                  href="mailto:hello@regeninvest.co"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  hello@regeninvest.co
                </a>{" "}
                with the subject line &ldquo;Account Deletion Request&rdquo;
                from the email address associated with your Regen account. We
                will verify your identity before processing the request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                What Happens When We Receive Your Request
              </h2>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                1. Immediate Access Closure
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We mark your account as deleted, recording the date and time of
                deletion. From that moment on, you can no longer sign in,
                operate the account, or receive commercial communications from
                Regen.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                2. Email Confirmation
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We send an email to your registered address confirming that the
                deletion has been processed successfully.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                3. Regulatory Retention of Information
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Your account is deleted logically. Personal data, identification
                data (KYC), transaction data, fund movements, and wallet data
                are not physically erased immediately. We are required to retain
                this information for the periods required by applicable
                regulations on the prevention of money laundering, terrorist
                financing, taxation, investor protection, and accounting
                obligations, as well as by the requirements of our service
                providers (including Sila). These periods may extend to several
                years from the end of the relationship.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                4. Restricted Use During Retention
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Throughout the retention period, your data remains blocked. It
                will only be used to respond to requests from competent
                authorities, to exercise or defend potential claims, and to
                comply with the legal obligations described above. It will not
                be used for commercial or profiling purposes.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                5. Definitive Deletion
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Once the legal retention periods have elapsed, your data is
                irreversibly deleted or anonymized.
              </p>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                6. Data Held by Third Parties
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Deletion from our systems does not result in automatic erasure
                at external providers that are subject to their own retention
                obligations, including, for example, our account and custody
                provider. Those retention periods are governed by the
                providers&apos; own policies and by the regulations applicable
                to them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Closing Your Balances Before Deletion
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                If you have funds held through Regen, those funds must be
                withdrawn or transferred before your account can be fully
                closed. The deletion flow inside the Regen app will guide you
                through withdrawing your balance to a connected external bank
                account. If you need help with this step, contact us at{" "}
                <a
                  href="mailto:hello@regeninvest.co"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  hello@regeninvest.co
                </a>
                .
              </p>
            </section>

            <section className="mb-8 p-6 rounded-xl border border-emerald-900/40 bg-black/40">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Questions
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                If you have questions about deleting your account or about the
                data we hold, contact us at{" "}
                <a
                  href="mailto:hello@regeninvest.co"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  hello@regeninvest.co
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Last Updated
              </h2>
              <p className="text-zinc-300 leading-relaxed">April 30, 2026</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
