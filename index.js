var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var first_nameelement = document.getElementById("first_name");
    var last_nameElement = document.getElementById("last_name");
    var emailElement = document.getElementById("Email");
    var phoneelement = document.getElementById("phone");
    var dobElement = document.getElementById("dob");
    var genderElement = document.getElementById("gender");
    var addressElement = document.getElementById("address");
    var profile_pictureElement = document.getElementById("profile_picture");
    var job_titleElement = document.getElementById("job_title");
    var company_nameElement = document.getElementById("company_name");
    var start_dateElement = document.getElementById("start_date");
    var end_dateElement = document.getElementById("end_date");
    var job_descriptionElement = document.getElementById("job_description");
    var degreeElement = document.getElementById("degree");
    var institutionElement = document.getElementById("institution");
    var edu_start_dateElement = document.getElementById("edu_start_date");
    var edu_end_dateElement = document.getElementById("edu_end_date");
    var gradeElement = document.getElementById("grade");
    var skillsElement = document.getElementById("skills");
    var languagesElement = document.getElementById("languages");
    var hobbiesElement = document.getElementById("hobbies");
    var reference_nameElement = document.getElementById("reference_name");
    var reference_contactElement = document.getElementById("reference_contact");
    var cover_letterelement = document.getElementById("cover_letter");
    if (first_nameelement && last_nameElement && emailElement && phoneelement && dobElement && genderElement && addressElement && profile_pictureElement && job_titleElement && company_nameElement && start_dateElement && end_dateElement && job_descriptionElement && degreeElement && institutionElement && edu_start_dateElement && edu_end_dateElement && gradeElement && skillsElement && languagesElement && hobbiesElement && reference_nameElement && reference_contactElement && cover_letterelement) {
        var first_name = first_nameelement.value;
        var last_name = last_nameElement.value;
        var Email = emailElement.value;
        var phone = phoneelement.value;
        var dob = dobElement.value;
        var gender = genderElement.value;
        var address = addressElement.value;
        var profile_picture = profile_pictureElement.value;
        var job_title = job_titleElement.value;
        var company_name = company_nameElement.value;
        var start_date = start_dateElement.value;
        var end_date = end_dateElement.value;
        var job_description = job_descriptionElement.value;
        var degree = degreeElement.value;
        var institution = institutionElement.value;
        var edu_start_date = edu_start_dateElement.value;
        var edu_end_date = edu_end_dateElement.value;
        var grade = gradeElement.value;
        var skills = skillsElement.value;
        var languages = languagesElement.value;
        var hobbies = hobbiesElement.value;
        var reference_name = reference_nameElement.value;
        var reference_contact = reference_contactElement.value;
        var cover_letter = cover_letterelement.value;
        var resumeOutput = "\n            <h1>Your Generated CV</h1>\n        <h2>Personal Info  </h2>\n        <p><strong>First Name:</strong> ".concat(first_name, "</p>\n        <p><strong>Last Name:</strong> ").concat(last_name, "</p\n       <p><strong> Email: </strong>").concat(emailElement.value, "</p>\n        <p><strong>Phone: </strong>").concat(phoneelement.value, "</p>\n        <p><strong>Date of Birth:</strong>").concat(dob, "</p>\n        <p><strong>Gender: </strong>").concat(gender, "</p>\n       <p><strong> Address: </strong>").concat(address, "</p>\n        <p><strong>Profile Picture:</strong> ").concat(profile_picture, "</p>\n        <h2>Work Experience</h2>\n       <p><strong> Job Title: </strong>").concat(job_title, "</p>\n       <p><strong> Company Name: </strong>").concat(company_name, "</p>\n       <p><strong> Start Date: </strong>").concat(start_date, "</p>\n        <p><strong>End Date::</strong>").concat(end_date, "</p>\n        <p><strong>Job Description: </strong>").concat(job_description, "</p>\n        <h2>Education </h2>\n        <p><strong>Degree: </strong>").concat(degree, "</p>\n       <p><strong>  Institution: </strong>").concat(institution, "</p>\n        <p><strong>Start Date: </strong>").concat(edu_start_date, "</p>\n       <p><strong> End Date: </strong>").concat(edu_end_date, "</p>\n       <p><strong> Grade: </strong>").concat(grade, "</p>\n        <h2>Skills:</h2> \n       <p><strong> Skills:</strong>").concat(skillsElement.value, "</p>\n       <h2> Languages:</h2> \n        <p><strong>Languages: </strong>").concat(languages, "</p><br>\n        <h2>Hobbies:</h2>\n       <p><strong> Hobbies: </strong>").concat(hobbies, "</p>\n        <h2>References:</h2>\n       <p><strong> Reference Name: </strong>").concat(reference_name, "</p>\n       <p><strong> Reference Contact: </strong>").concat(reference_contact, "</p>\n        <h2>Cover Letter:</h2>\n       <p><strong> Cover Letter: </strong>").concat(cover_letter, "</p>\n        \n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resumeOutput element is missing');
        }
    }
    else {
        console.error('Some form fields are missing');
    }
});
