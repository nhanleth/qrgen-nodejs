import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Hàm chính để chạy chương trình tạo QR code
async function generateQRCodeFromInput() {
  try {
    // Hỏi người dùng nhập URL
    const { url } = await inquirer.prompt([
      {
        type: "input",
        name: "url",
        message: "Type in your URL:",
        validate: (input) => input.trim() !== "" || "URL cannot be empty",
      },
    ]);

    // Tạo file QR code dạng ảnh PNG
    const qrImage = qr.image(url);
    qrImage.pipe(fs.createWriteStream("qr_img.png"));

    // Lưu URL vào file văn bản
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("✅ The URL has been saved to URL.txt");
    });

    console.log("✅ QR Code image created as qr_img.png");
  } catch (error) {
    if (error.isTtyError) {
      console.error("❌ Prompt can't be rendered in the current environment.");
    } else {
      console.error("❌ An error occurred:", error);
    }
  }
}

// Gọi hàm chính
generateQRCodeFromInput();

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
