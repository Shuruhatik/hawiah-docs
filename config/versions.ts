export const DOCS_VERSIONS = ['v1.1.1', 'v1.0.0'];
export const DEFAULT_VERSION = 'v1.1.1';

export interface VersionInfo {
    version: string;
    label: string;
    isLatest?: boolean;
}

export const VERSIONS_INFO: VersionInfo[] = [
    { version: 'v1.1.1', label: 'v1.1.1', isLatest: true },
    { version: 'v1.0.0', label: 'v1.0.0' }
];
