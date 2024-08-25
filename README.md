
Stripo Email Management System
This project is designed to manage email templates using the Stripo API. It includes features for sending emails, previewing emails, saving email content to a MySQL database, and viewing email templates.

Important Note
When hosting this project on GitHub Pages, please be aware:

Saving to the Database: This functionality will not work as the PHP files are not linked to a server capable of executing them.
Sending Emails: The email sending functionality will also not work due to the PHP files not being executed on GitHub Pages.
Viewing Emails: The functionality to view email templates also will not work as it relies on server-side processing which is not supported on GitHub Pages.

Features
Send Email: Sends the compiled email content using the Stripo API when the "Send" button is clicked.
Preview Email: Previews the email content in a modal or designated area before sending.
Save Email to Database: Saves the email content to a MySQL database with options to update existing records.
View Email: Allows viewing of email templates stored in the database.
Project Structure
Folders and Files
Email_create:

create_email.html: Handles the UI for creating a new email template.
create_email.js: Contains the JavaScript logic for handling form submission and interaction for creating emails.
Create_email.php: Processes the email creation data, compiles it using the Stripo API, and saves it to the database.
view_email.php: Allows viewing of the created email content.
Email_update:

update_email.html: Handles the UI for updating an existing email template.
update_email.js: Contains the JavaScript logic for handling form submission and interaction for updating emails.
Update_email.php: Processes the update data, compiles it using the Stripo API, and updates the corresponding record in the database.

Email_preview:
view_email.php: Allows viewing of the updated email content.
<a href="https://lucky725744.github.io/Stripo_Email/phpmailer_smtp/Email_Create/Create_Email">VIEW_DEMO</a>

test.php: This script is responsible for sending the compiled email when the "Send" button is clicked. It utilizes PHPMailer to send the email via SMTP.
