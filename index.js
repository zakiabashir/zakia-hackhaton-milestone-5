// Get form and preview elements
const form = document.getElementById("resumeForm");
const resumePage = document.getElementById("resumePage");
const resumePhoto = document.getElementById("resumePhoto");
const resumeName = document.getElementById("resumeName");
const resumeEmail = document.getElementById("resumeEmail");
const resumePhone = document.getElementById("resumePhone");
const resumedob = document.getElementById("resumedob");
const resumegender = document.getElementById("resumegender");
const resumeaddress = document.getElementById("resumeaddress");
const resumedegree = document.getElementById("resumedegree");
const resumeinstitute = document.getElementById("resumeinstitute");
const resumestart_Date = document.getElementById("resumestart-date");
const resumeen_date = document.getElementById("resumeend-date");
const resumegrade = document.getElementById("resumegrade");
const resumejobtitle = document.getElementById("resumejobtitle");
const resumecompanyname = document.getElementById("resumecompanyname");
const resumestartdate = document.getElementById("resumestartdate");
const resumeendate = document.getElementById("resumeenddate");
const resumejobdescription = document.getElementById("resumejobdescription");
const resumeSkills = document.getElementById("resumeSkills");
const resumelanguages = document.getElementById("resumelanguages");
const resumerecoverletter = document.getElementById("resumerecoverletter");
const resumerefrencename = document.getElementById("resumerefrencename");
const resumerefrencecontact = document.getElementById("resumerefrencecontact");
const resumehobbies = document.getElementById("resumehobbies");
const downloadPdfButton = document.getElementById('download-pdf');
const backButton = document.getElementById("backButton");
const editButton = document.getElementById("editButton");
const resumeContent = document.getElementById("resumeContent");
const shareLinkButton = document.getElementById("shareLinkButton");
// Handle form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;
    const degree = document.getElementById("degree").value;
    const institute = document.getElementById("institution").value;
    const edustartdate = document.getElementById("edu_start_date").value;
    const eduenddate = document.getElementById("edu_end_date").value;
    const grade = document.getElementById("grade").value;
    const job_title = document.getElementById("job_title").value;
    const company_name = document.getElementById("company_name").value;
    const start_date = document.getElementById("start_date").value;
    const end_date = document.getElementById("end_date").value;
    const job_description = document.getElementById("job_description").value;
    const skills = document.getElementById("skills").value;
    const languages = document.getElementById("languages").value;
    const hobbies = document.getElementById("hobbies").value;
    const reference_name = document.getElementById("reference_name").value;
    const reference_contact = document.getElementById("reference_contact").value;
    const coverletter = document.getElementById("cover_letter").value;
    const photoInput = document.getElementById("photo");
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';
    if (photoFile) {
        photoBase64 = await fileToBase64(photoFile);
        // Store the photo in localStorage instead of passing it in the URL
        localStorage.setItem("resumePhoto", photoBase64);
        resumePhoto.src = photoBase64;
    }
    // Populate the resume preview
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumedob.textContent = `Dtae of Birth: ${dob}`;
    resumegender.textContent = `Gender: ${gender}`;
    resumeaddress.textContent = `Address: ${address}`;
    resumedegree.textContent = `Degree: ${degree}`;
    resumeinstitute.textContent = `Institute: ${institute}`;
    resumestart_Date.textContent = `Start-Date: ${start_date}`;
    resumeen_date.textContent = `End-Dte: ${end_date}`;
    resumejobtitle.textContent = ` Job-Title: ${job_title}`;
    resumecompanyname.textContent = `Company-Name: ${company_name}`;
    resumestartdate.textContent = `Start-Date: ${edustartdate}`;
    resumeendate.textContent = `End-Date ${eduenddate}`;
    resumejobdescription.textContent = `Job-description: ${job_description}`;
    resumeSkills.textContent = `skills: ${skills}`;
    resumelanguages.textContent = `Languages: ${languages}`;
    resumehobbies.textContent = `Hobbies: ${hobbies}`;
    resumerefrencename.textContent = `Refrence-name: ${reference_name}`;
    resumerefrencecontact.textContent = `Reference-contact: ${reference_contact}`;
    resumerecoverletter.textContent = `Cover-letter: ${coverletter}`;
    // Hide form and show resume page
    document.querySelector(".container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");
    // Generate shareable link without the photo
    const queryParams = new URLSearchParams({
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        gender: gender,
        address: address,
        degree: degree,
        institute: institute,
        edustartdate: edustartdate,
        eduenddate: eduenddate,
        grade: grade,
        job_title: job_title,
        start_date: start_date,
        end_date: end_date,
        job_description: job_description,
        skills: skills,
        hobbies: hobbies,
        languages: languages,
        reference_name: reference_name,
        reference_contact: reference_contact,
        coverletter: coverletter
    });
    const uniqueUrl = `${window.location.origin}?${queryParams.toString()}`;
    shareLinkButton.addEventListener("click", () => {
        navigator.clipboard.writeText(uniqueUrl);
        alert('Shareable link copied to clipboard!');
    });
    window.history.replaceState(null, '', `?${queryParams.toString()}`);
});
// Convert photo to Base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
// Add back button functionality to go back to the form
backButton.addEventListener("click", () => {
    // Show the form again and hide the resume preview
    document.querySelector(".container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
    // Optionally clear query parameters
    window.history.replaceState(null, '', '/');
});
// Add edit button functionality
editButton.addEventListener("click", () => {
    // Populate the form with current resume data for editing
    updateFormFromResume();
    // Show the form again for editing
    document.querySelector(".container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
// Function to update the form fields with current resume data
function updateFormFromResume() {
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = resumeEmail.textContent?.replace('Email: ', '') || '';
    document.getElementById("phone").value = resumePhone.textContent?.replace('Phone: ', '') || '';
    document.getElementById("dob").value = resumedob.textContent?.replace('Dtae of Birth: ', '') || '';
    document.getElementById("gender").value = resumegender.textContent?.replace('Gender: ', '') || '';
    document.getElementById("address").value = resumeaddress.textContent?.replace('Address: ', '') || '';
    document.getElementById("degree").value = resumedegree.textContent?.replace('Degree: ', '') || '';
    document.getElementById("institution").value = resumeinstitute.textContent?.replace('Institute: ', '') || '';
    document.getElementById("edu_start_date").value = resumestart_Date.textContent?.replace('Star-Dtae: ', '') || '';
    document.getElementById("edu_end_date").value = resumeen_date.textContent?.replace('END-Dtae: ', '') || '';
    document.getElementById("grade").value = resumegrade.textContent?.replace('Grade: ', '') || '';
    document.getElementById("job_title").value = resumejobtitle.textContent?.replace('Job-Title: ', '') || '';
    document.getElementById("company_name").value = resumecompanyname.textContent?.replace('Company-Name: ', '') || '';
    document.getElementById("start_date").value = resumestartdate.textContent?.replace('Start-Date: ', '') || '';
    document.getElementById("end_date").value = resumeendate.textContent?.replace('End-Date: ', '') || '';
    document.getElementById("job_description").value = resumejobdescription.textContent?.replace('Job-Description: ', '') || '';
    document.getElementById("skills").value = resumeSkills.textContent?.replace('Skills: ', '') || '';
    document.getElementById("languages").value = resumelanguages.textContent?.replace('Languages: ', '') || '';
    document.getElementById("hobbies").value = resumehobbies.textContent?.replace('Hobbies: ', '') || '';
    document.getElementById("reference_name").value = resumerefrencename.textContent?.replace('Refrence-Nme: ', '') || '';
    document.getElementById("reference_contact").value = resumerefrencecontact.textContent?.replace('Refrence-Contact: ', '') || '';
    document.getElementById("cover_letter").value = resumerecoverletter.textContent?.replace('Cover-Letter: ', '') || '';
}
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }
    const resumeOptions = {
        margin: 0.5,
        filename: `resume.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Generate and download PDF
    html2pdf()
        .from(resumeContent)
        .set(resumeOptions)
        .save()
        .catch((error) => {
        console.error('PDF generation error:', error);
    });
});
// Handle query parameters on page load
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || '';
    const email = params.get('email') || '';
    const phone = params.get('phone') || '';
    const dob = params.get('dob') || '';
    const gender = params.get('gender') || '';
    const address = params.get('address') || '';
    const degree = params.get('degree') || '';
    const institute = params.get('institution') || '';
    const edustartdate = params.get('edu_start_date') || '';
    const eduenddate = params.get('edu_end_date') || '';
    const grade = params.get('grade') || '';
    const job_title = params.get('job_title') || '';
    const company_name = params.get('company_name') || '';
    const start_date = params.get('start_date') || '';
    const end_date = params.get('end_date') || '';
    const job_description = params.get('job_description') || '';
    const skills = params.get('skills') || '';
    const hobbies = params.get('hobbies') || '';
    const languages = params.get('languages') || '';
    const reference_name = params.get('reference_name') || '';
    const reference_contact = params.get('reference_contact') || '';
    const coverletter = params.get('Coverletter') || '';
    if (name || email || phone || dob || gender || address || degree || institute || edustartdate || eduenddate
        || grade || job_title || company_name || start_date || end_date || job_description || skills || hobbies ||
        languages || reference_name || reference_contact || coverletter) {
        // Populate the resume preview if query params are present
        resumeName.textContent = name;
        resumeEmail.textContent = `Email: ${email}`;
        resumePhone.textContent = `Phone: ${phone}`;
        resumedob.textContent = `Date of Birth: ${dob}`;
        resumegender.textContent = `Gender: ${gender}`;
        resumeaddress.textContent = `Address: ${address}`;
        resumedegree.textContent = `Degree: ${degree}`;
        resumeinstitute.textContent = `Institute: ${institute}`;
        resumestart_Date.textContent = `Start-Date: ${start_date}`;
        resumeen_date.textContent = `End-Dte: ${end_date}`;
        resumejobtitle.textContent = ` Job-Title: ${job_title}`;
        resumecompanyname.textContent = `Company-Name: ${company_name}`;
        resumestartdate.textContent = `Start-Date: ${edustartdate}`;
        resumeendate.textContent = `End-Date ${eduenddate}`;
        resumejobdescription.textContent = `Job-description: ${job_description}`;
        resumeSkills.textContent = `skills: ${skills}`;
        resumelanguages.textContent = `Languages ${languages}`;
        resumehobbies.textContent = `Hobbies: ${hobbies}`;
        resumerefrencename.textContent = `Refrence-name: ${reference_name}`;
        resumerefrencecontact.textContent = `Reference-contact: ${reference_contact}`;
        resumerecoverletter.textContent = `Cover-letter: ${coverletter}`;
        // Retrieve photo from localStorage (if available)
        const savedPhoto = localStorage.getItem("resumePhoto");
        if (savedPhoto) {
            resumePhoto.src = savedPhoto;
        }
        // Hide form and show resume page
        document.querySelector(".container")?.classList.add("hidden");
        resumePage.classList.remove("hidden");
    }
});
// CSS for ensuring the image is styled properly
resumePhoto.style.width = "150px"; // Adjust width as per your requirement
resumePhoto.style.height = "150px";
resumePhoto.style.objectFit = "cover";
resumePhoto.style.borderRadius = "50%"; // Circular image
resumePhoto.style.display = "block";
resumePhoto.style.margin = "0 auto";
export {};
