function showPokemonChart(statLabels, statValues) {
    const labelColors = [
      'red', 'blue', 'green', 'yellow', 'orange', 'turquoise'
    ];
  
    let chartCanvas = document.getElementById('myChart');
    let currentChart = Chart.getChart(chartCanvas);

    let statsPokemon = document.querySelector('.chart');
    statsPokemon.classList.remove('displayNone');

    let abilitiesPokemon = document.querySelector('.abilitiesHTML'); 

    if (abilitiesPokemon) {
      abilitiesPokemon.classList.add('displayNone');
    }

    if (currentChart) {
      currentChart.destroy();
    }

    new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: statLabels,
        datasets: [{
          label: 'Base Stat',
          data: statValues,
          borderWidth: 1,
          backgroundColor: labelColors, 
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  






