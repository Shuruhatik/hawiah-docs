// Complete search index with all content from documentation
export interface SearchItem {
  id: string;
  label: string;
  category: string;
  description: string;
  content: string; // Full searchable content
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  {
    id: 'installation',
    label: 'Installation',
    category: 'Getting Started',
    description: 'Install Hawiah via npm, yarn, or pnpm',
    content: 'Installation Get started with Hawiah by installing it via your preferred package manager npm install hawiah yarn add hawiah pnpm add hawiah package manager node nodejs',
    keywords: ['install', 'npm', 'yarn', 'pnpm', 'setup', 'getting started', 'package']
  },
  {
    id: 'quick-start',
    label: 'Quick Start',
    category: 'Getting Started',
    description: 'Get started with Hawiah in 5 minutes',
    content: 'Quick Start Learn the basics of Hawiah in under 5 minutes Initialize import Hawiah driver mongodb mysql postgres sqlite connection host port database connect Insert a record insert name Ahmed role Admin Query records get Update records update Delete records remove basic usage tutorial guide',
    keywords: ['quick', 'start', 'tutorial', 'guide', 'basics', 'example', 'demo']
  },
  {
    id: 'connect',
    label: 'connect()',
    category: 'Connection',
    description: 'Establish database connection',
    content: 'connect() Establishes a connection to the database using the configured driver Promise void await db.connect() console.log Connected to database connection establish open start initialize',
    keywords: ['connect', 'connection', 'establish', 'open', 'start', 'database']
  },
  {
    id: 'disconnect',
    label: 'disconnect()',
    category: 'Connection',
    description: 'Close database connection',
    content: 'disconnect() Closes the active database connection and releases resources Promise void await db.disconnect() console.log Disconnected from database close end terminate shutdown',
    keywords: ['disconnect', 'close', 'end', 'terminate', 'shutdown', 'connection']
  },
  {
    id: 'isActive',
    label: 'isActive()',
    category: 'Connection',
    description: 'Check if connection is active',
    content: 'isActive() Checks whether the database connection is currently active boolean if db.isActive() console.log Database is connected else await db.connect() check status active connected',
    keywords: ['isActive', 'check', 'status', 'active', 'connected', 'connection']
  },
  {
    id: 'insert',
    label: 'insert()',
    category: 'CRUD: Writing',
    description: 'Insert a new record',
    content: 'insert() Adds a new record to the database insert data object Promise Data data object The record to insert Insert a user const user await db.insert name Ahmed email ahmed@example.com role Admin active true console.log user _id name The inserted record with generated ID add create new save write',
    keywords: ['insert', 'add', 'create', 'new', 'save', 'write', 'record', 'document']
  },
  {
    id: 'insertMany',
    label: 'insertMany()',
    category: 'CRUD: Writing',
    description: 'Insert multiple records',
    content: 'insertMany() Inserts multiple records into the database in a single operation insertMany dataArray Data[] Promise Data[] dataArray object[] Array of records to insert const users await db.insertMany name Ahmed role Admin name Sara role User name Omar role Moderator console.log users.length 3 Array of inserted records with generated IDs bulk insert multiple batch',
    keywords: ['insertMany', 'bulk', 'multiple', 'batch', 'array', 'many', 'insert']
  },
  {
    id: 'save',
    label: 'save()',
    category: 'CRUD: Writing',
    description: 'Upsert a record',
    content: 'save() Upsert operation updates existing record if found otherwise inserts a new one save query Query data Data Promise Data query object Query to find existing record data object Data to save Will update if user exists insert if not const user await db.save email ahmed@example.com name Ahmed email ahmed@example.com role Admin The saved record upsert update insert',
    keywords: ['save', 'upsert', 'update', 'insert', 'merge', 'replace']
  },
  {
    id: 'get',
    label: 'get()',
    category: 'CRUD: Reading',
    description: 'Get multiple records',
    content: 'get() Retrieves multiple records matching the query criteria get query Query limit number Promise Data[] query object Query criteria optional limit number Maximum number of records to return optional Get all active users const activeUsers await db.get active true Get first 10 admins const admins await db.get role Admin 10 Array of matching records find search query filter',
    keywords: ['get', 'find', 'search', 'query', 'filter', 'retrieve', 'fetch', 'select']
  },
  {
    id: 'getOne',
    label: 'getOne()',
    category: 'CRUD: Reading',
    description: 'Get single record',
    content: 'getOne() Retrieves a single record matching the query criteria getOne query Query Promise Data null query object Query criteria const admin await db.getOne role Admin if admin console.log admin.name The first matching record or null find one single first',
    keywords: ['getOne', 'find', 'single', 'one', 'first', 'query']
  },
  {
    id: 'getAll',
    label: 'getAll()',
    category: 'CRUD: Reading',
    description: 'Get all records',
    content: 'getAll() Retrieves all records from the database without any filtering getAll Promise Data[] const allRecords await db.getAll() console.log Total records allRecords.length All records in the database everything fetch all',
    keywords: ['getAll', 'all', 'everything', 'fetch', 'retrieve', 'list']
  },
  {
    id: 'getById',
    label: 'getById()',
    category: 'CRUD: Reading',
    description: 'Get record by ID',
    content: 'getById() Retrieves a single record by its unique identifier getById id string number Promise Data null id string number The unique identifier const user await db.getById 507f1f77bcf86cd799439011 if user console.log user.name The record or null if not found find by id _id identifier',
    keywords: ['getById', 'id', '_id', 'identifier', 'find', 'by']
  },
  {
    id: 'getBy',
    label: 'getBy()',
    category: 'CRUD: Reading',
    description: 'Get records by field',
    content: 'getBy() Retrieves records by a specific field and value getBy field string value any Promise Data[] field string The field name to query value any The value to match const admins await db.getBy role Admin const activeUsers await db.getBy active true Array of matching records find by field where',
    keywords: ['getBy', 'field', 'where', 'find', 'by', 'filter']
  },
  {
    id: 'first',
    label: 'first()',
    category: 'CRUD: Reading',
    description: 'Get first record',
    content: 'first() Retrieves the first record from the database first Promise Data null const firstUser await db.first() console.log firstUser The first record or null oldest earliest beginning',
    keywords: ['first', 'oldest', 'earliest', 'beginning', 'initial']
  },
  {
    id: 'last',
    label: 'last()',
    category: 'CRUD: Reading',
    description: 'Get last record',
    content: 'last() Retrieves the last record from the database last Promise Data null const lastUser await db.last() console.log lastUser The last record or null newest latest recent end',
    keywords: ['last', 'newest', 'latest', 'recent', 'end', 'final']
  },
  {
    id: 'random',
    label: 'random()',
    category: 'CRUD: Reading',
    description: 'Get random records',
    content: 'random() Retrieves random records from the database random sampleSize number Promise Data[] sampleSize number Number of random records to return default 1 Get one random user const randomUser await db.random() Get 5 random users const randomUsers await db.random 5 Array of random records sample shuffle',
    keywords: ['random', 'sample', 'shuffle', 'arbitrary', 'any']
  },
  {
    id: 'paginate',
    label: 'paginate()',
    category: 'CRUD: Reading',
    description: 'Get paginated results',
    content: 'paginate() Retrieves paginated results with metadata paginate query Query page number pageSize number Promise PaginatedResult query object Query criteria optional page number Page number default 1 pageSize number Records per page default 10 const result await db.paginate active true 2 20 console.log result.data Current page records console.log result.page 2 console.log result.pageSize 20 console.log result.total Total matching records console.log result.totalPages Total pages Object with data page pageSize total and totalPages pagination limit offset skip',
    keywords: ['paginate', 'pagination', 'page', 'limit', 'offset', 'skip', 'chunk']
  },
  {
    id: 'update',
    label: 'update()',
    category: 'CRUD: Updating',
    description: 'Update multiple records',
    content: 'update() Updates all records matching the query criteria update query Query data Partial Data Promise number query object Query criteria to match records data object Fields to update Update all inactive users const count await db.update active false status suspended console.log Updated count records Number of records updated modify change edit set',
    keywords: ['update', 'modify', 'change', 'edit', 'set', 'alter', 'multiple']
  },
  {
    id: 'updateOne',
    label: 'updateOne()',
    category: 'CRUD: Updating',
    description: 'Update single record',
    content: 'updateOne() Updates the first record matching the query criteria updateOne query Query data Partial Data Promise Data null query object Query criteria data object Fields to update const user await db.updateOne email ahmed@example.com lastLogin new Date() console.log user The updated record or null modify change edit single one',
    keywords: ['updateOne', 'update', 'modify', 'change', 'single', 'one', 'first']
  },
  {
    id: 'updateById',
    label: 'updateById()',
    category: 'CRUD: Updating',
    description: 'Update record by ID',
    content: 'updateById() Updates a record by its unique identifier updateById id string number data Partial Data Promise Data null id string number The unique identifier data object Fields to update const user await db.updateById 507f1f77bcf86cd799439011 role Admin verified true The updated record or null modify by id _id',
    keywords: ['updateById', 'update', 'id', '_id', 'modify', 'by']
  },
  {
    id: 'remove',
    label: 'remove()',
    category: 'CRUD: Deleting',
    description: 'Delete multiple records',
    content: 'remove() Deletes all records matching the query criteria remove query Query Promise number query object Query criteria to match records Delete all inactive users const count await db.remove active false console.log Deleted count records Number of records deleted delete destroy drop multiple',
    keywords: ['remove', 'delete', 'destroy', 'drop', 'erase', 'multiple']
  },
  {
    id: 'removeOne',
    label: 'removeOne()',
    category: 'CRUD: Deleting',
    description: 'Delete single record',
    content: 'removeOne() Deletes the first record matching the query criteria removeOne query Query Promise Data null query object Query criteria const deleted await db.removeOne email test@example.com if deleted console.log User deleted deleted.name The deleted record or null delete destroy single one',
    keywords: ['removeOne', 'delete', 'destroy', 'single', 'one', 'first']
  },
  {
    id: 'removeById',
    label: 'removeById()',
    category: 'CRUD: Deleting',
    description: 'Delete record by ID',
    content: 'removeById() Deletes a record by its unique identifier removeById id string number Promise Data null id string number The unique identifier const deleted await db.removeById 507f1f77bcf86cd799439011 console.log Deleted deleted The deleted record or null delete by id _id',
    keywords: ['removeById', 'delete', 'destroy', 'id', '_id', 'by']
  },
  {
    id: 'clear',
    label: 'clear()',
    category: 'CRUD: Deleting',
    description: 'Delete all records',
    content: 'clear() Removes all records from the database Use with caution clear Promise number Delete all records const count await db.clear() console.log Cleared count records Number of records deleted truncate empty purge drop all',
    keywords: ['clear', 'truncate', 'empty', 'purge', 'drop', 'all', 'delete']
  },
  {
    id: 'push',
    label: 'push()',
    category: 'Array Operations',
    description: 'Append to array field',
    content: 'push() Appends a value to an array field in matching records push query Query field string value any Promise number query object Query criteria field string Array field name value any Value to append Add a tag to user tags array await db.push _id userId tags premium Number of records updated append add array',
    keywords: ['push', 'append', 'add', 'array', 'list', 'insert']
  },
  {
    id: 'pull',
    label: 'pull()',
    category: 'Array Operations',
    description: 'Remove from array field',
    content: 'pull() Removes a value from an array field in matching records pull query Query field string value any Promise number query object Query criteria field string Array field name value any Value to remove Remove a tag from user tags array await db.pull _id userId tags trial Number of records updated remove delete array',
    keywords: ['pull', 'remove', 'delete', 'array', 'list', 'extract']
  },
  {
    id: 'shift',
    label: 'shift()',
    category: 'Array Operations',
    description: 'Remove first array element',
    content: 'shift() Removes and returns the first element from an array field shift query Query field string Promise any query object Query criteria field string Array field name Remove first item from queue const firstItem await db.shift _id queueId items The removed element array first dequeue',
    keywords: ['shift', 'remove', 'first', 'array', 'dequeue', 'pop']
  },
  {
    id: 'unshift',
    label: 'unshift()',
    category: 'Array Operations',
    description: 'Prepend to array field',
    content: 'unshift() Prepends a value to the beginning of an array field unshift query Query field string value any Promise number query object Query criteria field string Array field name value any Value to prepend Add item to beginning of queue await db.unshift _id queueId items priority high task urgent Number of records updated prepend add beginning array',
    keywords: ['unshift', 'prepend', 'add', 'beginning', 'array', 'first']
  },
  {
    id: 'pop',
    label: 'pop()',
    category: 'Array Operations',
    description: 'Remove last array element',
    content: 'pop() Removes and returns the last element from an array field pop query Query field string Promise any query object Query criteria field string Array field name Remove last item from stack const lastItem await db.pop _id stackId items The removed element array last',
    keywords: ['pop', 'remove', 'last', 'array', 'end', 'extract']
  },
  {
    id: 'increment',
    label: 'increment()',
    category: 'Math Operations',
    description: 'Increment numeric field',
    content: 'increment() Increments a numeric field by a specified amount increment query Query field string amount number Promise number query object Query criteria field string Numeric field name amount number Amount to increment default 1 Increment by 1 await db.increment _id userId loginCount Increment by custom amount await db.increment _id userId points 50 Number of records updated increase add plus math',
    keywords: ['increment', 'increase', 'add', 'plus', 'math', 'number', 'counter']
  },
  {
    id: 'decrement',
    label: 'decrement()',
    category: 'Math Operations',
    description: 'Decrement numeric field',
    content: 'decrement() Decrements a numeric field by a specified amount decrement query Query field string amount number Promise number query object Query criteria field string Numeric field name amount number Amount to decrement default 1 Decrease stock quantity await db.decrement sku PROD-123 stock 5 Number of records updated decrease subtract minus math',
    keywords: ['decrement', 'decrease', 'subtract', 'minus', 'math', 'number', 'reduce']
  },
  {
    id: 'sum',
    label: 'sum()',
    category: 'Math Operations',
    description: 'Calculate sum of field',
    content: 'sum() Calculates the sum of a numeric field across matching records sum query Query field string Promise number query object Query criteria field string Numeric field to sum Calculate total revenue const totalRevenue await db.sum status completed amount console.log Total totalRevenue Sum of the field values total aggregate math',
    keywords: ['sum', 'total', 'aggregate', 'calculate', 'math', 'add', 'count']
  },
  {
    id: 'rename',
    label: 'rename()',
    category: 'Field Operations',
    description: 'Rename a field',
    content: 'rename() Renames a field in matching records rename query Query oldField string newField string Promise number query object Query criteria oldField string Current field name newField string New field name Rename username to displayName await db.rename type user username displayName Number of records updated change field name',
    keywords: ['rename', 'change', 'field', 'name', 'alter', 'modify']
  },
  {
    id: 'unset',
    label: 'unset()',
    category: 'Field Operations',
    description: 'Remove a field',
    content: 'unset() Removes a field from matching records unset query Query field string Promise number query object Query criteria field string Field name to remove Remove temporary field await db.unset status completed tempData Number of records updated delete remove field',
    keywords: ['unset', 'remove', 'delete', 'field', 'drop', 'clear']
  },
  {
    id: 'count',
    label: 'count()',
    category: 'Utility Methods',
    description: 'Count matching records',
    content: 'count() Counts the number of records matching the query criteria count query Query Promise number query object Query criteria optional Count all records const total await db.count() Count with query const activeUsers await db.count active true Number of matching records total length size',
    keywords: ['count', 'total', 'length', 'size', 'number', 'how many']
  },
  {
    id: 'has',
    label: 'has()',
    category: 'Utility Methods',
    description: 'Check if records exist',
    content: 'has() Checks if any records match the query criteria has query Query Promise boolean query object Query criteria const hasAdmin await db.has role Admin if !hasAdmin console.log No admin users found True if at least one record matches exists check boolean',
    keywords: ['has', 'exists', 'check', 'boolean', 'any', 'contains']
  },
  {
    id: 'sort',
    label: 'sort()',
    category: 'Utility Methods',
    description: 'Sort records by field',
    content: 'sort() Retrieves records sorted by a specific field sort field string order asc desc Promise Data[] field string Field name to sort by order asc desc Sort order default asc Sort ascending const users await db.sort name Sort descending const recentUsers await db.sort createdAt desc Sorted array of records order by arrange',
    keywords: ['sort', 'order', 'arrange', 'asc', 'desc', 'ascending', 'descending']
  },
  {
    id: 'select',
    label: 'select()',
    category: 'Utility Methods',
    description: 'Select specific fields',
    content: 'select() Retrieves records with only specified fields included select query Query fields string[] Promise Data[] query object Query criteria fields string[] Array of field names to include Get only name and email fields const users await db.select active true name email console.log users[0] name email Array of records with selected fields projection pick choose',
    keywords: ['select', 'fields', 'projection', 'pick', 'choose', 'columns']
  },
  {
    id: 'unique',
    label: 'unique()',
    category: 'Utility Methods',
    description: 'Get unique field values',
    content: 'unique() Retrieves unique values for a specific field unique field string Promise any[] field string Field name to get unique values from Get all unique roles const roles await db.unique role console.log roles Admin User Moderator Get all unique countries const countries await db.unique country Array of unique values distinct different',
    keywords: ['unique', 'distinct', 'different', 'values', 'deduplicate']
  },
  {
    id: 'group',
    label: 'group()',
    category: 'Utility Methods',
    description: 'Group records by field',
    content: 'group() Groups records by a specific field and returns grouped results group field string Promise Record string Data[] field string Field name to group by Group users by role const grouped await db.group role console.log grouped Admin name Ahmed role Admin User name Sara role User aggregate groupby',
    keywords: ['group', 'groupby', 'aggregate', 'organize', 'categorize']
  }
];

export interface SearchResult extends SearchItem {
  score: number;
  matchedSnippet?: string;
  highlightedLabel?: string;
}

// Extract snippet around matched text
function extractSnippet(text: string, searchTerm: string, maxLength: number = 100): string {
  const lowerText = text.toLowerCase();
  const lowerTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerTerm);
  
  if (index === -1) return '';
  
  // Find sentence boundaries
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + searchTerm.length + 60);
  
  let snippet = text.substring(start, end);
  
  // Add ellipsis if needed
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return snippet.trim();
}

// Highlight matched terms in text
export function highlightText(text: string, searchTerms: string[]): string {
  let result = text;
  
  searchTerms.forEach(term => {
    if (term.length < 2) return;
    
    const regex = new RegExp(`(${term})`, 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  });
  
  return result;
}

// Advanced search function
export function searchDocumentation(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  
  return searchIndex
    .map(item => {
      let score = 0;
      let matchedSnippet = '';
      const lowerLabel = item.label.toLowerCase();
      const lowerDescription = item.description.toLowerCase();
      const lowerContent = item.content.toLowerCase();
      const lowerCategory = item.category.toLowerCase();
      
      searchTerms.forEach(term => {
        // Exact match in label (highest priority)
        if (lowerLabel === term) {
          score += 100;
          matchedSnippet = item.description;
        } else if (lowerLabel.includes(term)) {
          score += 50;
          matchedSnippet = item.description;
        }
        
        // Match in keywords
        if (item.keywords.some(k => k.includes(term))) {
          score += 30;
          if (!matchedSnippet) {
            const matchedKeyword = item.keywords.find(k => k.includes(term));
            matchedSnippet = `Related to: ${matchedKeyword}`;
          }
        }
        
        // Match in description
        if (lowerDescription.includes(term)) {
          score += 20;
          if (!matchedSnippet) {
            matchedSnippet = item.description;
          }
        }
        
        // Match in category
        if (lowerCategory.includes(term)) {
          score += 15;
        }
        
        // Match in full content
        if (lowerContent.includes(term)) {
          score += 10;
          if (!matchedSnippet) {
            matchedSnippet = extractSnippet(item.content, term);
          }
        }
      });
      
      // Highlight the label
      const highlightedLabel = highlightText(item.label, searchTerms);
      
      return { 
        ...item, 
        score,
        matchedSnippet: matchedSnippet || item.description,
        highlightedLabel
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}
