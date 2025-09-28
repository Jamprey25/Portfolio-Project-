document.addEventListener("DOMContentLoaded", function() {
    const viewButton = document.getElementById("view-resume");
    const downloadButton = document.getElementById("download-resume");
    
    if (viewButton) {
        viewButton.addEventListener("click", viewResume);
    }
    
    if (downloadButton) {
        downloadButton.addEventListener("click", downloadResume);
    }
});

function viewResume() {
    
    window.open("resume.pdf", "_blank");
}

function downloadResume() {
    // Create a link element for download
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "resume.pdf";
 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}