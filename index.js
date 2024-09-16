"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const profile_pictureElement = document.getElementById("profile_picture");
    const first_nameelement = document.getElementById("first_name");
    const last_nameElement = document.getElementById("last_name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const dobElement = document.getElementById("dob");
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const addressElement = document.getElementById("address");
    const first_name = first_nameelement.value;
    const last_name = last_nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const dob = dobElement.value;
    const gender = genderElement.value;
    const address = addressElement.value;
    const profile_picture = profile_pictureElement.files?.[0];
    const profilePictureUrl = profile_picture ? URL.createObjectURL(profile_picture) : "";
    const resumeOutput = `
        <h1>Your Generated Resume</h1>
        ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" class="profile-picture">` : ""}
        <h2>Personal Info</h2>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove('hidden');
        // Create a container for action buttons
        const container = document.createElement('div');
        container.id = "container";
        resumeOutputElement.appendChild(container);
        // PDF Download button
        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = "Download as PDF";
        downloadBtn.addEventListener("click", () => {
            window.print();
        });
        container.appendChild(downloadBtn);
        // Shareable link button
        const shareBtn = document.createElement('button');
        shareBtn.textContent = "Copy Shareable Link";
        shareBtn.addEventListener("click", async () => {
            const shareableLink = `https://yourdomain.com/resume/${first_name}_${last_name}_cv.html`;
            try {
                await navigator.clipboard.writeText(shareableLink);
                alert("Shareable link copied to clipboard!");
            }
            catch (err) {
                alert("Failed to copy link, please try again.");
            }
        });
        container.appendChild(shareBtn);
    }
});
