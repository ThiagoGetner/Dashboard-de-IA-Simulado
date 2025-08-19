script.js

// Carrega dados fictícios
async function loadData() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data;
}

// Cria gráficos
async function createCharts() {
  const data = await loadData();
  
  const salesCtx = document.getElementById('salesChart').getContext('2d');
  new Chart(salesCtx, {
    type: 'bar',
    data: {
      labels: data.months,
      datasets: [{
        label: 'Vendas',
        data: data.sales,
        backgroundColor: '#4b6cb7'
      }]
    },
    options: { responsive: true }
  });

  const stockCtx = document.getElementById('stockChart').getContext('2d');
  new Chart(stockCtx, {
    type: 'line',
    data: {
      labels: data.months,
      datasets: [{
        label: 'Estoque',
        data: data.stock,
        borderColor: '#ff7f50',
        fill: false
      }]
    },
    options: { responsive: true }
  });
}

// Insights de IA simulados
const insightsList = document.getElementById('insights');
const simulatedInsights = [
  "Produto X vendeu 30% mais que mês passado.",
  "Estoque do Produto Y está baixo, recomende reabastecimento.",
  "O faturamento total subiu 15% no último trimestre.",
  "Sugestão: focar marketing nos produtos mais vendidos.",
  "Análise: tendência de crescimento constante nas regiões Sul e Sudeste."
];

function generateInsight() {
  const random = simulatedInsights[Math.floor(Math.random() * simulatedInsights.length)];
  const li = document.createElement('li');
  li.textContent = random;
  insightsList.appendChild(li);
}

// Inicializa dashboard
createCharts();
