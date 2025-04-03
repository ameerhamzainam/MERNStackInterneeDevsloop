function uploadImage(imageFile) {
    return new Promise((resolve, reject) => {
        if (validateImage(imageFile)) {
            uploadToServer(imageFile)
               .then((response) => {
                    resolve(response);
                })
               .catch((error) => {
                    reject(error);
                });
        } else {
            reject("File is not an image file");
        }
    });
}

function uploadToServer(imageFile) {
    return new Promise((resolve, reject) => {
        try {
            let rand = Math.random();
            console.log(rand);
            if (rand > 0.5) {
                setTimeout(() => {
                    console.log("Image Uploaded Successfully to the server", imageFile);
                    resolve("Image uploaded successfully");
                }, 2000);
            } else {
                reject("Image Upload Failed");
            }
        } catch (error) {
            reject(error);
        }
    });
}

function validateImage(imageFile) {
    return imageFile.type === 'image/png' || imageFile.type === 'image/jpeg';
}

function memoryClearing() {
    console.log("memory cleaned...");
}

uploadImage({ type: "image/png" })
   .then((response) => {
        console.log(response);
    })
   .catch((error) => {
        console.log(error);
    })
   .finally(() => {
        console.log("Clearing the memory...");
        memoryClearing();
    });