(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{540:function(e,t,s){"use strict";s.r(t);var a=s(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("This blog features important interview questions for full stack engineers.\n")]),e._v(" "),s("h2",{attrs:{id:"tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[e._v("#")]),e._v(" TCP")]),e._v(" "),s("p",[e._v("Transmission control protocol (TCP) manages the sending and receiving of all your data as packets.")]),e._v(" "),s("h2",{attrs:{id:"session-cookie-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-cookie-token"}},[e._v("#")]),e._v(" Session, Cookie, Token")]),e._v(" "),s("h3",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[e._v("#")]),e._v(" Cookie")]),e._v(" "),s("p",[e._v("Cookie is a small piece of data "),s("strong",[e._v("stored by the browser")]),e._v(" and "),s("strong",[e._v("sent to the server")]),e._v(" with every request.")]),e._v(" "),s("p",[e._v("Cookie use cases:")]),e._v(" "),s("ol",[s("li",[e._v("log in")]),e._v(" "),s("li",[e._v("shopping cart")]),e._v(" "),s("li",[e._v("state of filling a long form")]),e._v(" "),s("li",[e._v("browse history (ads)")])]),e._v(" "),s("h3",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[e._v("#")]),e._v(" Session")]),e._v(" "),s("p",[e._v("Session is a collection of data "),s("strong",[e._v("stored on the server")]),e._v(" and associated with a "),s("strong",[e._v("given user")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"cookie-session-vs-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session-vs-token"}},[e._v("#")]),e._v(" Cookie & Session vs. Token")]),e._v(" "),s("p",[e._v("As HTTP is a stateless protocol, either a cookie or a token is used to store user state.")]),e._v(" "),s("h3",{attrs:{id:"cookie-session-based-auth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session-based-auth"}},[e._v("#")]),e._v(" Cookie & Session Based Auth")]),e._v(" "),s("p",[e._v("In the session based authentication, the server will create a session for the user after the user logs in. The session id is then stored on a "),s("strong",[e._v("cookie on the user’s browser")]),e._v(". While the user stays logged in, the cookie would be sent along with every subsequent request. The server can then compare the session id stored on the cookie against the session information stored in the memory to verify user’s identity and sends response with the corresponding state!")]),e._v(" "),s("h3",{attrs:{id:"token-based-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-based-authentication"}},[e._v("#")]),e._v(" Token Based Authentication")]),e._v(" "),s("p",[e._v("Many web applications use JSON Web Token (JWT) instead of sessions for authentication. In the token based application, the server creates JWT with a secret and sends the JWT to the client. The client stores the JWT (usually in local storage) and includes JWT in the header with every request. The server would then validate the JWT with every request from the client and sends response.")]),e._v(" "),s("p",[e._v("The biggest difference here is that the user’s state is not stored on the server, as the state is stored inside the token on the client side instead. Most of the modern web applications use JWT for authentication for reasons including scalability and mobile device authentication.")]),e._v(" "),s("p",[e._v("Mostly from "),s("a",{attrs:{href:"https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sherry Hsu's Medium post"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"oauth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[e._v("#")]),e._v(" OAuth")]),e._v(" "),s("p",[e._v("OAuth doesn't share password data but instead uses "),s("strong",[e._v("authorization tokens")]),e._v(" to prove an identity between consumers and service providers. OAuth is an authentication protocol that allows user to approve one application interacting with another without giving away user's identity.")]),e._v(" "),s("h2",{attrs:{id:"cross-origin-resource-sharing-cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-origin-resource-sharing-cors"}},[e._v("#")]),e._v(" Cross-origin Resource Sharing (CORS)")]),e._v(" "),s("p",[e._v("CORS is a mechanism that "),s("strong",[e._v("allows restricted resources")]),e._v(" on a web page to be requested "),s("strong",[e._v("from another domain")]),e._v(" outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.")]),e._v(" "),s("h2",{attrs:{id:"cross-site-scripting-xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-site-scripting-xss"}},[e._v("#")]),e._v(" Cross-site Scripting (XSS)")]),e._v(" "),s("p",[e._v("XSS is a client-side code injection attack. The attacker aims to execute malicious scripts in a web browser of the victim by including malicious code in a legitimate web page or web application. Solution: escape angular bracket "),s("code",[e._v("<")]),e._v(" with less sign "),s("code",[e._v("&lt;")]),e._v(" so that malicious script won't be run.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://youtu.be/L5l9lSnNMxg",target:"_blank",rel:"noopener noreferrer"}},[e._v("More by computerphile"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"cross-site-request-forgery-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-site-request-forgery-csrf"}},[e._v("#")]),e._v(" Cross-site Request Forgery (CSRF)")]),e._v(" "),s("p",[e._v("CSRF, also known as one-click attack or session riding, is a type of malicious exploit of a website where "),s("strong",[e._v("unauthorized commands")]),e._v(" are transmitted "),s("strong",[e._v("from a user that the web application trusts")]),e._v(". Basic solution: referer head, but might be blocked by ad blocker or privacy tool. Ultimate solution: each time a form is created, a "),s("strong",[e._v("one-time token")]),e._v(" is generated. Thus, a valid form sent back should include this token.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://youtu.be/vRBihr41JTo",target:"_blank",rel:"noopener noreferrer"}},[e._v("More by computerphile"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"sql-injection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-injection"}},[e._v("#")]),e._v(" SQL Injection")]),e._v(" "),s("p",[e._v("SQL injection is a code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g. to dump the database contents to the attacker).")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://youtu.be/_jKylhJtPmI",target:"_blank",rel:"noopener noreferrer"}},[e._v("More by computerphile"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"cryptography"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cryptography"}},[e._v("#")]),e._v(" Cryptography")]),e._v(" "),s("p",[e._v("Known issues:")]),e._v(" "),s("ul",[s("li",[e._v("rainbow table attack\nA rainbow table is a precomputed table for reversing cryptographic hash functions, usually for cracking password hashes")]),e._v(" "),s("li",[e._v("password collision\nSame password is common like '123456'")])]),e._v(" "),s("p",[e._v("Solution: add "),s("strong",[e._v("salt")])]),e._v(" "),s("p",[e._v("store the hashed value: "),s("code",[e._v("hash(provided password + stored salt)")])]),e._v(" "),s("h2",{attrs:{id:"http-vs-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-vs-https"}},[e._v("#")]),e._v(" HTTP vs. HTTPS")]),e._v(" "),s("h2",{attrs:{id:"rpc-vs-rest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc-vs-rest"}},[e._v("#")]),e._v(" RPC vs. REST")]),e._v(" "),s("h2",{attrs:{id:"js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[e._v("#")]),e._v(" JS")]),e._v(" "),s("h3",{attrs:{id:"vs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs"}},[e._v("#")]),e._v(" == vs. ===")]),e._v(" "),s("h2",{attrs:{id:"es-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es-6"}},[e._v("#")]),e._v(" ES 6")]),e._v(" "),s("p",[e._v("https://github.com/addyosmani/es6-equivalents-in-es5")]),e._v(" "),s("h3",{attrs:{id:"this-arrow-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-arrow-function"}},[e._v("#")]),e._v(" This & Arrow Function")]),e._v(" "),s("h3",{attrs:{id:"class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[e._v("#")]),e._v(" Class")]),e._v(" "),s("h3",{attrs:{id:"deconstruction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deconstruction"}},[e._v("#")]),e._v(" Deconstruction")]),e._v(" "),s("h3",{attrs:{id:"spread-operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spread-operation"}},[e._v("#")]),e._v(" Spread Operation")]),e._v(" "),s("h2",{attrs:{id:"nosql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nosql"}},[e._v("#")]),e._v(" NoSQL")]),e._v(" "),s("h3",{attrs:{id:"mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[e._v("#")]),e._v(" MongoDB")]),e._v(" "),s("p",[e._v("Export/import a collection in a database:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mongoexport --db local --collection startup_log --out local.json")])]),e._v(" "),s("li",[s("code",[e._v("mongoimport --db test --collection test --file demo_news.json")])])]),e._v(" "),s("p",[e._v("Export/import all collections in a database:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mongodump -d <database_name> -o <directory_backup>")])]),e._v(" "),s("li",[s("code",[e._v("mongorestore -d <database_name> <directory_backup>")])])]),e._v(" "),s("p",[s("strong",[e._v("Collections")]),e._v(" in Mongo are equivalent to "),s("strong",[e._v("tables")]),e._v(" in relational databases. They can hold multiple JSON documents.")]),e._v(" "),s("p",[s("strong",[e._v("Documents")]),e._v(" are equivalent to "),s("strong",[e._v("records")]),e._v(" or "),s("strong",[e._v("rows")]),e._v(" of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.")]),e._v(" "),s("p",[e._v("Fields\n‘Fields’ or attributes are similar to columns in a SQL table.")]),e._v(" "),s("p",[e._v("Schema\nWhile Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.")]),e._v(" "),s("p",[e._v("Models\n‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.")]),e._v(" "),s("h2",{attrs:{id:"cap-theoream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cap-theoream"}},[e._v("#")]),e._v(" CAP Theoream")]),e._v(" "),s("p",[s("strong",[e._v("C")]),e._v("onsistency\n"),s("strong",[e._v("A")]),e._v("vailability\n"),s("strong",[e._v("P")]),e._v("artition-tolerance")]),e._v(" "),s("h2",{attrs:{id:"message-queue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-queue"}},[e._v("#")]),e._v(" Message Queue")]),e._v(" "),s("h3",{attrs:{id:"kafka-vs-rabbitmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-vs-rabbitmq"}},[e._v("#")]),e._v(" Kafka vs. RabbitMQ")]),e._v(" "),s("h2",{attrs:{id:"service-oriented-architecture-soa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-oriented-architecture-soa"}},[e._v("#")]),e._v(" Service Oriented Architecture (SOA)")]),e._v(" "),s("h2",{attrs:{id:"microservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#microservice"}},[e._v("#")]),e._v(" Microservice")]),e._v(" "),s("h2",{attrs:{id:"authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),s("h2",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),s("h2",{attrs:{id:"network-address-translation-nat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network-address-translation-nat"}},[e._v("#")]),e._v(" Network Address Translation (NAT)")]),e._v(" "),s("p",[e._v("NAT is the process where a network device, usually a firewall, assigns a public address to a computer (or group of computers) inside a private network. The main use of NAT is to limit the number of public IP addresses an organization or company must use, for both economy and security purposes.")]),e._v(" "),s("h2",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),s("h3",{attrs:{id:"css-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[e._v("#")]),e._v(" CSS Modules")]),e._v(" "),s("p",[e._v("CSS Modules is a method to add local scope and module dependencies into CSS.")]),e._v(" "),s("p",[e._v("See more at: "),s("a",{attrs:{href:""}},[e._v("https://github.com/ruanyf/css-modules-demos")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);