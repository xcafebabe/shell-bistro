import { Command } from 'commander';

const command = new Command('multimedia-file-arrange');

command
  .description('Organize multimedia files by year, month, day folders')
  .option('--output-dir <outputDir>', 'Output directory')
  .option('--input-dir <inputDir>', 'Input directory')
  .option('--change-file-name', 'Change file name')
  .option('--dry-run', 'Dry run')
  .option('--file-types <fileTypes>', 'File types to sort: jpg,jpeg,mp4', 'jpg,png,mp4')
  .option('--sort-by <sortBy>', 'Sort by: year,month|year,month,day|flat', 'year,month')
  .action((options) => {
    // Leer el directorio de entrada, de forma recursiva
    // Buscar los archivos que coincidan con los tipos de archivo
    // Extraer la fecha de creación de los archivos, si es posible analizando los metadatos de la imagen o video
    // Crear una estructura de directorios de salida basada en la fecha de creación
    // Copiar los archivos al directorio de salida
    // El directorio de salida debe ser en base al sort-by type, por ejemplo,
    // si sort-by es year,month, el directorio de salida debe ser /output-dir/2021/01
    // si sort-by es year,month,day, el directorio de salida debe ser /output-dir/2021/01/01
    // si sort-by es flat, el directorio de salida debe ser /output-dir
    //  - Si el archivo ya existe, no copiarlo pero mostrar un mensaje de advertencia
    // Si es dry-run, mostrar los cambios que se harían pero no hacerlos.
    // Si la option change-file-name está activa, cambiar el nombre del archivo a la fecha de creación + nombre original del archivo
    // Si la option change-file-name está desactivada, copiar el archivo con el nombre original
    //

    console.log(options);
  });

export { command };
