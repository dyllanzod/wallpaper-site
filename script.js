document.addEventListener("DOMContentLoaded", function() {
    // Select all photo elements
    const photos = document.querySelectorAll(".photo");

    // Iterate over each photo element
    photos.forEach(photo => {
        // Get the image and caption elements
        const img = photo.querySelector("img");
        const caption = photo.querySelector(".caption");

        // Create a download button
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download";
        downloadButton.classList.add("download-button");
        downloadButton.addEventListener("click", function() {
            // Trigger image download
            const link = document.createElement('a');
            link.href = img.src;
            link.download = img.alt;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        // Replace caption with download button
        photo.removeChild(caption);
        photo.appendChild(downloadButton);
    });
});
