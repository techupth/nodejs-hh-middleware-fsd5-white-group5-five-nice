import fs from "fs/promises";
async function loggin(req, res, next) {
  console.log("hello");
  try {
    const text = `\nIP: ${req.ip} , Method: ${req.method}, Endpoint: ${req.originalUrl}`;
    await fs.appendFile("logs.txt", text);
  } catch {
    await fs.appendFile(
      "logs.txt",
      `\nLoggin Error on IP: ${req.ip} , Method: ${req.method}, Endpoint: ${req.orijinalUrl}`
    );
  }
  next();
}

export default loggin;
