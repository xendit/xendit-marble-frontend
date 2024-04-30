import {
  type DataModel,
  type DataModelField,
  type LinkToSingle,
  type TableModel,
} from '@app-builder/models';
import * as R from 'remeda';

interface FieldPivot {
  type: 'field';
  baseTableId: string;
  fieldId: string;
  id: string;
  displayValue: string;
}

function adaptFieldPivot({
  baseTableId,
  field,
}: {
  baseTableId: string;
  field: DataModelField;
}): FieldPivot {
  return {
    type: 'field',
    baseTableId,
    fieldId: field.id,
    id: field.id,
    displayValue: field.name,
  };
}

interface LinkPivot {
  type: 'link';
  baseTableId: string;
  pathLinkIds: string[];
  id: string;
  displayValue: string;
}

function adaptLinkPivot({
  baseTableId,
  pathLinks,
}: {
  baseTableId: string;
  pathLinks: LinkToSingle[];
}): LinkPivot {
  const pathLinkIds = pathLinks.map((link) => link.id);
  return {
    type: 'link',
    baseTableId,
    pathLinkIds,
    id: pathLinkIds.join('.'),
    displayValue: pathLinks.map((link) => link.name).join('.'),
  };
}

export type Pivot = FieldPivot | LinkPivot;

export function getPivotOptions(
  tableModel: TableModel,
  dataModel: DataModel,
): Pivot[] {
  const fieldsPivots = getFieldPivotOptions(tableModel);

  const tablesMap = new Map(dataModel.map((table) => [table.id, table]));

  const linkedPivots = getLinkPivotOptions(tableModel.linksToSingle, {
    baseTableId: tableModel.id,
    tablesMap,
  });

  return [...fieldsPivots, ...linkedPivots];
}

function getFieldPivotOptions(tableModel: TableModel): FieldPivot[] {
  return R.pipe(
    tableModel.fields,
    // Only allow pivots on string fields
    R.filter((field) => field.dataType === 'String'),
    R.map((field) => adaptFieldPivot({ baseTableId: tableModel.id, field })),
  );
}

function getLinkPivotOptions(
  linksToSingle: LinkToSingle[],
  config: {
    baseTableId: string;
    tablesMap: Map<string, TableModel>;
  },
  previousPathLinks: LinkToSingle[] = [],
  depth = 0,
): LinkPivot[] {
  if (depth > 10) {
    return [];
  }

  return R.pipe(
    linksToSingle,
    R.filter((link) => {
      // Skip links that are already in the path, to avoid infinite recursion (based on the backend logic)
      // This may remove some allowed loops, but it's better than infinite recursion
      return previousPathLinks.find(({ id }) => id === link.id) === undefined;
    }),
    R.map((link) => {
      const parentTable = config.tablesMap.get(link.parentTableId);
      if (!parentTable) return null;
      const parentField = parentTable.fields.find(
        (field) => field.id === link.parentFieldId,
      );
      if (!parentField) return null;
      return {
        parentTable,
        parentField,
        link,
      };
    }),
    R.filter(R.isDefined),
    R.flatMap(({ parentTable, parentField, link }) => {
      const pathLinks = previousPathLinks.concat(link);
      const pivot: LinkPivot = adaptLinkPivot({
        baseTableId: config.baseTableId,
        pathLinks,
      });

      const pivots: LinkPivot[] = [];

      // Only allow pivots on string fields
      if (parentField.dataType === 'String') {
        pivots.push(pivot);
      }

      return pivots.concat(
        getLinkPivotOptions(
          parentTable.linksToSingle,
          config,
          pathLinks,
          depth + 1,
        ),
      );
    }),
  );
}