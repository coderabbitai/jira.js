import type { Fields } from './fields.js';
import type { IncludedFields } from './includedFields.js';
import type { IssueTransition } from './issueTransition.js';
import type { IssueUpdateMetadata } from './issueUpdateMetadata.js';
import type { Operations } from './operations.js';
import type { PageOfChangelogs } from './pageOfChangelogs.js';

/** Details about an issue. */
export interface Issue {
  /** Expand options that include additional issue details in the response. */
  expand?: string;
  /** The ID of the issue. */
  id: string;
  /** The URL of the issue details. */
  self?: string;
  /** The key of the issue. */
  key: string;
  /** The rendered value of each field present on the issue. */
  renderedFields?: Fields;
  /** Details of the issue properties identified in the request. */
  properties?: {};
  /** The ID and name of each field present on the issue. */
  names?: Record<string, string>;
  /** The schema describing each field present on the issue. */
  schema?: {};
  /** The transitions that can be performed on the issue. */
  transitions?: IssueTransition[];
  operations?: Operations;
  editmeta?: IssueUpdateMetadata;
  changelog?: PageOfChangelogs;
  /** The versions of each field on the issue. */
  versionedRepresentations?: {};
  fieldsToInclude?: IncludedFields;
  fields: Fields;
}
