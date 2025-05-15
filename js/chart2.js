document.addEventListener('DOMContentLoaded', function() {
  const data = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      x: Math.floor(Math.random() * 100) + 1,
      y: Math.floor(Math.random() * 100) + 1
    });
  }
  return data;
});


const ctx = document.getElementById('myChart');
let myChart = Chart.getChart(ctx);

// If there's an existing chart, destroy it
if (myChart) {
  myChart.destroy();
}
new Chart(ctx, {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
});




const scatterData = generateScatterData();
console.log(scatterData);
