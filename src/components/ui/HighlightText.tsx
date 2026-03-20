interface HighlightTextProps {
  text: string;
  highlight: string[];
}

export const HighlightText = ({ text, highlight }: HighlightTextProps) => {
  if (!highlight.length) return <span className="text-sm">{text}</span>;

  const escaped = highlight.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <span className="text-sm">
      {/* split() with a capturing group puts captured matches at odd indices */}
      {parts.map((part, i) =>
        i % 2 !== 0 ? (
          <mark
            key={i}
            className="bg-primary/10 text-base-content font-bold not-italic"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </span>
  );
};
