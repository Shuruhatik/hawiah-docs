import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
 * Get all document IDs from the docs directory
 */
export function getAllDocIds(): string[] {
  try {
    const fileNames = fs.readdirSync(docsDirectory);
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
export function getDocById(id: string): DocContent | null {
  try {
    const fullPath = path.join(docsDirectory, `${id}.md`);
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
export function getAllDocs(): DocContent[] {
  const ids = getAllDocIds();
  return ids
    .map(id => getDocById(id))
    .filter((doc): doc is DocContent => doc !== null);
}

/**
 * Check if a document exists
 */
export function docExists(id: string): boolean {
  try {
    const fullPath = path.join(docsDirectory, `${id}.md`);
    return fs.existsSync(fullPath);
  } catch (error) {
    return false;
  }
}
