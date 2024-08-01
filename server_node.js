const http = require('http');

// Função para gerar o HTML com base na página solicitada
const generateHtml = (pageNumber) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Page ${pageNumber}</title>
    </head>
    <body>
      <h1>Welcome to Page ${pageNumber}</h1>
      <p>This is the content of Page ${pageNumber}.</p>
    </body>
    </html>
  `;
};

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  const url = req.url;

  // Define o tipo de conteúdo
  res.setHeader('Content-Type', 'text/html');

  // Verifica o URL da solicitação e retorna o HTML apropriado
  if (url === '/page1') {
    res.statusCode = 200;
    res.end(generateHtml(1));
  } else if (url === '/page2') {
    res.statusCode = 200;
    res.end(generateHtml(2));
  } else if (url === '/page3') {
    res.statusCode = 200;
    res.end(generateHtml(3));
  } else if (url === '/page4') {
    res.statusCode = 200;
    res.end(generateHtml(4));
  } else if (url === '/page5') {
    res.statusCode = 200;
    res.end(generateHtml(5));
  } else {
    res.statusCode = 404;
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 Not Found</title>
      </head>
      <body>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </body>
      </html>
    `);
  }
});

// Define a porta para o servidor escutar
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
