import type { EntityProperty } from './entityProperty.js';
import type { Fields } from './fields.js';
import type { HistoryMetadata } from './historyMetadata.js';
import type { IssueTransition } from './issueTransition.js';

/** Details of an issue update request. */
export interface IssueUpdateDetails {
  /**
   * List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field
   * provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are
   * required, use `update`. Fields included in here cannot be included in `update`.
   */
  fields?: Partial<Fields> | any;
  historyMetadata?: HistoryMetadata;
  /** Details of issue properties to be added or update. */
  properties?: EntityProperty[];
  transition?: IssueTransition;
  /**
   * A Map containing the field name and a list of operations to perform on the issue screen field. Note that fields
   * included in here cannot be included in `fields`.
   */
  update?: {};
}
