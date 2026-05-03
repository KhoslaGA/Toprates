import { colors, fonts } from '@/styles/tokens';
import type { Vertical } from '@/components/disclaimers/DisclaimerBlock';

/**
 * Vertical-specific article byline.
 *
 * Entity-named only — never an individual person. The credibility carrier
 * is the company under partnership agreement (KLC Group Canada Inc. for
 * life, Webhub4u Inc. editorial for everything else).
 *
 * Strategy doc rule: "No individual names anywhere in public copy."
 */

const BYLINES: Record<Vertical, string> = {
  life: 'Content reviewed by LLQP-licensed advisors at KLC Group Canada Inc.',
  pc: 'Editorial content from TopRates.ca · Webhub4u Inc.',
  mortgage: 'Editorial content from TopRates.ca · Webhub4u Inc.',
  cards: 'Editorial content with affiliate disclosure · TopRates.ca · Webhub4u Inc.',
};

export function ArticleByline({ vertical }: { vertical: Vertical }) {
  return (
    <div
      style={{
        fontFamily: fonts.mono,
        fontSize: 11,
        letterSpacing: 1.2,
        color: colors.muted,
        textTransform: 'uppercase',
        fontWeight: 600,
        marginTop: 8,
      }}
    >
      {BYLINES[vertical]}
    </div>
  );
}

export default ArticleByline;
