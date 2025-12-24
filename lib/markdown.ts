import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { DEFAULT_VERSION } from '@/config/versions';

const docsDirectory = path.join(process.cwd(), 'content/docs');

export interface DocMetadata {
  title: string;
  description?: string;
  category?: string;
  relatedMethods?: string[];
  [key: string]: any;
}

export interface DocContent {
  id: string;
  metadata: DocMetadata;
  content: string;
}

/**
 * Get all document IDs from the docs directory for a specific version
 */
export function getAllDocIds(version: string = DEFAULT_VERSION): string[] {
  try {
    const versionDirectory = path.join(docsDirectory, version);
    if (!fs.existsSync(versionDirectory)) return [];

    const fileNames = fs.readdirSync(versionDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    return [];
  }
}

/**
 * Get document content by ID
 */
export function getDocById(id: string, version: string = DEFAULT_VERSION): DocContent | null {
  try {
    const fullPath = path.join(docsDirectory, version, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      id,
      metadata: data as DocMetadata,
      content,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Get all documents
 */
export function getAllDocs(version: string = DEFAULT_VERSION): DocContent[] {
  const ids = getAllDocIds(version);
  return ids
    .map(id => getDocById(id, version))
    .filter((doc): doc is DocContent => doc !== null);
}

/**
 * Check if a document exists
 */
export function docExists(id: string, version: string = DEFAULT_VERSION): boolean {
  try {
    const fullPath = path.join(docsDirectory, version, `${id}.md`);
    return fs.existsSync(fullPath);
  } catch (error) {
    return false;
  }
}
