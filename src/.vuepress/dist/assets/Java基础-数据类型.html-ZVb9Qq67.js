const t=JSON.parse(`{"key":"v-aa8fb322","path":"/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"Java基础-数据类型","lang":"zh-CN","frontmatter":{"title":"Java基础-数据类型","icon":"write","category":["Java"],"tag":["Java"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"基本数据类型 Java中有8种基本数据类型： 6种数字类型：byte、short、int、long、float、double 1种字符类型：char 1种布尔型：boolean 它们的默认值和占用的空间 基本类型 位数 字节 默认值 int 32 4 0 short 16 2 0 long 64 8 0L byte 8 1 0 char 16 2 'u0000' float 32 4 0f double 64 8 0d boolean 1 false","head":[["meta",{"property":"og:url","content":"https://gitee.com/huang-jintong/notes/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"小俊ノックcode"}],["meta",{"property":"og:title","content":"Java基础-数据类型"}],["meta",{"property":"og:description","content":"基本数据类型 Java中有8种基本数据类型： 6种数字类型：byte、short、int、long、float、double 1种字符类型：char 1种布尔型：boolean 它们的默认值和占用的空间 基本类型 位数 字节 默认值 int 32 4 0 short 16 2 0 long 64 8 0L byte 8 1 0 char 16 2 'u0000' float 32 4 0f double 64 8 0d boolean 1 false"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Huang"}],["meta",{"property":"article:tag","content":"Java"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础-数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Huang\\",\\"url\\":\\"https://gitee.com/huang-jintong\\"}]}"]]},"headers":[{"level":2,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":2,"title":"包装类型","slug":"包装类型","link":"#包装类型","children":[{"level":3,"title":"1. 基本类型和包装类型的区别","slug":"_1-基本类型和包装类型的区别","link":"#_1-基本类型和包装类型的区别","children":[]},{"level":3,"title":"2. 包装类型的常量池技术","slug":"_2-包装类型的常量池技术","link":"#_2-包装类型的常量池技术","children":[]},{"level":3,"title":"3. 为什么需要包装类型","slug":"_3-为什么需要包装类型","link":"#_3-为什么需要包装类型","children":[]},{"level":3,"title":"4. 基本类型与包装类之间的自动拆装箱","slug":"_4-基本类型与包装类之间的自动拆装箱","link":"#_4-基本类型与包装类之间的自动拆装箱","children":[]},{"level":3,"title":"5. 自动拆箱引发的NPE问题","slug":"_5-自动拆箱引发的npe问题","link":"#_5-自动拆箱引发的npe问题","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.18,"words":953},"filePathRelative":"codenotes/javacore/Java基础-数据类型.md","excerpt":"<h2> 基本数据类型</h2>\\n<blockquote>\\n<p>Java中有8种基本数据类型：</p>\\n<ol>\\n<li>6种数字类型：byte、short、int、long、float、double</li>\\n<li>1种字符类型：char</li>\\n<li>1种布尔型：boolean</li>\\n</ol>\\n</blockquote>\\n<ul>\\n<li>它们的默认值和占用的空间</li>\\n</ul>\\n<table>\\n<thead>\\n<tr>\\n<th>基本类型</th>\\n<th>位数</th>\\n<th>字节</th>\\n<th>默认值</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>int</td>\\n<td>32</td>\\n<td>4</td>\\n<td>0</td>\\n</tr>\\n<tr>\\n<td>short</td>\\n<td>16</td>\\n<td>2</td>\\n<td>0</td>\\n</tr>\\n<tr>\\n<td>long</td>\\n<td>64</td>\\n<td>8</td>\\n<td>0L</td>\\n</tr>\\n<tr>\\n<td>byte</td>\\n<td>8</td>\\n<td>1</td>\\n<td>0</td>\\n</tr>\\n<tr>\\n<td>char</td>\\n<td>16</td>\\n<td>2</td>\\n<td>'u0000'</td>\\n</tr>\\n<tr>\\n<td>float</td>\\n<td>32</td>\\n<td>4</td>\\n<td>0f</td>\\n</tr>\\n<tr>\\n<td>double</td>\\n<td>64</td>\\n<td>8</td>\\n<td>0d</td>\\n</tr>\\n<tr>\\n<td>boolean</td>\\n<td>1</td>\\n<td></td>\\n<td>false</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}`);export{t as data};
