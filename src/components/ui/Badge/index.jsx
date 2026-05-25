/**
 * Badge somente-leitura (sem dropdown) para exibição de status.
 *
 * @param {{ status: string, label?: string, styles?: Record<string, { bg: string, text: string, border: string }> }} props
 */

const DEFAULT_STYLES = {
  pendente: { bg: "bg-[#F5C518]", text: "text-[#1E1E1E]", border: "border-[#F5C518]" },
  aprovado: { bg: "bg-[#22C55E]", text: "text-white", border: "border-[#22C55E]" },
  reprovado: { bg: "bg-[#EF4444]", text: "text-white", border: "border-[#EF4444]" },
};

const DEFAULT_LABELS = {
  pendente: "Pendente",
  aprovado: "Aprovado",
  reprovado: "Reprovado",
};

export default function Badge({ status, label, styles }) {
  const s = (styles || DEFAULT_STYLES)[status] || DEFAULT_STYLES.pendente;
  const displayLabel = label || DEFAULT_LABELS[status] || status;

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-md text-xs font-bold
        border-2 ${s.border} ${s.bg} ${s.text}
      `}
    >
      {displayLabel}
    </span>
  );
}
