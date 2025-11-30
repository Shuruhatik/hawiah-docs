import { NextRequest, NextResponse } from 'next/server';
import { getDocById } from '@/lib/markdown';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const doc = getDocById(id);
  
  if (!doc) {
    return NextResponse.json(
      { error: 'Document not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({
    content: doc.content,
    metadata: doc.metadata,
  });
}
