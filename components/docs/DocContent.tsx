import DocSection from './DocSection';
import CodeBlock from './CodeBlock';

interface DocContentProps {
  activeSection: string;
}

export default function DocContent({ activeSection }: DocContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'installation':
        return <InstallationSection />;
      case 'quick-start':
        return <QuickStartSection />;
      case 'connect':
        return <ConnectSection />;
      case 'disconnect':
        return <DisconnectSection />;
      case 'isActive':
        return <IsActiveSection />;
      case 'insert':
        return <InsertSection />;
      case 'insertMany':
        return <InsertManySection />;
      case 'save':
        return <SaveSection />;
      case 'get':
        return <GetSection />;
      case 'getOne':
        return <GetOneSection />;
      case 'getAll':
        return <GetAllSection />;
      case 'getById':
        return <GetByIdSection />;
      case 'getBy':
        return <GetBySection />;
      case 'first':
        return <FirstSection />;
      case 'last':
        return <LastSection />;
      case 'random':
        return <RandomSection />;
      case 'paginate':
        return <PaginateSection />;
      case 'update':
        return <UpdateSection />;
      case 'updateOne':
        return <UpdateOneSection />;
      case 'updateById':
        return <UpdateByIdSection />;
      case 'remove':
        return <RemoveSection />;
      case 'removeOne':
        return <RemoveOneSection />;
      case 'removeById':
        return <RemoveByIdSection />;
      case 'clear':
        return <ClearSection />;
      case 'push':
        return <PushSection />;
      case 'pull':
        return <PullSection />;
      case 'shift':
        return <ShiftSection />;
      case 'unshift':
        return <UnshiftSection />;
      case 'pop':
        return <PopSection />;
      case 'increment':
        return <IncrementSection />;
      case 'decrement':
        return <DecrementSection />;
      case 'sum':
        return <SumSection />;
      case 'rename':
        return <RenameSection />;
      case 'unset':
        return <UnsetSection />;
      case 'count':
        return <CountSection />;
      case 'has':
        return <HasSection />;
      case 'sort':
        return <SortSection />;
      case 'select':
        return <SelectSection />;
      case 'unique':
        return <UniqueSection />;
      case 'group':
        return <GroupSection />;
      default:
        return <InstallationSection />;
    }
  };

  return <div>{renderContent()}</div>;
}

// Section Components
function InstallationSection() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">Installation</h1>
      <p className="text-gray-400 text-lg mb-8">
        Get started with Hawiah by installing it via your preferred package manager.
      </p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">NPM</h3>
          <CodeBlock code="npm install hawiah" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Yarn</h3>
          <CodeBlock code="yarn add hawiah" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">PNPM</h3>
          <CodeBlock code="pnpm add hawiah" />
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  const initCode = `import { Hawiah } from 'hawiah';

// Initialize with your preferred driver
const db = new Hawiah({
  driver: 'mongodb', // or 'mysql', 'postgres', 'sqlite', etc.
  connection: {
    host: 'localhost',
    port: 27017,
    database: 'myapp'
  }
});

// Connect to database
await db.connect();`;

  const basicUsageCode = `// Insert a record
await db.insert({ name: 'Ahmed', role: 'Admin' });

// Query records
const users = await db.get({ role: 'Admin' });

// Update records
await db.update({ name: 'Ahmed' }, { active: true });

// Delete records
await db.remove({ active: false });`;

  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">Quick Start</h1>
      <p className="text-gray-400 text-lg mb-8">
        Learn the basics of Hawiah in under 5 minutes.
      </p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Initialize</h3>
          <CodeBlock code={initCode} />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
          <CodeBlock code={basicUsageCode} />
        </div>
      </div>
    </section>
  );
}

function ConnectSection() {
  return (
    <DocSection
      title="db.connect()"
      description="Establishes a connection to the database using the configured driver."
      signature="connect(): Promise<void>"
      examples={[
        {
          code: `const db = new Hawiah({ driver: 'mongodb', connection: {...} });
await db.connect();
console.log('Connected to database');`
        }
      ]}
      returnValue="Promise<void>"
    />
  );
}

function DisconnectSection() {
  return (
    <DocSection
      title="db.disconnect()"
      description="Closes the active database connection and releases resources."
      signature="disconnect(): Promise<void>"
      examples={[
        {
          code: `await db.disconnect();
console.log('Disconnected from database');`
        }
      ]}
      returnValue="Promise<void>"
    />
  );
}

function IsActiveSection() {
  return (
    <DocSection
      title="db.isActive()"
      description="Checks whether the database connection is currently active."
      signature="isActive(): boolean"
      examples={[
        {
          code: `if (db.isActive()) {
  console.log('Database is connected');
} else {
  await db.connect();
}`
        }
      ]}
      returnValue="boolean"
    />
  );
}

function InsertSection() {
  return (
    <DocSection
      title="db.insert()"
      description="Adds a new record to the database."
      signature="insert(data: Data): Promise<Data>"
      parameters={[
        { name: 'data', type: 'object', description: 'The record to insert' }
      ]}
      examples={[
        {
          title: 'Insert a user',
          code: `const user = await db.insert({
  name: 'Ahmed',
  email: 'ahmed@example.com',
  role: 'Admin',
  active: true
});

console.log(user); // { _id: '...', name: 'Ahmed', ... }`
        }
      ]}
      returnValue="Promise<Data> - The inserted record with generated ID"
    />
  );
}

function InsertManySection() {
  return (
    <DocSection
      title="db.insertMany()"
      description="Inserts multiple records into the database in a single operation."
      signature="insertMany(dataArray: Data[]): Promise<Data[]>"
      parameters={[
        { name: 'dataArray', type: 'object[]', description: 'Array of records to insert' }
      ]}
      examples={[
        {
          code: `const users = await db.insertMany([
  { name: 'Ahmed', role: 'Admin' },
  { name: 'Sara', role: 'User' },
  { name: 'Omar', role: 'Moderator' }
]);

console.log(users.length); // 3`
        }
      ]}
      returnValue="Promise<Data[]> - Array of inserted records with generated IDs"
    />
  );
}

function SaveSection() {
  return (
    <DocSection
      title="db.save()"
      description="Upsert operation: updates existing record if found, otherwise inserts a new one."
      signature="save(query: Query, data: Data): Promise<Data>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query to find existing record' },
        { name: 'data', type: 'object', description: 'Data to save' }
      ]}
      examples={[
        {
          code: `// Will update if user exists, insert if not
const user = await db.save(
  { email: 'ahmed@example.com' },
  { name: 'Ahmed', email: 'ahmed@example.com', role: 'Admin' }
);`
        }
      ]}
      returnValue="Promise<Data> - The saved record"
    />
  );
}

function GetSection() {
  return (
    <DocSection
      title="db.get()"
      description="Retrieves multiple records matching the query criteria."
      signature="get(query?: Query, limit?: number): Promise<Data[]>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria (optional)' },
        { name: 'limit', type: 'number', description: 'Maximum number of records to return (optional)' }
      ]}
      examples={[
        {
          title: 'Get all active users',
          code: `const activeUsers = await db.get({ active: true });`
        },
        {
          title: 'Get first 10 admins',
          code: `const admins = await db.get({ role: 'Admin' }, 10);`
        }
      ]}
      returnValue="Promise<Data[]> - Array of matching records"
    />
  );
}

function GetOneSection() {
  return (
    <DocSection
      title="db.getOne()"
      description="Retrieves a single record matching the query criteria."
      signature="getOne(query: Query): Promise<Data | null>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' }
      ]}
      examples={[
        {
          code: `const admin = await db.getOne({ role: 'Admin' });
if (admin) {
  console.log(admin.name);
}`
        }
      ]}
      returnValue="Promise<Data | null> - The first matching record or null"
    />
  );
}

function GetAllSection() {
  return (
    <DocSection
      title="db.getAll()"
      description="Retrieves all records from the database without any filtering."
      signature="getAll(): Promise<Data[]>"
      examples={[
        {
          code: `const allRecords = await db.getAll();
console.log(\`Total records: \${allRecords.length}\`);`
        }
      ]}
      returnValue="Promise<Data[]> - All records in the database"
    />
  );
}

function GetByIdSection() {
  return (
    <DocSection
      title="db.getById()"
      description="Retrieves a single record by its unique identifier."
      signature="getById(id: string | number): Promise<Data | null>"
      parameters={[
        { name: 'id', type: 'string | number', description: 'The unique identifier' }
      ]}
      examples={[
        {
          code: `const user = await db.getById('507f1f77bcf86cd799439011');
if (user) {
  console.log(user.name);
}`
        }
      ]}
      returnValue="Promise<Data | null> - The record or null if not found"
    />
  );
}

function GetBySection() {
  return (
    <DocSection
      title="db.getBy()"
      description="Retrieves records by a specific field and value."
      signature="getBy(field: string, value: any): Promise<Data[]>"
      parameters={[
        { name: 'field', type: 'string', description: 'The field name to query' },
        { name: 'value', type: 'any', description: 'The value to match' }
      ]}
      examples={[
        {
          code: `const admins = await db.getBy('role', 'Admin');
const activeUsers = await db.getBy('active', true);`
        }
      ]}
      returnValue="Promise<Data[]> - Array of matching records"
    />
  );
}

function FirstSection() {
  return (
    <DocSection
      title="db.first()"
      description="Retrieves the first record from the database."
      signature="first(): Promise<Data | null>"
      examples={[
        {
          code: `const firstUser = await db.first();
console.log(firstUser);`
        }
      ]}
      returnValue="Promise<Data | null> - The first record or null"
    />
  );
}

function LastSection() {
  return (
    <DocSection
      title="db.last()"
      description="Retrieves the last record from the database."
      signature="last(): Promise<Data | null>"
      examples={[
        {
          code: `const lastUser = await db.last();
console.log(lastUser);`
        }
      ]}
      returnValue="Promise<Data | null> - The last record or null"
    />
  );
}

function RandomSection() {
  return (
    <DocSection
      title="db.random()"
      description="Retrieves random records from the database."
      signature="random(sampleSize?: number): Promise<Data[]>"
      parameters={[
        { name: 'sampleSize', type: 'number', description: 'Number of random records to return (default: 1)' }
      ]}
      examples={[
        {
          title: 'Get one random user',
          code: `const randomUser = await db.random();`
        },
        {
          title: 'Get 5 random users',
          code: `const randomUsers = await db.random(5);`
        }
      ]}
      returnValue="Promise<Data[]> - Array of random records"
    />
  );
}

function PaginateSection() {
  return (
    <DocSection
      title="db.paginate()"
      description="Retrieves paginated results with metadata."
      signature="paginate(query?: Query, page?: number, pageSize?: number): Promise<PaginatedResult>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria (optional)' },
        { name: 'page', type: 'number', description: 'Page number (default: 1)' },
        { name: 'pageSize', type: 'number', description: 'Records per page (default: 10)' }
      ]}
      examples={[
        {
          code: `const result = await db.paginate({ active: true }, 2, 20);

console.log(result.data);        // Current page records
console.log(result.page);        // 2
console.log(result.pageSize);    // 20
console.log(result.total);       // Total matching records
console.log(result.totalPages);  // Total pages`
        }
      ]}
      returnValue="Promise<PaginatedResult> - Object with data, page, pageSize, total, and totalPages"
    />
  );
}

function UpdateSection() {
  return (
    <DocSection
      title="db.update()"
      description="Updates all records matching the query criteria."
      signature="update(query: Query, data: Partial<Data>): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria to match records' },
        { name: 'data', type: 'object', description: 'Fields to update' }
      ]}
      examples={[
        {
          code: `// Update all inactive users
const count = await db.update(
  { active: false },
  { status: 'suspended' }
);

console.log(\`Updated \${count} records\`);`
        }
      ]}
      returnValue="Promise<number> - Number of records updated"
    />
  );
}

function UpdateOneSection() {
  return (
    <DocSection
      title="db.updateOne()"
      description="Updates the first record matching the query criteria."
      signature="updateOne(query: Query, data: Partial<Data>): Promise<Data | null>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'data', type: 'object', description: 'Fields to update' }
      ]}
      examples={[
        {
          code: `const user = await db.updateOne(
  { email: 'ahmed@example.com' },
  { lastLogin: new Date() }
);

console.log(user);`
        }
      ]}
      returnValue="Promise<Data | null> - The updated record or null"
    />
  );
}

function UpdateByIdSection() {
  return (
    <DocSection
      title="db.updateById()"
      description="Updates a record by its unique identifier."
      signature="updateById(id: string | number, data: Partial<Data>): Promise<Data | null>"
      parameters={[
        { name: 'id', type: 'string | number', description: 'The unique identifier' },
        { name: 'data', type: 'object', description: 'Fields to update' }
      ]}
      examples={[
        {
          code: `const user = await db.updateById(
  '507f1f77bcf86cd799439011',
  { role: 'Admin', verified: true }
);`
        }
      ]}
      returnValue="Promise<Data | null> - The updated record or null"
    />
  );
}

function RemoveSection() {
  return (
    <DocSection
      title="db.remove()"
      description="Deletes all records matching the query criteria."
      signature="remove(query: Query): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria to match records' }
      ]}
      examples={[
        {
          code: `// Delete all inactive users
const count = await db.remove({ active: false });
console.log(\`Deleted \${count} records\`);`
        }
      ]}
      returnValue="Promise<number> - Number of records deleted"
    />
  );
}

function RemoveOneSection() {
  return (
    <DocSection
      title="db.removeOne()"
      description="Deletes the first record matching the query criteria."
      signature="removeOne(query: Query): Promise<Data | null>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' }
      ]}
      examples={[
        {
          code: `const deleted = await db.removeOne({ email: 'test@example.com' });
if (deleted) {
  console.log('User deleted:', deleted.name);
}`
        }
      ]}
      returnValue="Promise<Data | null> - The deleted record or null"
    />
  );
}

function RemoveByIdSection() {
  return (
    <DocSection
      title="db.removeById()"
      description="Deletes a record by its unique identifier."
      signature="removeById(id: string | number): Promise<Data | null>"
      parameters={[
        { name: 'id', type: 'string | number', description: 'The unique identifier' }
      ]}
      examples={[
        {
          code: `const deleted = await db.removeById('507f1f77bcf86cd799439011');
console.log('Deleted:', deleted);`
        }
      ]}
      returnValue="Promise<Data | null> - The deleted record or null"
    />
  );
}

function ClearSection() {
  return (
    <DocSection
      title="db.clear()"
      description="Removes all records from the database. Use with caution!"
      signature="clear(): Promise<number>"
      examples={[
        {
          code: `// Delete all records
const count = await db.clear();
console.log(\`Cleared \${count} records\`);`
        }
      ]}
      returnValue="Promise<number> - Number of records deleted"
    />
  );
}

function PushSection() {
  return (
    <DocSection
      title="db.push()"
      description="Appends a value to an array field in matching records."
      signature="push(query: Query, field: string, value: any): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Array field name' },
        { name: 'value', type: 'any', description: 'Value to append' }
      ]}
      examples={[
        {
          code: `// Add a tag to user's tags array
await db.push(
  { _id: userId },
  'tags',
  'premium'
);`
        }
      ]}
      returnValue="Promise<number> - Number of records updated"
    />
  );
}

function PullSection() {
  return (
    <DocSection
      title="db.pull()"
      description="Removes a value from an array field in matching records."
      signature="pull(query: Query, field: string, value: any): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Array field name' },
        { name: 'value', type: 'any', description: 'Value to remove' }
      ]}
      examples={[
        {
          code: `// Remove a tag from user's tags array
await db.pull(
  { _id: userId },
  'tags',
  'trial'
);`
        }
      ]}
      returnValue="Promise<number> - Number of records updated"
    />
  );
}

function ShiftSection() {
  return (
    <DocSection
      title="db.shift()"
      description="Removes and returns the first element from an array field."
      signature="shift(query: Query, field: string): Promise<any>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Array field name' }
      ]}
      examples={[
        {
          code: `// Remove first item from queue
const firstItem = await db.shift(
  { _id: queueId },
  'items'
);`
        }
      ]}
      returnValue="Promise<any> - The removed element"
    />
  );
}

function UnshiftSection() {
  return (
    <DocSection
      title="db.unshift()"
      description="Prepends a value to the beginning of an array field."
      signature="unshift(query: Query, field: string, value: any): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Array field name' },
        { name: 'value', type: 'any', description: 'Value to prepend' }
      ]}
      examples={[
        {
          code: `// Add item to beginning of queue
await db.unshift(
  { _id: queueId },
  'items',
  { priority: 'high', task: 'urgent' }
);`
        }
      ]}
      returnValue="Promise<number> - Number of records updated"
    />
  );
}

function PopSection() {
  return (
    <DocSection
      title="db.pop()"
      description="Removes and returns the last element from an array field."
      signature="pop(query: Query, field: string): Promise<any>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Array field name' }
      ]}
      examples={[
        {
          code: `// Remove last item from stack
const lastItem = await db.pop(
  { _id: stackId },
  'items'
);`
        }
      ]}
      returnValue="Promise<any> - The removed element"
    />
  );
}

function IncrementSection() {
  return (
    <DocSection
      title="db.increment()"
      description="Increments a numeric field by a specified amount."
      signature="increment(query: Query, field: string, amount?: number): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Numeric field name' },
        { name: 'amount', type: 'number', description: 'Amount to increment (default: 1)' }
      ]}
      examples={[
        {
          title: 'Increment by 1',
          code: `await db.increment({ _id: userId }, 'loginCount');`
        },
        {
          title: 'Increment by custom amount',
          code: `await db.increment({ _id: userId }, 'points', 50);`
        }
      ]}
      returnValue="Promise<number> - Number of records updated"
    />
  );
}

function DecrementSection() {
  return (
    <DocSection
      title="db.decrement()"
      description="Decrements a numeric field by a specified amount."
      signature="decrement(query: Query, field: string, amount?: number): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Numeric field name' },
        { name: 'amount', type: 'number', description: 'Amount to decrement (default: 1)' }
      ]}
      examples={[
        {
          code: `// Decrease stock quantity
await db.decrement(
  { sku: 'PROD-123' },
  'stock',
  5
);`
        }
      ]}
      returnValue="Promise<number> - Number of records updated"
    />
  );
}

function SumSection() {
  return (
    <DocSection
      title="db.sum()"
      description="Calculates the sum of a numeric field across matching records."
      signature="sum(query: Query, field: string): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Numeric field to sum' }
      ]}
      examples={[
        {
          code: `// Calculate total revenue
const totalRevenue = await db.sum(
  { status: 'completed' },
  'amount'
);

console.log(\`Total: $\${totalRevenue}\`);`
        }
      ]}
      returnValue="Promise<number> - Sum of the field values"
    />
  );
}

function RenameSection() {
  return (
    <DocSection
      title="db.rename()"
      description="Renames a field in matching records."
      signature="rename(query: Query, oldField: string, newField: string): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'oldField', type: 'string', description: 'Current field name' },
        { name: 'newField', type: 'string', description: 'New field name' }
      ]}
      examples={[
        {
          code: `// Rename 'username' to 'displayName'
await db.rename(
  { type: 'user' },
  'username',
  'displayName'
);`
        }
      ]}
      returnValue="Promise<number> - Number of records updated"
    />
  );
}

function UnsetSection() {
  return (
    <DocSection
      title="db.unset()"
      description="Removes a field from matching records."
      signature="unset(query: Query, field: string): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'field', type: 'string', description: 'Field name to remove' }
      ]}
      examples={[
        {
          code: `// Remove temporary field
await db.unset(
  { status: 'completed' },
  'tempData'
);`
        }
      ]}
      returnValue="Promise<number> - Number of records updated"
    />
  );
}

function CountSection() {
  return (
    <DocSection
      title="db.count()"
      description="Counts the number of records matching the query criteria."
      signature="count(query?: Query): Promise<number>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria (optional)' }
      ]}
      examples={[
        {
          title: 'Count all records',
          code: `const total = await db.count();`
        },
        {
          title: 'Count with query',
          code: `const activeUsers = await db.count({ active: true });`
        }
      ]}
      returnValue="Promise<number> - Number of matching records"
    />
  );
}

function HasSection() {
  return (
    <DocSection
      title="db.has()"
      description="Checks if any records match the query criteria."
      signature="has(query: Query): Promise<boolean>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' }
      ]}
      examples={[
        {
          code: `const hasAdmin = await db.has({ role: 'Admin' });
if (!hasAdmin) {
  console.log('No admin users found');
}`
        }
      ]}
      returnValue="Promise<boolean> - True if at least one record matches"
    />
  );
}

function SortSection() {
  return (
    <DocSection
      title="db.sort()"
      description="Retrieves records sorted by a specific field."
      signature="sort(field: string, order?: 'asc' | 'desc'): Promise<Data[]>"
      parameters={[
        { name: 'field', type: 'string', description: 'Field name to sort by' },
        { name: 'order', type: "'asc' | 'desc'", description: "Sort order (default: 'asc')" }
      ]}
      examples={[
        {
          title: 'Sort ascending',
          code: `const users = await db.sort('name');`
        },
        {
          title: 'Sort descending',
          code: `const recentUsers = await db.sort('createdAt', 'desc');`
        }
      ]}
      returnValue="Promise<Data[]> - Sorted array of records"
    />
  );
}

function SelectSection() {
  return (
    <DocSection
      title="db.select()"
      description="Retrieves records with only specified fields included."
      signature="select(query: Query, fields: string[]): Promise<Data[]>"
      parameters={[
        { name: 'query', type: 'object', description: 'Query criteria' },
        { name: 'fields', type: 'string[]', description: 'Array of field names to include' }
      ]}
      examples={[
        {
          code: `// Get only name and email fields
const users = await db.select(
  { active: true },
  ['name', 'email']
);

console.log(users[0]); // { name: '...', email: '...' }`
        }
      ]}
      returnValue="Promise<Data[]> - Array of records with selected fields"
    />
  );
}

function UniqueSection() {
  return (
    <DocSection
      title="db.unique()"
      description="Retrieves unique values for a specific field."
      signature="unique(field: string): Promise<any[]>"
      parameters={[
        { name: 'field', type: 'string', description: 'Field name to get unique values from' }
      ]}
      examples={[
        {
          code: `// Get all unique roles
const roles = await db.unique('role');
console.log(roles); // ['Admin', 'User', 'Moderator']

// Get all unique countries
const countries = await db.unique('country');`
        }
      ]}
      returnValue="Promise<any[]> - Array of unique values"
    />
  );
}

function GroupSection() {
  return (
    <DocSection
      title="db.group()"
      description="Groups records by a specific field and returns grouped results."
      signature="group(field: string): Promise<Record<string, Data[]>>"
      parameters={[
        { name: 'field', type: 'string', description: 'Field name to group by' }
      ]}
      examples={[
        {
          code: `// Group users by role
const grouped = await db.group('role');

console.log(grouped);
// {
//   'Admin': [{ name: 'Ahmed', role: 'Admin' }, ...],
//   'User': [{ name: 'Sara', role: 'User' }, ...],
//   'Moderator': [{ name: 'Omar', role: 'Moderator' }, ...]
// }

// Count users per role
Object.entries(grouped).forEach(([role, users]) => {
  console.log(\`\${role}: \${users.length} users\`);
});`
        }
      ]}
      returnValue="Promise<Record<string, Data[]>> - Object with grouped records"
    />
  );
}
