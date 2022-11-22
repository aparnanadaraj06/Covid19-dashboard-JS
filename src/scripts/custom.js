/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const ctx1 = document.getElementById('myChart1').getContext('2d');
const chart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: dateArray,
    datasets: [{
      label: '# of Votes',
      data: confirmedArray,
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      }
    },
  },
});
