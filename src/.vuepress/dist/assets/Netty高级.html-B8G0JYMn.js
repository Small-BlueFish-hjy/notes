const n=JSON.parse('{"key":"v-65c1d7f2","path":"/codenotes/framework/netty/Netty%E9%AB%98%E7%BA%A7.html","title":"Netty高级","lang":"zh-CN","frontmatter":{"title":"Netty高级","icon":"write","category":["Netty","网络编程"],"tag":["序列化","参数调优","RPC框架"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"一、优化 1、扩展序列化算法 1、序列化接口 public interface Serializer { /** * 序列化 * * @param object 被序列化的对象 * @param &lt;T&gt; 被序列化对象类型 * @return 序列化后的字节数组 */ &lt;T&gt; byte[] serialize(T object); /** * 反序列化 * * @param clazz 反序列化的目标类的Class对象 * @param bytes 被反序列化的字节数组 * @param &lt;T&gt; 反序列化目标类 * @return 反序列化后的对象 */ &lt;T&gt; T deserialize(Class&lt;T&gt; clazz, byte[] bytes); }","head":[["meta",{"property":"og:url","content":"https://gitee.com/huang-jintong/notes/codenotes/framework/netty/Netty%E9%AB%98%E7%BA%A7.html"}],["meta",{"property":"og:site_name","content":"小俊ノックcode"}],["meta",{"property":"og:title","content":"Netty高级"}],["meta",{"property":"og:description","content":"一、优化 1、扩展序列化算法 1、序列化接口 public interface Serializer { /** * 序列化 * * @param object 被序列化的对象 * @param &lt;T&gt; 被序列化对象类型 * @return 序列化后的字节数组 */ &lt;T&gt; byte[] serialize(T object); /** * 反序列化 * * @param clazz 反序列化的目标类的Class对象 * @param bytes 被反序列化的字节数组 * @param &lt;T&gt; 反序列化目标类 * @return 反序列化后的对象 */ &lt;T&gt; T deserialize(Class&lt;T&gt; clazz, byte[] bytes); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-30T09:01:48.000Z"}],["meta",{"property":"article:author","content":"Mr.Huang"}],["meta",{"property":"article:tag","content":"序列化"}],["meta",{"property":"article:tag","content":"参数调优"}],["meta",{"property":"article:tag","content":"RPC框架"}],["meta",{"property":"article:modified_time","content":"2023-11-30T09:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Netty高级\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-30T09:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Huang\\",\\"url\\":\\"https://gitee.com/huang-jintong\\"}]}"]]},"headers":[{"level":2,"title":"一、优化","slug":"一、优化","link":"#一、优化","children":[{"level":3,"title":"1、扩展序列化算法","slug":"_1、扩展序列化算法","link":"#_1、扩展序列化算法","children":[]},{"level":3,"title":"2、参数调优","slug":"_2、参数调优","link":"#_2、参数调优","children":[]},{"level":3,"title":"3、RPC框架","slug":"_3、rpc框架","link":"#_3、rpc框架","children":[]},{"level":3,"title":"4、项目代码","slug":"_4、项目代码","link":"#_4、项目代码","children":[]}]},{"level":2,"title":"二、源码","slug":"二、源码","link":"#二、源码","children":[]},{"level":2,"title":"三、参考","slug":"三、参考","link":"#三、参考","children":[]}],"git":{"createdTime":1701334908000,"updatedTime":1701334908000,"contributors":[{"name":"小蓝鱼","email":"aa13434691125@126.com","commits":1}]},"readingTime":{"minutes":12.73,"words":3820},"filePathRelative":"codenotes/framework/netty/Netty高级.md","localizedDate":"2023年11月30日","excerpt":"<h2> 一、优化</h2>\\n<h3> 1、扩展序列化算法</h3>\\n<h4> 1、序列化接口</h4>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Serializer</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 序列化\\n     *\\n     * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">object</span> 被序列化的对象\\n     * <span class=\\"token keyword\\">@param</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">&lt;</span>T<span class=\\"token punctuation\\">&gt;</span></span>    被序列化对象类型\\n     * <span class=\\"token keyword\\">@return</span> 序列化后的字节数组\\n     */</span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">byte</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token function\\">serialize</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">T</span> object<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 反序列化\\n     *\\n     * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">clazz</span> 反序列化的目标类的Class对象\\n     * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">bytes</span> 被反序列化的字节数组\\n     * <span class=\\"token keyword\\">@param</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">&lt;</span>T<span class=\\"token punctuation\\">&gt;</span></span>   反序列化目标类\\n     * <span class=\\"token keyword\\">@return</span> 反序列化后的对象\\n     */</span>\\n    <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token class-name\\">T</span> <span class=\\"token function\\">deserialize</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Class</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> clazz<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">byte</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> bytes<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
