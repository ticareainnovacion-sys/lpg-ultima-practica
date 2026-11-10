const http = require('http');
const VERSION = '2.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Andina Market - Innovación y Sabor</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-slate-900 text-slate-100 font-sans min-h-screen flex flex-col justify-between">

    <!-- Header / Navbar -->
    <header class="bg-slate-800/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <div class="bg-gradient-to-tr from-orange-500 to-amber-400 p-2 rounded-xl text-slate-900 font-bold text-xl shadow-lg shadow-orange-500/20">
                    <i class="fa-solid fa-store"></i>
                </div>
                <span class="text-xl font-extrabold tracking-wide bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                    Andina Market
                </span>
            </div>
            <div class="flex items-center space-x-2 bg-slate-700/50 px-3 py-1.5 rounded-full border border-slate-600 text-sm">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-slate-300 font-medium">Versión ${VERSION}</span>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-12 flex-grow">
        <!-- Hero Section -->
        <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                Plataforma Cloud Activa
            </span>
            <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
                El futuro del comercio <span class="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">en la nube</span>
            </h1>
            <p class="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed">
                Desplegado automáticamente mediante tuberías de integración continua y pipelines en AWS. Eficiencia, velocidad y modernidad en un solo lugar.
            </p>
            <div class="flex justify-center gap-4">
                <button onclick="showAlert()" class="bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5">
                    <i class="fa-solid fa-rocket mr-2"></i> Explorar Sistema
                </button>
            </div>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="bg-slate-800/50 border border-slate-700/70 p-6 rounded-2xl hover:border-orange-500/50 transition-all">
                <div class="text-orange-400 text-2xl mb-4 bg-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <i class="fa-solid fa-bolt"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-white">Despliegue Continuo</h3>
                <p class="text-slate-400 text-sm">Actualizaciones automatizadas directamente desde GitHub hacia tu infraestructura EC2.</p>
            </div>

            <div class="bg-slate-800/50 border border-slate-700/70 p-6 rounded-2xl hover:border-orange-500/50 transition-all">
                <div class="text-amber-400 text-2xl mb-4 bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-white">Alta Disponibilidad</h3>
                <p class="text-slate-400 text-sm">Infraestructura robusta configurada en la nube con respaldos y control de procesos en segundo plano.</p>
            </div>

            <div class="bg-slate-800/50 border border-slate-700/70 p-6 rounded-2xl hover:border-orange-500/50 transition-all">
                <div class="text-emerald-400 text-2xl mb-4 bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <i class="fa-solid fa-code"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-white">Arquitectura Moderna</h3>
                <p class="text-slate-400 text-sm">Construido con Node.js y diseñado con interfaces responsivas basadas en tecnologías web actuales.</p>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800/40 border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        <p>Andina Market &copy; 2026 &bull; Desplegado automáticamente desde GitHub <i class="fa-brands fa-github ml-1"></i></p>
    </footer>

    <script>
        function showAlert() {
            alert('¡El sistema de Andina Market está operando al 100% en AWS!');
        }
    </script>
</body>
</html>
  `);
});

server.listen(3000, () => {
  console.log('Servidor dinámico corriendo en el puerto 3000');
});
