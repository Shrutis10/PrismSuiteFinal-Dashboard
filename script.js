let modalChart;

/* BASE OPTIONS */
const baseOptions = {
  chart: { height: 230, toolbar: { show: false } },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  xaxis: { categories: [] }
};

/* CHARTS */
const charts = {
  health: new ApexCharts(
    document.querySelector("#chart-health"),
    {
      chart: {
        type: 'bar',
        height: 230,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          barHeight: '70%',
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6b7280', '#8b5cf6', '#dc2626'],
      dataLabels: {
        enabled: true,
        formatter: (val) => val === null ? 'N/A' : val + "%",
        style: {
          fontSize: '12px',
          colors: ['#fff']
        },
        offsetX: 35,
        dropShadow: { enabled: false }
      },
      series: [{
        name: 'Health %',
        data: [48, 69, 62, 49, null, 55, 36.06]
      }],
      xaxis: {
        categories: [
          'Data Server',
          'SAP Server',
          'Firewall',
          'Switches',
          'NAS',
          'Access Points',
          'Endpoints'
        ],
        labels: {
          style: {
            fontSize: '11px'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '11px'
          }
        }
      },
      tooltip: {
        y: {
          formatter: (val) => val === null ? 'N/A' : val + "%"
        }
      },
      legend: {
  show: false
}
    }
  ),

  security: new ApexCharts(
    document.querySelector("#chart-security"),
    {
      chart: {
        type: 'donut',
        height: 230
      },
      series: [52.6, 37.4],
      labels: ['Protected', 'Unprotected'],
      colors: ['#22c55e', '#ef4444'],
      legend: {
        position: 'bottom',
        fontSize: '12px'
      },
      // dataLabels: {
      //   enabled: false,
      //   formatter: (val) => val.toFixed(1) + "%"
      // },
      dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const customNumbers = [52.6, 37.4]; // numbers shown ON pie
        return customNumbers[opts.seriesIndex];
      }
      },
      tooltip: {
        y: {
          formatter: (val) => val.toFixed(1) + "%"
        }
      }
    }
  ),

  config: new ApexCharts(
     document.querySelector("#chart-config"),
  {
    chart: { type: 'bar', height: 230, stacked: true, toolbar: { show: false } },
    series: [
      { name: 'Compliant', data: [80, 70, 85] },
      { name: 'Non-Compliant', data: [20, 30, 15] }
    ],
    xaxis: { categories: ['Servers','Network','Endpoints'] },
    colors: ['#22c55e', '#ef4444'],
    plotOptions: { bar: { borderRadius: 4 } }
  }

  ),

  gap: new ApexCharts(
    document.querySelector("#chart-gap"),
    {
      chart: {
        type: 'bar',
        height: 230,
        toolbar: { show: false }
      },
      series: [{ name: 'Gaps Found', data: [12,9,7,5,3] }],
      xaxis: { 
        categories: ['Infra','Network','IAM','Apps','Policies'] 
      }
    }
  )
};

/* RENDER APEX CHARTS */
Object.values(charts).forEach(c => c.render());

/* Highcharts - Performance Gauge */
Highcharts.chart('chart-performance', {
  chart: {
    type: 'gauge',
    height: 230,
    backgroundColor: 'transparent',
    plotBorderWidth: 0,
    plotShadow: false
  },
  credits: {
    enabled: false
},

  title: {
    text: null
  },

  pane: {
    startAngle: -90,
    endAngle: 90,
    background: null,
    center: ['50%', '75%'],
    size: '110%'
  },

  yAxis: {
    min: 0,
    max: 100,
    tickPosition: 'inside',
    tickLength: 10,
    tickWidth: 2,
    lineWidth: 0,
    labels: {
      distance: 15,
      style: { fontSize: '11px' }
    },
    plotBands: [{
      from: 0,
      to: 60,
      color: '#ef4444',
      thickness: 15
    }, {
      from: 60,
      to: 80,
      color: '#facc15',
      thickness: 15
    }, {
      from: 80,
      to: 100,
      color: '#22c55e',
      thickness: 15
    }]
  },

  series: [{
    name: 'Performance Score',
    data: [64.5],                      // ← changed from 78 to 64.5
    tooltip: {
      valueSuffix: '%'
    },
    dataLabels: {
      format: '<div style="text-align:center">' +
              '<span style="font-size:20px;font-weight:600">{y}%</span><br/>' +
              '<span style="font-size:12px;opacity:0.6">Score</span>' +
              '</div>',
      borderWidth: 0,
      useHTML: true
    },
    dial: {
      radius: '80%',
      backgroundColor: '#6366f1',
      baseWidth: 8,
      baseLength: '0%',
      rearLength: '0%'
    },
    pivot: {
      backgroundColor: '#6366f1',
      radius: 5
    }
  }]
});


/* Modal click handler */
document.querySelectorAll('.chart-click').forEach(chartEl => {
  chartEl.addEventListener('click', () => {
    const moduleKey = chartEl.id.replace('chart-', '');
    const modalTitleMap = {
      health: 'Health Quotient – Detailed Metrics',
      performance: 'Performance & HA Grading',
      security: 'Security Posture Findings',
      config: 'Configuration Assistance Details',
      gap: 'Gap Analysis & Recommendations'
    };

    document.getElementById('modalTitle').innerText =
      modalTitleMap[moduleKey];

    document.getElementById('modalTableContainer').innerHTML =
      tables[moduleKey];
  });
});