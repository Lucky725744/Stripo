
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stripo Email Management System</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        h1, h2, h3 { color: #333; }
        strong { color: #555; }
        ul { margin: 10px 0; }
        li { margin: 5px 0; }
    </style>
</head>
<body>

    <h1>Stripo Email Management System</h1>

    <p><strong>This project is designed to manage email templates using the Stripo API.</strong> It includes features for sending emails, previewing emails, saving email content to a MySQL database, and viewing email templates.</p>

    <h2>Important Note</h2>
    <p><strong>When hosting this project on GitHub Pages, please be aware:</strong></p>
    <ul>
        <li><strong>Saving to the Database:</strong> This functionality will not work as the PHP files are not linked to a server capable of executing them.</li>
        <li><strong>Sending Emails:</strong> The email sending functionality will also not work due to the PHP files not being executed on GitHub Pages.</li>
        <li><strong>Viewing Emails:</strong> The functionality to view email templates also will not work as it relies on server-side processing which is not supported on GitHub Pages.</li>
    </ul>

    <h2>Features</h2>
    <ul>
        <li><strong>Send Email:</strong> Sends the compiled email content using the Stripo API when the "Send" button is clicked.</li>
        <li><strong>Preview Email:</strong> Previews the email content in a modal or designated area before sending.</li>
        <li><strong>Save Email to Database:</strong> Saves the email content to a MySQL database with options to update existing records.</li>
        <li><strong>View Email:</strong> Allows viewing of email templates stored in the database.</li>
    </ul>

    <h2>Project Structure</h2>
    <h3>Folders and Files</h3>

    <h4>Email_create:</h4>
    <ul>
        <li><strong>create_email.html:</strong> Handles the UI for creating a new email template.</li>
        <li><strong>create_email.js:</strong> Contains the JavaScript logic for handling form submission and interaction for creating emails.</li>
        <li><strong>Create_email.php:</strong> Processes the email creation data, compiles it using the Stripo API, and saves it to the database.</li>
        <li><strong>view_email.php:</strong> Allows viewing of the created email content.</li>
    </ul>

    <h4>Email_update:</h4>
    <ul>
        <li><strong>update_email.html:</strong> Handles the UI for updating an existing email template.</li>
        <li><strong>update_email.js:</strong> Contains the JavaScript logic for handling form submission and interaction for updating emails.</li>
        <li><strong>Update_email.php:</strong> Processes the update data, compiles it using the Stripo API, and updates the corresponding record in the database.</li>
    </ul>

    <h4>Email_preview:</h4>
    <ul>
        <li><strong>view_email.php:</strong> Allows viewing of the updated email content.</li>
    </ul>

    <h4>VIEW_DEMO</h4>
    <ul>
        <li><a href="https://lucky725744.github.io/Stripo_Email/phpmailer_smtp/Email_Create/Create_Email" target="_blank">VIEW_DEMO</a></li>
    </ul>

    <h4>test.php:</h4>
    <ul>
        <li><strong>test.php:</strong> This script is responsible for sending the compiled email when the "Send" button is clicked. It utilizes PHPMailer to send the email via SMTP.</li>
    </ul>

</body>
</html>
