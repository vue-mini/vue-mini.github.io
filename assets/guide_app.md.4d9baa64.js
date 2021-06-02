import{o as n,c as s,a}from"./app.8efcc44e.js";const p='{"title":"创建小程序","description":"","frontmatter":{},"headers":[{"level":2,"title":"setup","slug":"setup"},{"level":2,"title":"生命周期","slug":"生命周期"},{"level":2,"title":"与原生语法混用","slug":"与原生语法混用"},{"level":2,"title":"简洁语法","slug":"简洁语法"}],"relativePath":"guide/app.md","lastUpdated":1622194741193}',t={},o=a('<h1 id="创建小程序"><a class="header-anchor" href="#创建小程序" aria-hidden="true">#</a> 创建小程序</h1><p>每个小程序都需要在 <code>app.js</code> 中调用 <code>createApp</code> 函数创建小程序实例。它是 <code>App</code> 函数的超集，它额外接收一个 <code>setup</code> 函数。</p><div class="language-js"><pre><code><span class="token comment">// app.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-mini/wechat&#39;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      greeting<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>如果 <code>setup</code> 返回一个对象，则对象的属性将会被原样合并到小程序实例上。</p><div class="language-js"><pre><code><span class="token comment">// xxx.js</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>greeting<span class="token punctuation">)</span> <span class="token comment">// Hello World!</span>\n</code></pre></div><h2 id="setup"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2><ul><li><strong>调用时机</strong></li></ul><p><code>setup</code> 会在 <code>onLaunch</code> 阶段被调用。返回都数据和方法也会在此时才会被合并到小程序实例上。</p><ul><li><strong>参数</strong></li></ul><p><code>setup</code> 接收与 <code>onLaunch</code> 相同的参数。</p><div class="language-js"><pre><code><span class="token comment">// app.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-mini/wechat&#39;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// options 为小程序启动参数</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><ul><li><strong><code>this</code> 的用法</strong></li></ul><p><strong><code>this</code> 在 <code>setup()</code> 中不可用</strong>。这是为了避免混乱。</p><h2 id="生命周期"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><p>可以直接导入 <code>onXXX</code> 一族的函数来注册生命周期钩子。它们接收的参数与对应的生命周期一致，每个 <code>onXXX</code> 函数都能被多次调用。</p><div class="language-js"><pre><code><span class="token comment">// app.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> onAppShow<span class="token punctuation">,</span> onAppHide<span class="token punctuation">,</span> onAppError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-mini/wechat&#39;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">onAppShow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;show&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token function">onAppHide</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hide&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token function">onAppError</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>这些生命周期钩子注册函数只能在 <code>setup()</code> 期间同步使用，其他场景下调用这些函数会抛出一个错误。</p><ul><li><p><strong>生命周期对应关系</strong></p><ul><li><code>onLaunch</code> -&gt; <code>setup</code></li><li><code>onShow</code> -&gt; <code>onAppShow</code></li><li><code>onHide</code> -&gt; <code>onAppHide</code></li><li><code>onError</code> -&gt; <code>onAppError</code></li><li><code>onPageNotFound</code> -&gt; <code>onPageNotFound</code></li><li><code>onUnhandledRejection</code> -&gt; <code>onUnhandledRejection</code></li><li><code>onThemeChange</code> -&gt; <code>onThemeChange</code></li></ul></li></ul><h2 id="与原生语法混用"><a class="header-anchor" href="#与原生语法混用" aria-hidden="true">#</a> 与原生语法混用</h2><p>由于 <code>createApp()</code> 是 <code>App()</code> 的超集，所以你也能使用原生语法。</p><div class="language-js"><pre><code><span class="token comment">// app.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> onAppShow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-mini/wechat&#39;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>\n\n    <span class="token function">onAppShow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;from setup&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      hello<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;from option&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  world<span class="token operator">:</span> <span class="token string">&#39;World!&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>如果名称相同，<code>setup()</code> 返回的数据或方法会覆盖原生语法声明的数据或方法。你应该避免出现这种情况。</p><p>请不要在其他选项中访问 <code>setup()</code> 返回的数据或方法，这将引起混乱。如果确实有此需求，应该将相关逻辑搬到 <code>setup()</code> 内。</p><h2 id="简洁语法"><a class="header-anchor" href="#简洁语法" aria-hidden="true">#</a> 简洁语法</h2><p>如果不需要使用原生语法，也可以直接传递一个 <code>setup</code> 函数给 <code>createApp()</code>。</p><div class="language-js"><pre><code><span class="token comment">// app.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-mini/wechat&#39;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    greeting<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div>',26);t.render=function(a,p,t,e,c,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};
