import type { ConnectWorkflowTransitionRule } from './connectWorkflowTransitionRule.js';
import type { WorkflowId } from './workflowId.js';

/** A workflow with transition rules. */
export interface WorkflowTransitionRules {
  workflowId: WorkflowId;
  /** The list of post functions within the workflow. */
  postFunctions: ConnectWorkflowTransitionRule[];
  /** The list of conditions within the workflow. */
  conditions: ConnectWorkflowTransitionRule[];
  /** The list of validators within the workflow. */
  validators: ConnectWorkflowTransitionRule[];
}
