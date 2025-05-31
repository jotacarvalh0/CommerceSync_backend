import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function main() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log("Aplicação rodando na porta 3000");
  } catch (error) {
    console.error("Erro ao inicializar a aplicação:", error);
    // Lógica para lidar com a falha na inicialização (ex: sair do processo)
    process.exit(1);
  }
}

void main();
