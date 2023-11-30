import { EditCaseName } from '@app-builder/routes/ressources/cases/edit-name';
import { formatDateTime } from '@app-builder/utils/format';
import { type Case } from 'marble-api';
import { useTranslation } from 'react-i18next';
import { Collapsible } from 'ui-design-system';

import { casesI18n } from './cases-i18n';

export function CaseInformation({
  caseDetail: { created_at, name, id },
}: {
  caseDetail: Case;
}) {
  const {
    t,
    i18n: { language },
  } = useTranslation(casesI18n);

  return (
    <Collapsible.Container>
      <Collapsible.Title>
        {t('cases:case_detail.informations')}
      </Collapsible.Title>
      <Collapsible.Content>
        <div className="grid grid-cols-[max-content_1fr] grid-rows-2 items-center gap-x-10 gap-y-2">
          <CaseLabel>{t('cases:case.name')}</CaseLabel>
          <EditCaseName caseId={id} name={name} />
          <CaseLabel>{t('cases:case.date')}</CaseLabel>
          <div>
            {formatDateTime(created_at, { language, timeStyle: undefined })}
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Container>
  );
}

const CaseLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="font-semibold capitalize">{children}</div>
);
