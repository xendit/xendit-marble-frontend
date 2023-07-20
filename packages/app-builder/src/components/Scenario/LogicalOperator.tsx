import { useTranslation } from 'react-i18next';

import { scenarioI18n } from './scenario-i18n';
import { ScenarioBox } from './ScenarioBox';

interface LogicalOperatorProps {
  operator: 'if' | 'and' | 'or' | 'where';
  className?: string;
}

export function LogicalOperator({ operator, className }: LogicalOperatorProps) {
  const { t } = useTranslation(scenarioI18n);

  return (
    <ScenarioBox className={className}>
      <span className="text-grey-25 w-full text-center font-semibold">
        {t(`scenarios:logical_operator.${operator}`)}
      </span>
    </ScenarioBox>
  );
}