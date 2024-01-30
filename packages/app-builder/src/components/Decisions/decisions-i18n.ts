import { type Namespace } from 'i18next';

import { filtersI18n } from '../Filters/filters-i18n';

export const decisionsI18n = [
  'decisions',
  'common',
  ...filtersI18n,
] satisfies Namespace;
