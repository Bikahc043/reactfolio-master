import React from "react";

function article_1() {
	return {
		date: "15 Aug 2022",
		title: "Features of React",
		description:
			"1. Component-Based Architecture Reusability: Components are self-contained modules that can be reused across different parts of the application, promoting code reuse and maintainability.Encapsulation: Each component manages its own state and renders its own UI, leading to better separation of concerns.",
		keywords: [
			"Features of React",
			"Reactjs",
			"Reactjs features ",
			"React bikash",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<h1>1. Component-Based Architecture
					Reusability:</h1> Components are self-contained modules that can be reused across different parts of the application, promoting code reuse and maintainability.
					Encapsulation: Each component manages its own state and renders its own UI, leading to better separation of concerns. <br />
					<h1>2. JSX (JavaScript XML)
					Syntax:</h1> JSX allows developers to write HTML-like syntax within JavaScript, making it easier to describe what the UI should look like.
					Ease of Use: It improves the readability and maintainability of the code by allowing the combination of UI structure and logic in a single file. <br />
					<h1>3. Virtual DOM
					Efficiency: </h1>React uses a virtual DOM to optimize updates. Changes are first applied to the virtual DOM, and then a diffing algorithm determines the minimal set of changes required to update the real DOM, improving performance.
					Fast Updates: This approach ensures that only the necessary parts of the DOM are updated, making the application faster and more responsive. <br />
					<h1>4. Unidirectional Data Flow
					Predictability:</h1> Data flows in a single direction (from parent to child components), making the flow of data easier to understand and debug.
					State Management: This pattern supports better state management, often complemented by state management libraries like Redux or Context API. <br />
					<h1>5. Hooks
					State and Side Effects:</h1> Introduced in React 16.8, hooks like useState and useEffect allow functional components to manage state and side effects.
					Custom Hooks: Developers can create custom hooks to share logic across components, enhancing code reuse and modularity.
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "15 Aug 2022",
		title: "Advantages of Using React.js",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Features of React",
			"Reactjs",
			"Reactjs features ",
			"React bikash",
		],
		body: (
			<React.Fragment>
				<div>
				<div>Content of article 2</div>
				<h1>Performance:</h1>

				The use of a virtual DOM and efficient updating mechanisms ensures high performance, especially in complex and large-scale applications.
				<h1>Reusable Components:</h1>

				The component-based structure promotes reusability, making the development process faster and more efficient. Components can be easily shared across different parts of the application or even across different projects.
				<h1>Developer Tools:</h1>

				React comes with powerful developer tools that assist in debugging and optimizing applications. The React Developer Tools extension for browsers helps inspect the component hierarchy, state, and props.
				<h1>Strong Community and Support:</h1>

				React has a large and active community, which means extensive resources, tutorials, and third-party libraries are available. The continuous contributions from the community and Facebook ensure React stays up-to-date with modern development practices.
				<h1>SEO-Friendly:
				</h1>
				With frameworks like Next.js, React can be used for server-side rendering, which improves the SEO of web applications by allowing search engines to crawl the content more effectively.

				</div>
				
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "15 Aug 2022",
		title: "React Hooks",
		description:
			"React Hooks are functions that let you use state and other React features without writing a class. ",
		style: ``,
		keywords: [
			"Features of React",
			"Reactjs",
			"Reactjs features ",
			"React bikash",
		],
		body: (
			<React.Fragment>
				<div>
				<div>Content of article 3</div>
				<h1>useState:</h1>

				Allows you to add state to functional components.
				<h1>useEffect:</h1>

				Performs side effects in functional components (e.g., data fetching, subscriptions).
				<h1>useContext:</h1>

				Allows you to use the context API without writing classes.				<h1>useReducer:</h1>

				An alternative to useState for managing complex state logic.				<h1>useMemo:
				</h1>
				Memoizes a value, recomputing it only when its dependencies change.
				</div>
				
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "15 Aug 2022",
		title: "React Redux",
		description:
			"React Redux is a state management library for React applications. Redux simply helps to manage the state of your application or in other words, it is used to manage the data of the application.",
		style: ``,
		keywords: [
			"Features of React",
			"Reactjs",
			"Reactjs features ",
			"React bikash",
		],
		body: (
			<React.Fragment>
				<div>
				<div>Content of article 4</div>
				<div></div>
				<h1>Advantages:</h1>

				When diving into web development, it’s important to learn the basics of React and Redux. React that makes your code more modular and reusable. It’s all about efficiency, especially with the virtual DOM ensuring your app runs smoothly. And then there’s Redux, stepping in like a superhero for state management. It plays seamlessly with React, handling those complex states. Together, React and Redux not only simplify UI development but also improve the way for scalable and maintainable applications.
				<h1>What is a store in Redux ?</h1>

				Redux is the state management library that is used in JavaScript apps. It is used to manage the state of data and access them at different components level in the app. In redux, there are three parts as follows:

Actions,
Reducer,
Store				</div>
				
			</React.Fragment>
		),
	};
}
function article_5() {
	return {
		date: "15 Aug 2022",
		title: "RESTful API ",
		description:
			"A RESTful API is an architectural style for an application programming interface that uses HTTP requests to access and use data.That data can be used to GET, PUT, POST and DELETE data types, which refers to reading, updating, creating and deleting operations related to resources.",
		style: ``,
		keywords: [
			"Features of React",
			"Reactjs",
			"Reactjs features ",
			"React bikash",
		],
		body: (
			<React.Fragment>
				<div>
				<div>Content of article 5</div>
				<div></div>
				<h1>How to Create RESTful API and Fetch Data using ReactJS ?</h1>

				React JS is more than just an open-source JavaScript library, it’s a powerful tool for crafting user interfaces with unparalleled efficiency and clarity. One of React’s core principles is its component-based architecture, which aligns perfectly with the Model View Controller (MVC) pattern. React components encapsulate pieces of UI functionality and logic, making them reusable, maintainable, and easy to reason about. As a result, developers can focus solely on building the view layer of their applications, confident that React will handle updates and rendering optimizations with ease. In this article, we will see how we can create the RESTful API and Fetch the Data using ReactJS.			
				<h1>Why should we use REST API in our web apps and services?</h1>
				Using REST (Representational State Transfer) APIs in web applications and services offers several benefits, making it a popular choice for modern web development. Here are some key reasons why you should use REST APIs:
				<h2>Separation of Client and Server</h2>
				<h3>Loose Coupling: </h3>REST APIs allow the client and server to evolve independently. Changes on the server side don't necessarily affect the client side and vice versa, as long as the contract (API endpoints) is maintained.
				<h3>Platform Agnostic:</h3> Clients can be built using different technologies (e.g., React, Angular, mobile apps) while consuming the same API.
				<h2>Scalability</h2>
				<h3>Statelessness</h3>
				Each HTTP request from a client to a server must contain all the information the server needs to fulfill that request. This stateless nature makes it easier to scale horizontally by adding more servers.
				<h2>Flexibility</h2>
				<h3>Data Format:</h3> While JSON is commonly used, REST APIs can handle other data formats like XML, HTML, plain text, etc.
				<h3>CRUD Operations: </h3>REST APIs naturally map to the four basic operations (Create, Read, Update, Delete) using standard HTTP methods (POST, GET, PUT, DELETE).
				<h2>Interoperability</h2>
				<h3>Standard Protocols: </h3>REST APIs use standard HTTP methods, making them easy to interact with from virtually any programming language or platform that can make HTTP requests.
				<h2>Security</h2>
				<h3>Standard Security Practices:</h3> REST APIs can leverage standard HTTP security mechanisms, such as SSL/TLS for encrypted communication and OAuth for authorization.
				</div>
				
			</React.Fragment>
		),
	};
}


const myArticles = [article_1, article_2, article_3,article_4,article_5];

export default myArticles;
