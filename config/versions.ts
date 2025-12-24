export const DOCS_VERSIONS = ['v1.1.0', 'v1.0.0'];
export const DEFAULT_VERSION = 'v1.1.0';

export interface VersionInfo {
    version: string;
    label: string;
    isLatest?: boolean;
}

export const VERSIONS_INFO: VersionInfo[] = [
    { version: 'v1.1.0', label: 'v1.1.0', isLatest: true },
    { version: 'v1.0.0', label: 'v1.0.0' }
];
