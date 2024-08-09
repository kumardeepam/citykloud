import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const targetUrl = new URL(
    'https://tools.citykloud.com' + url.pathname + url.search
  );

  return NextResponse.rewrite(targetUrl);
}
