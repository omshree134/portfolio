// @flow strict

function SectionHeading({ cue, title, sub }) {
  return (
    <div className="mb-8 lg:mb-12">
      <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] text-cc mb-2">
        [CUE&nbsp;{cue}]
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-paper">
        {title}
      </h2>
      <div className="cue-rule"></div>
      {sub && (
        <p className="mt-4 text-sm text-muted max-w-xl leading-relaxed">{sub}</p>
      )}
    </div>
  );
}

export default SectionHeading;
