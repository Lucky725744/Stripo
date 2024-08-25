Stripo Email Management System
This project is designed to manage email templates using the Stripo API. It includes features for sending emails, previewing emails, saving email content to a MySQL database, and viewing email templates.

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

Root Folder:

test.php: This script is responsible for sending the compiled email when the "Send" button is clicked. It utilizes PHPMailer to send the email via SMTP.
