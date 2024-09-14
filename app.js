document.getElementById('generateCV').addEventListener('click', () => {
// ye input files ki id hy sir 
    const inputIds = [
        'fullName', 'email', 'phone', 'address', 'linkedin',
        'degree', 'institution', 'gradYear', 'gpa',
        'skill', 'proficiency',
        'jobTitle', 'company', 'yearsExp', 'responsibilities'
    ];
// check krega input fields blank na hon 
    let allFilled = true;
    for (const id of inputIds) {
           const input = document.getElementById(id);
                if (!input.value.trim()) {
             allFilled = false;
    break;
         }}
    if (!allFilled) {
     alert('Please fill in all the input fields.');
           return; }});

           document.getElementById('generateCV').addEventListener('click', () => {
 const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
canvas.width = 800;
     canvas.height = 1200;

  ctx.fillStyle = 'white';
     ctx.fillRect(0, 0, canvas.width, canvas.height);

    // profile image lagane ke leye 
    const profileImage = document.getElementById('profileImage').files[0];
    if (profileImage) {
           const reader = new FileReader();
     reader.onload = function (event) {
             const img = new Image();
       img.onload = function () {
                 ctx.drawImage(img, 20, 20, 100, 100);
                drawContent();           };
            img.src = event.target.result;
        };

 reader.readAsDataURL(profileImage);
       } else {
     drawContent();
          }
 function drawContent() {
          ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
            ctx.fillText('CV Builder by Aliya Fasih', 20, 140);

       ctx.font = '16px Arial';
           ctx.fillText('Personal Information:', 20, 180);
        ctx.font = '14px Arial';
   
        ctx.fillText(`Full Name: ${document.getElementById('fullName').value}`, 20, 220);
               ctx.fillText(`Email: ${document.getElementById('email').value}`, 20, 240);
          ctx.fillText(`Phone Number: ${document.getElementById('phone').value}`, 20, 260);
         ctx.fillText(`Address: ${document.getElementById('address').value}`, 20, 280);
     ctx.fillText(`LinkedIn Profile: ${document.getElementById('linkedin').value}`, 20, 300);

          ctx.font = '16px Arial';
     ctx.fillText('Education:', 20, 340);
         ctx.font = '14px Arial';

        ctx.fillText(`Degree: ${document.getElementById('degree').value}`, 20, 380);
       ctx.fillText(`Institution: ${document.getElementById('institution').value}`, 20, 400);
         ctx.fillText(`Year of Graduation: ${document.getElementById('gradYear').value}`, 20, 420);
      
         ctx.fillText(`GPA: ${document.getElementById('gpa').value}`, 20, 440);


          ctx.font = '16px Arial';
    ctx.fillText('Skills:', 20, 480);
          ctx.font = '14px Arial';

           ctx.fillText(`Skill: ${document.getElementById('skill').value}`, 20, 520);
    ctx.fillText(`Proficiency Level: ${document.getElementById('proficiency').value}`, 20, 540);

         ctx.font = '16px Arial';
   ctx.fillText('Experience:', 20, 580);
        ctx.font = '14px Arial';

        ctx.fillText(`Job Title: ${document.getElementById('jobTitle').value}`, 20, 620);
           ctx.fillText(`Company: ${document.getElementById('company').value}`, 20, 640);
       ctx.fillText(`Years of Experience: ${document.getElementById('yearsExp').value}`, 20, 660);
             ctx.fillText(`Key Responsibilities: ${document.getElementById('responsibilities').value}`, 20, 680);

    //    url me convert krke preview krna hy boss ab 
          const imgData = canvas.toDataURL('image/png');
         document.getElementById('cvImage').src = imgData;
document.getElementById('cvPreview').classList.remove('hidden');
 }
});

document.getElementById('downloadCV').addEventListener('click', () => {



        const cvImage = document.getElementById('cvImage').src;
        const link = document.createElement('a');
     link.href = cvImage;
       link.download = 'cv_with_image.png';
    link.click();
});

document.getElementById('viewLiveCV').addEventListener('click', () => {
   
    const cvImage = document.getElementById('cvImage').src;
       const newWindow = window.open('', '_blank');
      newWindow.document.write(`<img src="${cvImage}" style="width:100%;"/>`);
      newWindow.document.close();
});