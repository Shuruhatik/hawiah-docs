import { NextRequest, NextResponse } from 'next/server';
import { getDocById } from '@/lib/markdown';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ version: string; id: string }> }
) {
    const { version, id } = await params;

    const doc = getDocById(id, version);

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
