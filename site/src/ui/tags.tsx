import { Badge, type BadgeProps } from './badge';

// Verdict tag — Tier-1 verification verdicts (PASS / FLAG / FAIL)
export type Verdict = 'PASS' | 'FLAG' | 'FAIL' | string;

const verdictVariant: Record<string, BadgeProps['variant']> = {
  PASS: 'sage',
  FLAG: 'brass',
  FAIL: 'burgundy',
};

interface VerdictTagProps {
  verdict: Verdict;
  size?: BadgeProps['size'];
  className?: string;
}

export function VerdictTag({ verdict, size = 'sm', className }: VerdictTagProps) {
  const v = (verdict || '').toUpperCase();
  const variant = verdictVariant[v] ?? 'graphite';
  return (
    <Badge variant={variant} size={size} className={className}>
      <span className="font-mono tracking-wider">{v}</span>
    </Badge>
  );
}

// System-type tag — MES / MFC / MEC / MDC / MES-x
const systemVariant: Record<string, BadgeProps['variant']> = {
  MES: 'sage',
  MFC: 'graphite',
  MEC: 'brass',
  MDC: 'shewanella',
  MES2: 'sage',
  PMFC: 'labcoat',
  PMEC: 'labcoat',
  BES: 'iron-bacteria',
};

interface SystemTagProps {
  type: string | null | undefined;
  size?: BadgeProps['size'];
  className?: string;
}

export function SystemTag({ type, size = 'sm', className }: SystemTagProps) {
  if (!type) return null;
  const key = type.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const variant = systemVariant[key] ?? 'gray';
  return (
    <Badge variant={variant} size={size} className={className}>
      <span className="font-mono">{type}</span>
    </Badge>
  );
}

// Coverage tag — n sources + DOI traceability hint
interface CoverageTagProps {
  sources: number;
  doiPct?: number | null;
  size?: BadgeProps['size'];
  className?: string;
}

export function CoverageTag({ sources, doiPct, size = 'sm', className }: CoverageTagProps) {
  // Variant by coverage tier: thin <3, ok 3-9, robust 10+
  let variant: BadgeProps['variant'];
  let tier: string;
  if (sources < 3) {
    variant = 'brass';
    tier = 'thin';
  } else if (sources < 10) {
    variant = 'graphite';
    tier = 'ok';
  } else {
    variant = 'sage';
    tier = 'robust';
  }
  const doiBit =
    typeof doiPct === 'number' && Number.isFinite(doiPct) ? ` · ${doiPct.toFixed(0)}% DOI` : '';
  const title = `${sources} source${sources === 1 ? '' : 's'}${doiBit} (${tier})`;
  return (
    <Badge variant={variant} size={size} className={className} title={title}>
      <span className="font-mono">
        n={sources}
        {doiBit}
      </span>
    </Badge>
  );
}

// Inline status pill used in the header — compact, link-shaped
interface StatusPillProps {
  label: string;
  verdict?: Verdict;
  href?: string;
  className?: string;
}

export function StatusPill({ label, verdict, href, className }: StatusPillProps) {
  const v = (verdict || '').toUpperCase();
  const dotColor =
    v === 'PASS' ? 'bg-mes-sage' : v === 'FAIL' ? 'bg-mes-burgundy' : 'bg-mes-brass';
  const inner = (
    <span
      className={`inline-flex items-center gap-1.5 border border-gray-300 bg-white px-2 py-1 text-xs text-mes-text-secondary hover:border-mes-bakelite hover:text-mes-text-primary transition-colors ${className ?? ''}`}
    >
      <span className={`h-1.5 w-1.5 ${dotColor}`} aria-hidden />
      <span className="font-mono tracking-tight">{label}</span>
    </span>
  );
  if (href) {
    return (
      <a href={href} className="no-underline">
        {inner}
      </a>
    );
  }
  return inner;
}
