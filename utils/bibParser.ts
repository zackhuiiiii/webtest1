import fs from 'fs';
import path from 'path';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  conference: string;
  year: string;
  month?: string;
  abstract?: string;
  pdf?: string;
  preview?: string;
  abbr?: string;
  address?: string;
}

function parseField(entry: string, fieldName: string): string {
  const regex = new RegExp(`${fieldName}\\s*=\\s*{([^}]*)}`, 'i');
  const match = entry.match(regex);
  return match ? match[1].trim() : '';
}

export function parseBibFile(): Publication[] {
  const bibPath = path.join(process.cwd(), 'data', 'papers.bib');
  const bibContent = fs.readFileSync(bibPath, 'utf-8');
  
  // Split entries by looking for @article or @inproceedings
  const entries = bibContent.split(/(?=@\w+{)/);
  
  return entries
    .filter(entry => entry.trim())
    .map(entry => {
      const idMatch = entry.match(/{([^,]*),/);
      const id = idMatch ? idMatch[1].trim() : '';
      
      return {
        id,
        title: parseField(entry, 'title'),
        authors: parseField(entry, 'author')
          .split(' and ')
          .map(author => author.split(', ').reverse().join(' ').trim()),
        conference: parseField(entry, 'booktitle'),
        year: parseField(entry, 'year'),
        month: parseField(entry, 'month'),
        abstract: parseField(entry, 'abstract'),
        pdf: parseField(entry, 'pdf'),
        preview: parseField(entry, 'preview'),
        abbr: parseField(entry, 'abbr'),
        address: parseField(entry, 'address')
      };
    })
    .filter(pub => pub.id && pub.title); // Filter out any malformed entries
}