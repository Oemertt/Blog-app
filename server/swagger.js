import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "API zur Verwaltung von Blogbeiträgen",
    },
    servers: [
      {
        url: "http://localhost:5001",
      },
    ],
  },
  apis: ["./index.js"], // Pfad zur Datei mit deinen Endpunkten
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Default Export
export default swaggerDocs;

