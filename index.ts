document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const first_nameelement = document.getElementById("first_name") as HTMLInputElement;
    const last_nameElement = document.getElementById("last_name") as HTMLInputElement;
    const emailElement = document.getElementById("Email") as HTMLInputElement;
    const phoneelement = document.getElementById("phone") as HTMLInputElement;
    const dobElement = document.getElementById("dob") as HTMLInputElement;
    const genderElement = document.getElementById("gender") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const profile_pictureElement = document.getElementById("profile_picture") as HTMLInputElement;
    const job_titleElement = document.getElementById("job_title") as HTMLInputElement;
    const company_nameElement = document.getElementById("company_name") as HTMLInputElement;
    const start_dateElement = document.getElementById("start_date") as HTMLInputElement;
    const end_dateElement = document.getElementById("end_date") as HTMLInputElement;
    const job_descriptionElement = document.getElementById("job_description") as HTMLInputElement;
    const degreeElement = document.getElementById("degree") as HTMLInputElement;
    const institutionElement = document.getElementById("institution") as HTMLInputElement;
    const edu_start_dateElement = document.getElementById("edu_start_date") as HTMLInputElement;
    const edu_end_dateElement = document.getElementById("edu_end_date") as HTMLInputElement;
    const gradeElement = document.getElementById("grade") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const languagesElement = document.getElementById("languages") as HTMLInputElement;
    const hobbiesElement = document.getElementById("hobbies") as HTMLInputElement;
    const reference_nameElement = document.getElementById("reference_name") as HTMLInputElement;
    const reference_contactElement = document.getElementById("reference_contact") as HTMLInputElement;
    const cover_letterelement = document.getElementById("cover_letter") as HTMLTextAreaElement;

    if(first_nameelement && last_nameElement && emailElement && phoneelement && dobElement && genderElement && addressElement && profile_pictureElement && job_titleElement && company_nameElement && start_dateElement && end_dateElement && job_descriptionElement && degreeElement &&institutionElement && edu_start_dateElement &&edu_end_dateElement && gradeElement && skillsElement && languagesElement && hobbiesElement && reference_nameElement &&reference_contactElement &&cover_letterelement) {
const first_name = first_nameelement.value;
const last_name = last_nameElement.value;
const Email = emailElement.value;
const phone = phoneelement.value;
const dob = dobElement.value;
const gender = genderElement.value;
const address = addressElement.value;
const profile_picture = profile_pictureElement.value;
const job_title = job_titleElement.value;
const company_name = company_nameElement.value;
const start_date = start_dateElement.value;
const end_date = end_dateElement.value;
const  job_description =  job_descriptionElement.value ;
const degree = degreeElement.value;
const institution = institutionElement.value;
const edu_start_date = edu_start_dateElement.value;
const edu_end_date = edu_end_dateElement.value;
const grade = gradeElement.value;
const skills = skillsElement.value;
const languages = languagesElement.value;
 const hobbies = hobbiesElement.value;
 const reference_name = reference_nameElement.value;
const reference_contact = reference_contactElement.value;
const cover_letter = cover_letterelement.value;


        const resumeOutput = `
            <h1>Your Generated CV</h1>
        <h2>Personal Info  </h2>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p
       <p><strong> Email: </strong>${emailElement.value}</p>
        <p><strong>Phone: </strong>${phoneelement.value}</p>
        <p><strong>Date of Birth:</strong>${dob}</p>
        <p><strong>Gender: </strong>${gender}</p>
       <p><strong> Address: </strong>${address}</p>
        <p><strong>Profile Picture:</strong> ${profile_picture}</p>
        <h2>Work Experience</h2>
       <p><strong> Job Title: </strong>${job_title}</p>
       <p><strong> Company Name: </strong>${company_name}</p>
       <p><strong> Start Date: </strong>${start_date}</p>
        <p><strong>End Date::</strong>${end_date}</p>
        <p><strong>Job Description: </strong>${job_description}</p>
        <h2>Education </h2>
        <p><strong>Degree: </strong>${degree}</p>
       <p><strong>  Institution: </strong>${institution}</p>
        <p><strong>Start Date: </strong>${edu_start_date}</p>
       <p><strong> End Date: </strong>${edu_end_date}</p>
       <p><strong> Grade: </strong>${grade}</p>
        <h2>Skills:</h2> 
       <p><strong> Skills:</strong>${skillsElement.value}</p>
       <h2> Languages:</h2> 
        <p><strong>Languages: </strong>${languages}</p><br>
        <h2>Hobbies:</h2>
       <p><strong> Hobbies: </strong>${hobbies}</p>
        <h2>References:</h2>
       <p><strong> Reference Name: </strong>${reference_name}</p>
       <p><strong> Reference Contact: </strong>${reference_contact}</p>
        <h2>Cover Letter:</h2>
       <p><strong> Cover Letter: </strong>${cover_letter}</p>
        
    `;
  

        const resumeOutputElement = document.getElementById('resumeOutput');
        if(resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resumeOutput element is missing');
        }
    } else {
        console.error('Some form fields are missing');
    }
});