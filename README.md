# dynamic-form-builder

Dynamic Form Builder Application

This application is a drag-and-drop dynamic form builder designed to allow users to create, manage, and submit forms with different field types. It supports multiple functionalities, including form listing, editing, previewing, and validation. The application is built with Angular, TypeScript, and uses Reactive Forms for form handling. Additionally, it incorporates NgRx for state management, ensuring a clean and scalable application structure.

Features
	•	Drag-and-Drop Form Builder: Users can easily add and arrange fields in the form using drag-and-drop functionality.
	•	Field Types: The form builder supports multiple field types such as text, number, date, and custom fields.
	•	Form Management: Users can create, edit, and preview forms. They can also see a live preview before submitting.
	•	Form Submission: The application supports form validation and submission with a mock API.
	•	User Roles: There are two user roles, Admin and User. Admins have full access to manage forms, while Users can only submit forms.
	•	Responsive Design: The application is responsive and works seamlessly across devices.

Technologies Used
	•	Angular 14+: The frontend framework used to build the dynamic form builder and other UI components.
	•	TypeScript: Strongly-typed superset of JavaScript to ensure better code quality and maintainability.
	•	Reactive Forms: Angular’s powerful form management system, which allows for handling complex form inputs and validations.
	•	NgRx: A state management library for Angular, enabling centralized management of the application state.
	•	CSS: For styling and ensuring the application is responsive

Environment Setup
Ensure you have the following installed:
	•	Node.js (v14+ recommended)
	•	Angular CLI (v14+)
	•	npm

Known Issues and Errors

During development, I encountered a few errors that remain unresolved:
	1.	Error with Drag-and-Drop Implementation: There seems to be an issue with the drag-and-drop functionality, where certain fields do not update correctly after being moved. I have not been able to resolve this due to conflicting library versions.
	2.	Validation Error with Certain Field Types: Some form fields are not validating correctly when submitted. This issue seems to stem from the custom validation rules, but further debugging is required.
	3.	State Management with NgRx: There are issues with the NgRx store not syncing the form data correctly. I am still troubleshooting the interaction between form state and the store.
	4.	Error with Form Data Binding: There is a specific issue where the form data is not correctly bound to the form controls, causing fields to show incorrect values after submission. This error happens when switching between field types or editing the form, and despite troubleshooting, it has not been fixed yet. The form binding issue affects both validation and the dynamic generation of form fields

 
 
