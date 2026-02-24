## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
           In JavaScript, there are several methods used to select HTML elements from a webpage.
getElementById()
This method selects a single element using its unique id attribute. Since an id must be unique in an HTML document, this method always returns only one element. It is fast and efficient when the id of the element is known.
getElementsByClassName()
This method selects all elements that share the same class name. It returns a live HTMLCollection, which automatically updates if elements are added or removed from the document.
querySelector()
This method selects the first element that matches a specified CSS selector. It can select elements using #id, .class, tag names (div, p), or more complex CSS selectors.
querySelectorAll()
This method selects all elements that match a specified CSS selector. It returns a static NodeList, which does not automatically update when the DOM changes.

### 2. How do you create and insert a new element into the DOM?
To create and insert a new element into the DOM, follow these steps:
Step 1: Create the element
Use document.createElement() to create a new HTML element.
Example:
let p = document.createElement("p");
Step 2: Add content
Use textContent or innerHTML to add text or HTML content.
Example:
p.textContent = "Hello, World!";
Step 3: Insert the element
Use methods such as appendChild() or append() to insert the element into the webpage.
Example:
document.body.appendChild(p);
These steps allow developers to dynamically add new elements to a webpage using JavaScript.


### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a mechanism in JavaScript where an event starts from the target element and then propagates (moves upward) through its parent elements in the DOM hierarchy.
For example:
•	When a button inside a div is clicked, the click event first occurs on the button.
•	Then it moves to the parent div.
•	After that, it continues up to the body and document.
This upward movement of the event is called event bubbling, and it occurs automatically for most events in JavaScript.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique in which a single event listener is attached to a parent element instead of adding separate event listeners to multiple child elements.
It works because of event bubbling. When a child element is clicked, the event bubbles up to the parent element, and the parent handles the event.
Advantages of Event Delegation:
•	Reduces the amount of code
•	Improves performance by using fewer event listeners
•	Works for dynamically added elements
•	Makes the code cleaner and easier to maintain
Event Delegation is an efficient and practical approach for handling events in large web applications.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Both methods are used inside event handlers, but they serve different purposes.
preventDefault()
This method prevents the browser’s default behavior for an event.
For example, clicking a link normally redirects to another page. Using preventDefault() stops that redirection.
stopPropagation()
This method prevents the event from propagating (bubbling) up to parent elements.
For example, if both a button and its parent div have click event listeners, calling stopPropagation() on the button prevents the parent’s event handler from executing.

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 