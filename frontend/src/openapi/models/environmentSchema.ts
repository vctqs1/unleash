/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */

export interface EnvironmentSchema {
    name: string;
    type: string;
    enabled: boolean;
    protected?: boolean;
    sortOrder?: number;
    projectCount?: number | null;
    apiTokenCount?: number | null;
    enabledToggleCount?: number | null;
}
