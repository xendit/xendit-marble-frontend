import clsx from 'clsx';
import { type ParseKeys } from 'i18next';
import { type Outcome } from 'marble-api';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Tag, type TagProps } from 'ui-design-system';

import { decisionsI18n } from './decisions-i18n';

export interface OutcomeProps extends Omit<TagProps, 'color'> {
  outcome: Outcome;
}

const outcomeMapping: Record<
  Outcome,
  { color: TagProps['color']; tKey: ParseKeys<['decisions']> }
> = {
  approve: { color: 'green', tKey: 'decisions:outcome.approve' },
  review: { color: 'yellow', tKey: 'decisions:outcome.review' },
  decline: { color: 'red', tKey: 'decisions:outcome.decline' },
  null: { color: 'grey', tKey: 'decisions:outcome.null' },
  unknown: { color: 'grey', tKey: 'decisions:outcome.unknown' },
};

const outcomes = ['approve', 'review', 'decline'] satisfies Outcome[];
export function useOutcomes() {
  const { t } = useTranslation(decisionsI18n);

  return useMemo(
    () =>
      outcomes.map((outcome) => ({
        value: outcome,
        label: t(outcomeMapping[outcome].tKey),
      })),
    [t]
  );
}

export function Outcome({ outcome, ...tagProps }: OutcomeProps) {
  const { t } = useTranslation(decisionsI18n);

  const { color, tKey } = outcomeMapping[outcome] ?? outcomeMapping.unknown;

  return (
    <Tag {...tagProps} color={color}>
      {t(tKey)}
    </Tag>
  );
}

export const OutcomePanel = ({ outcome }: { outcome: Outcome }) => {
  const { t } = useTranslation(decisionsI18n);
  const { color, tKey } = outcomeMapping[outcome] ?? outcomeMapping.unknown;

  return (
    <div
      className={clsx(
        'flex w-full flex-col items-center justify-center gap-4 rounded p-8',
        {
          'bg-green-10': color === 'green',
          'bg-yellow-10': color === 'yellow',
          'bg-red-10': color === 'red',
        }
      )}
    >
      <div
        className={clsx('text-s', {
          'text-green-50': color === 'green',
          'text-yellow-50': color === 'yellow',
          'text-red-50': color === 'red',
        })}
      >
        {t('decisions:outcome')}
      </div>
      <div
        className={clsx('text-l font-semibold capitalize', {
          'text-green-100': color === 'green',
          'text-yellow-100': color === 'yellow',
          'text-red-100': color === 'red',
        })}
      >
        {t(tKey)}
      </div>
    </div>
  );
};
