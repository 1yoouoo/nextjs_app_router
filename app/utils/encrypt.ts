// 인코딩 함수
export function encodeParams(name: string, totalCount: string): string {
  const params = `name=${name}&totalCount=${totalCount}`;
  return Buffer.from(params)
    .toString('base64')
    .replace(/[+/=]/g, m => {
      return { '+': '-', '/': '_', '=': '' }[m] || m;
    });
}

// 디코딩 함수
export function decodeParams(encoded: string): { name: string; totalCount: string } {
  const decoded = Buffer.from(encoded.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString();
  const params = new URLSearchParams(decoded);
  return {
    name: params.get('name') || '',
    totalCount: params.get('totalCount') || '',
  };
}
