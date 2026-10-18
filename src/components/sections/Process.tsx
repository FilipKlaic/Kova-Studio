const steps = [
  {
    title: "Intro call",
    text: "We talk about your business and what's slowing you down. No strings attached.",
  },
  {
    title: "Scope together",
    text: "I scope the work with you, so we agree on what gets built and why before any code is written.",
  },
  {
    title: "Design & build",
    text: "I design it with you and build it properly, talking to you directly the whole way.",
  },
  {
    title: "Launch",
    text: "Your software goes live. No hand-offs and no account managers, just one line of communication from idea to launch.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">How it works</p>
        <h2 className="headline mt-3 max-w-2xl">
          One person from the first call to launch.
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-foreground pt-5">
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
