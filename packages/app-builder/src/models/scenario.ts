import {
  type ScenarioCreateInputDto,
  type ScenarioDto,
  type ScenarioUpdateInputDto,
} from 'marble-api';
import * as z from 'zod';

import { type Outcome, outcomeSchema } from './outcome';

type DecisionToCaseWorkflowType =
  | 'DISABLED'
  | 'CREATE_CASE'
  | 'ADD_TO_CASE_IF_POSSIBLE';

export interface Scenario {
  id: string;
  createdAt: string;
  decisionToCaseInboxId?: string;
  decisionToCaseOutcomes: Outcome[];
  decisionToCaseWorkflowType: DecisionToCaseWorkflowType;
  description: string;
  liveVersionId?: string;
  name: string;
  organizationId: string;
  triggerObjectType: string;
}

export function adaptScenario(dto: ScenarioDto): Scenario {
  return {
    id: dto.id,
    createdAt: dto.created_at,
    decisionToCaseInboxId: dto.decision_to_case_inbox_id,
    decisionToCaseOutcomes: dto.decision_to_case_outcomes,
    decisionToCaseWorkflowType: dto.decision_to_case_workflow_type,
    description: dto.description,
    liveVersionId: dto.live_version_id,
    name: dto.name,
    organizationId: dto.organization_id,
    triggerObjectType: dto.trigger_object_type,
  };
}

export interface ScenarioCreateInput {
  name: string;
  description: string | null;
  triggerObjectType: string;
}

export function adaptScenarioCreateInputDto(
  input: ScenarioCreateInput,
): ScenarioCreateInputDto {
  return {
    name: input.name,
    description: input.description ?? '',
    trigger_object_type: input.triggerObjectType,
  };
}

export const scenarioUpdateWorkflowInputSchema = z.discriminatedUnion(
  'decisionToCaseWorkflowType',
  [
    z.object({
      decisionToCaseWorkflowType: z.literal('CREATE_CASE'),
      decisionToCaseInboxId: z.string(),
      decisionToCaseOutcomes: z.array(outcomeSchema),
    }),
    z.object({
      decisionToCaseWorkflowType: z.literal('ADD_TO_CASE_IF_POSSIBLE'),
      decisionToCaseInboxId: z.string(),
      decisionToCaseOutcomes: z.array(outcomeSchema),
    }),
    z.object({
      decisionToCaseWorkflowType: z.literal('DISABLED'),
    }),
  ],
);

export type ScenarioUpdateWorkflowInput = z.infer<
  typeof scenarioUpdateWorkflowInputSchema
>;

export function adaptScenarioUpdateInputDto(
  input: ScenarioUpdateWorkflowInput,
): ScenarioUpdateInputDto {
  if (input.decisionToCaseWorkflowType === 'DISABLED') {
    return {
      decision_to_case_workflow_type: 'DISABLED',
    };
  }
  return {
    decision_to_case_inbox_id: input.decisionToCaseInboxId,
    decision_to_case_outcomes: input.decisionToCaseOutcomes,
    decision_to_case_workflow_type: input.decisionToCaseWorkflowType,
  };
}
