import LegalLayout from '../components/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="A detailed explanation of what data may be collected, how its used, and how third-party tools (like Google Forms) may process it."
    >
      <p className="not-prose mb-6 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Important:</span> This Privacy Policy explains how AI
        Creates Dev ("we", "us") handles information when you visit this website or contact us.
      </p>
      <p className="not-prose mt-4 text-sm leading-relaxed text-white/75">
        <span className="font-semibold text-white">Google Form:</span> This website embeds a Google Form for project
        requests. When you submit that form, Google may collect and process data according to its own terms and
        policies.
      </p>

      <h2>1) Information you provide</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">What you may submit:</span> information you voluntarily
        provide.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Your name (or business name)</li>
        <li>Contact details you include (for example, an email address)</li>
        <li>Service requirement (website, landing page, portfolio, SaaS dashboard, etc.)</li>
        <li>Budget range, timeline goals, and project notes</li>
        <li>Attachments, links, or references you share (brand assets, inspirations, competitor links)</li>
      </ul>

      <h2>2) How we use information</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Primary uses:</span> responding, quoting, planning, and
        delivering your requested service.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Respond to your inquiry and ask follow-up questions</li>
        <li>Create a quote, project outline, or timeline estimate</li>
        <li>Plan and deliver requested services</li>
        <li>Improve onboarding and workflows (non-sensitive learnings)</li>
      </ul>
      <p className="not-prose mt-5 text-sm leading-relaxed text-white/75">
        <span className="font-semibold text-white">We do not sell your information.</span>
      </p>

      <h2>3) Communication channels (Instagram, GitHub, Discord)</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Public channels:</span> you can contact us through the
        official profiles below.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>
          <strong>Instagram</strong>:{' '}
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
          <strong>GitHub</strong>:{' '}
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
          <strong>Discord</strong>:{' '}
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
        <span className="font-semibold text-white">Note:</span> If you contact us via these platforms, those
        platforms may collect and process data under their own privacy policies.
      </p>

      <h2>4) Automatically collected data</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Technical data:</span> some info may be collected
        automatically.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Device and browser type</li>
        <li>Approximate location (city/region) derived from IP by platform providers</li>
        <li>Pages visited and navigation behavior</li>
        <li>Referrer information</li>
      </ul>
      <p className="not-prose mt-5 text-sm leading-relaxed text-white/75">
        <span className="font-semibold text-white">Why:</span> performance, security, and reliability.
      </p>

      <h2>5) Google Forms processing</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Embedded form:</span> submissions are processed by
        Google.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>The submission is processed by Google.</li>
        <li>Google may collect metadata depending on your account/settings.</li>
        <li>We can access responses through the Google account that owns the form.</li>
      </ul>
      <p className="not-prose mt-5 text-sm leading-relaxed text-white/75">
        If you prefer not to use Google Forms, you can contact AI Creates Dev through Instagram, GitHub, or Discord.
      </p>

      <h2>6) Data retention</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Retention:</span> we keep inquiry information only as
        long as needed.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Respond to your request</li>
        <li>Plan delivery and keep project records</li>
        <li>Provide support or future updates if requested</li>
      </ul>
      <p className="not-prose mt-5 text-sm leading-relaxed text-white/75">
        Retention depends on whether you become a client, the project type, and operational needs.
      </p>

      <h2>7) Data security</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Security:</span> we use reasonable safeguards.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>We use reputable platforms and limit access to project information.</li>
        <li>No method of transmission or storage is 100% secure.</li>
        <li>Please avoid sharing sensitive credentials in plain text.</li>
      </ul>

      <h2>8) Your choices and rights</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Your choices:</span> you decide what to share.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Share only what youre comfortable sharing.</li>
        <li>You can keep your request high-level and we can follow up.</li>
        <li>
          You may request deletion of your data (where we control it) by contacting us via Instagram, GitHub, or
          Discord.
        </li>
      </ul>

      <h2>9) Third-party links</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Third-party services:</span> links may take you to
        external websites.
      </p>
      <ul className="not-prose mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-white/75">
        <li>Instagram, GitHub, Discord, Google, and other third parties have their own policies.</li>
        <li>We are not responsible for third-party privacy practices.</li>
      </ul>

      <h2>10) Updates to this Privacy Policy</h2>
      <p className="not-prose mt-4 text-base leading-relaxed text-white/75">
        <span className="text-lg font-semibold text-white">Updates:</span> we may update this policy.
      </p>
      <p className="not-prose mt-3 text-sm leading-relaxed text-white/75">
        We may update this Privacy Policy to reflect changes in tools, workflows, or legal requirements. The most
        recent version will be posted on this page.
      </p>
    </LegalLayout>
  );
}
