import type { SanitizedJqlQuery } from './sanitizedJqlQuery.js';

/** The sanitized JQL queries for the given account IDs. */
export interface SanitizedJqlQueries {
  /** The list of sanitized JQL queries. */
  queries?: SanitizedJqlQuery[];
}
