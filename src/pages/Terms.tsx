import LegalLayout from '../components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="A clear, readable agreement for working with AI Creates Dev  scope, payment, delivery, revisions, and rights."
    >
      <p className="not-prose mb-6 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Important:</span> These Terms & Conditions ("Terms")
        define the working relationship between you ("Client", "you") and AI Creates Dev ("Developer", "we",
        "us"). By requesting services, approving a quote, paying an invoice, or submitting a project request through
        our channels (including Instagram, GitHub, or Discord), you agree to these Terms.
      </p>

      <h2>1) Services and scope of work</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">What we do:</span> AI-assisted full stack web
        development and related services.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Premium portfolio websites</li>
        <li>Landing pages and conversion-focused pages</li>
        <li>Business websites</li>
        <li>SaaS dashboards / admin panels</li>
        <li>Internal tools and web apps</li>
        <li>Maintenance and ongoing improvements</li>
      </ul>
      <p className="not-prose mt-5 text-sm leading-relaxed text-white/75">
        <span className="font-semibold text-white">Scope definition:</span> Your scope is defined in writing
        (proposal / message agreement / statement of work). Anything not explicitly included is considered
        out-of-scope.
      </p>
      <p className="not-prose mt-4 text-sm leading-relaxed text-white/75">
        <span className="font-semibold text-white">AI usage:</span> We may use AI tools to speed up iteration.
        Final implementation decisions remain the Developers responsibility.
      </p>

      <h2>2) Communication channels</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Main channels:</span> we coordinate through the official
        links below.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>
          <span className="font-semibold text-white">Instagram:</span>{' '}
          <a
            href="https://www.instagram.com/web.ai.create/"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-200 underline-offset-4 hover:underline"
          >
            https://www.instagram.com/web.ai.create/
          </a>
        </li>
        <li>
          <span className="font-semibold text-white">GitHub:</span>{' '}
          <a
            href="https://github.com/aicreatesdev-bot"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-200 underline-offset-4 hover:underline"
          >
            https://github.com/aicreatesdev-bot
          </a>
        </li>
        <li>
          <span className="font-semibold text-white">Discord:</span>{' '}
          <a
            href="https://discord.gg/jean9SywWk"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-200 underline-offset-4 hover:underline"
          >
            https://discord.gg/jean9SywWk
          </a>
        </li>
      </ul>
      <p className="not-prose mt-5 text-sm leading-relaxed text-white/75">
        <span className="font-semibold text-white">Client responsibility:</span> timely replies and clear feedback.
        Response delays can push delivery timelines.
      </p>

      <h2>3) Payments, deposits, and pricing</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Payment structure:</span> depends on project size
        (deposit / milestones / full upfront).
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>
          <span className="font-semibold text-white">Deposits:</span> reserve build time and are usually
          non-refundable after work starts.
        </li>
        <li>
          <span className="font-semibold text-white">Milestones:</span> larger projects can be split (design  build
           integration  deployment).
        </li>
        <li>
          <span className="font-semibold text-white">Late payments:</span> may pause the project and push delivery.
        </li>
      </ul>
      <p className="not-prose mt-5 text-sm leading-relaxed text-white/75">
        <span className="font-semibold text-white">Processor fees:</span> paid by the Client unless included in the
        proposal.
      </p>

      <h2>4) Revisions and feedback rounds</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Revisions included:</span> as defined in the scope.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>
          A revision = improving something that already exists in the agreed scope (spacing, colors, copy tweaks,
          minor layout refinements).
        </li>
        <li>
          A new feature = out-of-scope (extra pages, new integrations, redesign requests, new flows).
        </li>
        <li>
          Feedback may be requested in batches to keep speed + quality high.
        </li>
      </ul>

      <h2>5) Project timeline and delivery</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Timelines:</span> estimates unless guaranteed in writing.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Scope complexity + integrations</li>
        <li>Client speed (content + approvals + feedback)</li>
        <li>Third-party services (hosting, analytics, APIs, forms)</li>
      </ul>
      <p className="not-prose mt-5 text-sm leading-relaxed text-white/75">
        <span className="font-semibold text-white">Non-response:</span> extended silence may pause the project and
        require rescheduling.
      </p>

      <h2>6) Client responsibilities (content, assets, approvals)</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">You provide:</span> final text, images, brand assets,
        logos, and legal content unless content creation is included.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>You confirm you have rights to any content you provide.</li>
        <li>You approve deliverables in a timely way.</li>
        <li>Post-approval changes outside the revision scope may be billed.</li>
      </ul>

      <h2>7) Third-party tools and services</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Third-party tools:</span> hosting, analytics, embeds,
        forms, APIs, fonts.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>We are not responsible for third-party outages or policy changes.</li>
        <li>We can update integrations as maintenance work when needed.</li>
      </ul>

      <h2>8) No refunds after work starts (unless agreed)</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Refund policy:</span> no refunds after work starts unless
        agreed in writing.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Work time is invested early in planning, design, engineering, and testing.</li>
        <li>If cancellation is mutually accepted, completed work may be delivered as-is.</li>
      </ul>

      <h2>9) Scope changes and additional features</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Extra features:</span> may cost extra and affect
        timelines.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Extra pages, multi-language, complex animations</li>
        <li>Auth flows, payments, booking systems</li>
        <li>Custom admin panels, major redesign changes</li>
        <li>We confirm cost + timeline before starting added work.</li>
      </ul>

      <h2>10) Quality standards and performance</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Quality + speed:</span> premium UI + smooth motion +
        performance-first.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Final speed depends on hosting, third-party scripts, and asset sizes.</li>
        <li>We may recommend optimization for heavy images/videos.</li>
      </ul>

      <h2>11) Ownership, licensing, and portfolio rights</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Ownership:</span> after full payment, you receive the
        rights to the final deliverables as defined in the scope.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Third-party libraries remain under their licenses.</li>
        <li>
          <span className="font-semibold text-white">Portfolio display:</span> we can showcase the project unless
          you request privacy in writing before (or at) delivery.
        </li>
      </ul>

      <h2>12) Maintenance and support</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Maintenance:</span> optional unless included.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Bug fixes, updates, small improvements, dependency updates</li>
        <li>Does not include unlimited redesigns or large new features unless agreed</li>
      </ul>

      <h2>13) Confidentiality</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Confidentiality:</span> sensitive info is treated as
        confidential.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Use secure methods where possible; avoid sending plain-text passwords.</li>
      </ul>

      <h2>14) Limitation of liability</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Liability:</span> we are not liable for indirect or
        consequential damages (loss of profits, interruption, data loss) to the maximum extent allowed by law.
      </p>

      <h2>15) Acceptance</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Agreement:</span> proceeding with a project request and
        approving a proposal confirms that you have read and agree to these Terms.
      </p>

    </LegalLayout>
  );
}
