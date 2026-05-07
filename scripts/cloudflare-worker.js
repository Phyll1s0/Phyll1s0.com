// Cloudflare Worker
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 验证密码
    if (url.pathname === '/api/unlock') {
      const { password } = await request.json();
      
      if (password === '20051021') {
        // 返回加密的文章内容
        const content = await env.PRIVATE_KV.get('private-diary');
        return new Response(content, {
          headers: { 'Content-Type': 'text/markdown' }
        });
      }
      
      return new Response('Wrong password', { status: 401 });
    }
    
    return new Response('Not found', { status: 404 });
  }
}