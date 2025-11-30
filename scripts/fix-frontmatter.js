const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../content/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix category with colon
  content = content.replace(
    /^category: (CRUD: .+)$/gm,
    'category: "$1"'
  );
  
  // Fix category with dash and colon
  content = content.replace(
    /^category: (CRUD - .+)$/gm,
    'category: "$1"'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  fixed++;
});

console.log(`✅ Fixed ${fixed} files`);
