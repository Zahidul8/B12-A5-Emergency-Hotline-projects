1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 'getElementById' returns the single element of the given id. It returns only one element. It works only with the Id. On the other hand 'getElementsByClassName' returns a live HTMLCollection of the given class. It works with the class name only. We can loop throught the HTML collection and get the elemets. 'querySelector' returns the first element matches with the CSS selector and it works with the CSS selector. On the other hand 'querySelectorAll' returns a static nodeList of elements with the given CSS selector and we can also get the elements of the nodeList by looping throught it.


2. How do you create and insert a new element into the DOM?

Answer: First of all we need to access the parent container where we will insert the element. Then we need to create an element by using 'document.createElement('elementName')' and add content. After creating the element we will append the element to the parent container using 'parentContainer.appendChild(element)'. 


3. What is Event Bubbling and how does it work?

Answer: Event bubbling is a concept in the DOM where an event starts from the target element and propagates upward through its ancestors. 
When an element is clicked it is handled by the target element and then it moves upward to the parent element, grandparent element and so on until it reaches the document object. Each ancestor can listen and respond the same event. We can stop the propagation by using the 'event.stopPropagation()' method.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is a technique in Javascript through which  we can add event listener to the parent element instead of the multiple child elements. It inceases the performance and make the code easier and cleaner to manage. By using event delegation we can handle dynamic elements. 


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: 'preventDefault()' prevents the default action or behavior of an element from happining. It doesn't stop the event from bubbling up. For example, we can prevent a form from submitting or a link from navigating by using it.

On the other hand, 'stopPropagation()' stops the event from bubbling up towards its ancestors. It doesn't stop the default action of any elements. For example, we can prevent any click event reaching the parent element or ancestors.