import { type MathOperator as MathOperatorType } from '@marble-front/operators';
import { assertNever } from '@marble-front/typescript-utils';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { scenarioI18n } from '../../scenario-i18n';
import { Formula } from '../Formula';
import { Condition } from './Condition';

interface MathProps {
  operator: MathOperatorType;
  isRoot?: boolean;
}

export function Math({ operator, isRoot }: MathProps) {
  return (
    <Condition.Container isRoot={isRoot}>
      {operator.children.map((child, index) => {
        return (
          <React.Fragment key={`${child.type}-${index}`}>
            {index !== 0 && (
              <Condition.Item className="px-4" isRoot={isRoot}>
                <MathOperator operatorType={operator.type} />
              </Condition.Item>
            )}
            <Condition.Item isRoot={isRoot}>
              <Formula formula={child} />
            </Condition.Item>
          </React.Fragment>
        );
      })}
    </Condition.Container>
  );
}

// Function instead of obejct mapping to handle possible translation (ex: "IS IN" operator)
function useGetOperatorLabel() {
  const { t } = useTranslation(scenarioI18n);

  return useCallback(
    (type: MathOperatorType['type']) => {
      switch (type) {
        case 'EQUAL_BOOL':
        case 'EQUAL_FLOAT':
        case 'EQUAL_STRING':
          return '=';
        // case 'NOT_EQUAL_BOOL':
        //   return '≠';
        case 'AND':
        case 'PRODUCT_FLOAT':
          return '×';
        case 'OR':
        case 'SUM_FLOAT':
          return '+';
        case 'SUBTRACT_FLOAT':
          return '−';
        case 'DIVIDE_FLOAT':
          return '÷';
        // case "GREATER":
        //   return '>';
        // case "GREATER_EQUAL":
        //   return '≥';
        // case "LOWER":
        //   return '<';
        // case "LOWER_EQUAL":
        //   return '≤';
        case 'STRING_IS_IN_LIST':
          return t('scenarios:operator.is_in');
        default:
          assertNever('unknwon Math operator :', type);
      }
    },
    [t]
  );
}

function MathOperator({
  operatorType,
}: {
  operatorType: MathOperatorType['type'];
}) {
  const getOperatorLabel = useGetOperatorLabel();
  return (
    <span className="text-grey-100 font-semibold">
      {getOperatorLabel(operatorType)}
    </span>
  );
}