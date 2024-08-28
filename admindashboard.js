$(document).ready(function() {
    // Fetch teacher attendance data from the server
    $.get('/api/teacherAttendance', function(data) {
        // Process the data and update the HTML accordingly
        // (Insert your logic to update the table dynamically)
    });

    // Example: Handle the form submission to add new teacher attendance
    $('#attendanceForm').submit(function(e) {
        e.preventDefault();
        const formData = $(this).serialize();

        $.post('/api/teacherAttendance', formData, function(data) {
            // Handle the response from the server
            console.log(data);
        });
    });
});